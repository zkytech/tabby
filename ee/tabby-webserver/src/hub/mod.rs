pub mod api;
mod websocket;

use std::{
    net::{IpAddr, SocketAddr},
    sync::Arc,
};

use api::{ConnectHubRequest, Hub};
use axum::{
    extract::{ws::WebSocket, ConnectInfo, State, WebSocketUpgrade},
    response::IntoResponse,
    TypedHeader,
};
use hyper::{Body, StatusCode};
use juniper_axum::extract::AuthBearer;
use tabby_common::{api::code::SearchResponse, config::RepositoryConfig};
use tarpc::server::{BaseChannel, Channel};
use tracing::warn;
use websocket::WebSocketTransport;

use crate::schema::ServiceLocator;

pub(crate) async fn ws_handler(
    ws: WebSocketUpgrade,
    State(state): State<Arc<dyn ServiceLocator>>,
    AuthBearer(token): AuthBearer,
    ConnectInfo(addr): ConnectInfo<SocketAddr>,
    TypedHeader(request): TypedHeader<ConnectHubRequest>,
) -> impl IntoResponse {
    let unauthorized = axum::response::Response::builder()
        .status(StatusCode::UNAUTHORIZED)
        .body(Body::empty())
        .unwrap()
        .into_response();

    let Some(token) = token else {
        return unauthorized;
    };

    let Ok(registeration_token) = state.worker().read_registration_token().await else {
        return unauthorized;
    };

    if token != registeration_token {
        return unauthorized;
    }

    ws.on_upgrade(move |socket| handle_socket(state, socket, addr.ip(), request))
        .into_response()
}

async fn handle_socket(
    state: Arc<dyn ServiceLocator>,
    socket: WebSocket,
    addr: IpAddr,
    req: ConnectHubRequest,
) {
    let transport = WebSocketTransport::from(socket);
    let server = BaseChannel::with_defaults(transport);
    let addr = match req {
        ConnectHubRequest::Scheduler => None,
        ConnectHubRequest::Worker(worker) => {
            state
                .worker()
                .register_worker(worker.into_worker(addr))
                .await
                .unwrap();
            Some(addr.to_string())
        }
    };
    let imp = Arc::new(HubImpl::new(state.clone(), addr));
    tokio::spawn(server.execute(imp.serve())).await.unwrap()
}

struct HubImpl {
    ctx: Arc<dyn ServiceLocator>,
    worker_addr: Option<String>,
}

impl HubImpl {
    fn new(ctx: Arc<dyn ServiceLocator>, worker_addr: Option<String>) -> Self {
        Self { ctx, worker_addr }
    }
}

impl Drop for HubImpl {
    fn drop(&mut self) {
        let ctx = self.ctx.clone();
        if let Some(worker_addr) = self.worker_addr.clone() {
            tokio::spawn(async move {
                ctx.worker().unregister_worker(worker_addr.as_str()).await;
            });
        }
    }
}

#[tarpc::server]
impl Hub for Arc<HubImpl> {
    async fn log_event(self, _context: tarpc::context::Context, content: String) {
        self.ctx.logger().log(content)
    }

    async fn search(
        self,
        _context: tarpc::context::Context,
        q: String,
        limit: usize,
        offset: usize,
    ) -> SearchResponse {
        match self.ctx.code().search(&q, limit, offset).await {
            Ok(serp) => serp,
            Err(err) => {
                warn!("Failed to search: {}", err);
                SearchResponse::default()
            }
        }
    }

    async fn search_in_language(
        self,
        _context: tarpc::context::Context,
        language: String,
        tokens: Vec<String>,
        limit: usize,
        offset: usize,
    ) -> SearchResponse {
        match self
            .ctx
            .code()
            .search_in_language(&language, &tokens, limit, offset)
            .await
        {
            Ok(serp) => serp,
            Err(err) => {
                warn!("Failed to search: {}", err);
                SearchResponse::default()
            }
        }
    }
    async fn list_repositories(self, _context: tarpc::context::Context) -> Vec<RepositoryConfig> {
        let result = self
            .ctx
            .repository()
            .list_repositories(None, None, None, None)
            .await
            .map_err(|e| e.to_string())
            .map(|v| {
                v.into_iter()
                    .map(|r| RepositoryConfig::new_named(r.name, r.git_url))
                    .collect()
            });
        result.unwrap_or_else(|e| {
            warn!("Failed to fetch repositories: {e}");
            vec![]
        })
    }

    async fn create_job_run(self, _context: tarpc::context::Context, name: String) -> i32 {
        self.ctx
            .job()
            .create_job_run(name)
            .await
            .unwrap_or_else(|e| {
                warn!("Failed to create job run: {e}");
                0
            })
    }

    async fn update_job_stdout(self, _context: tarpc::context::Context, id: i32, stdout: String) {
        if let Err(err) = self.ctx.job().update_job_stdout(id, stdout).await {
            warn!("Failed to update job output: {err}");
        }
    }

    async fn update_job_stderr(self, _context: tarpc::context::Context, id: i32, stderr: String) {
        if let Err(err) = self.ctx.job().update_job_stderr(id, stderr).await {
            warn!("Failed to update job output: {err}");
        }
    }

    async fn complete_job_run(self, _context: tarpc::context::Context, id: i32, exit_code: i32) {
        if let Err(err) = self.ctx.job().complete_job_run(id, exit_code).await {
            warn!("Failed to complete job run: {err}");
        }
    }
}
