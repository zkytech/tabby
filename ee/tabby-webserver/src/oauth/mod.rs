use std::sync::Arc;

use anyhow::Result;
use async_trait::async_trait;
use axum::{
    extract::{Query, State},
    http::StatusCode,
    response::Redirect,
    routing, Json, Router,
};
use lazy_static::lazy_static;
use serde::Deserialize;
use tracing::error;

use crate::{
    oauth::{github::GithubClient, google::GoogleClient},
    schema::auth::{AuthenticationService, OAuthError, OAuthProvider, OAuthResponse},
};

pub mod github;
pub mod google;

type OAuthState = Arc<dyn AuthenticationService>;

pub fn routes(state: Arc<dyn AuthenticationService>) -> Router {
    Router::new()
        .route("/signin", routing::get(signin_handler))
        .route("/providers", routing::get(providers_handler))
        .route("/callback/github", routing::get(github_oauth_handler))
        .route("/callback/google", routing::get(google_oauth_handler))
        .with_state(state)
}

#[async_trait]
pub trait OAuthClient: Send + Sync {
    async fn fetch_user_email(&self, code: String) -> Result<String>;
    async fn get_authorization_url(&self) -> Result<String>;
}

pub fn new_oauth_client(
    provider: OAuthProvider,
    auth: Arc<dyn AuthenticationService>,
) -> Arc<dyn OAuthClient> {
    match provider {
        OAuthProvider::Google => Arc::new(GoogleClient::new(auth)),
        OAuthProvider::Github => Arc::new(GithubClient::new(auth)),
    }
}

#[derive(Deserialize)]
struct SigninQueryParams {
    provider: OAuthProvider,
}

async fn signin_handler(
    State(state): State<OAuthState>,
    Query(params): Query<SigninQueryParams>,
) -> Result<Redirect, StatusCode> {
    let redirect_uri = new_oauth_client(params.provider, state)
        .get_authorization_url()
        .await;

    match redirect_uri {
        Ok(uri) => Ok(Redirect::temporary(&uri)),
        Err(e) => {
            error!("Failed to get authorization URL: {:?}", e);
            Err(StatusCode::INTERNAL_SERVER_ERROR)
        }
    }
}

async fn has_provider(auth: &Arc<dyn AuthenticationService>, x: &OAuthProvider) -> bool {
    auth.read_oauth_credential(x.clone())
        .await
        .is_ok_and(|x| x.is_some())
}

async fn providers_handler(state: State<OAuthState>) -> Json<Vec<OAuthProvider>> {
    let candidates = vec![OAuthProvider::Google, OAuthProvider::Github];
    let mut providers = vec![];

    for x in candidates {
        if has_provider(&state, &x).await {
            providers.push(x);
        }
    }

    Json(providers)
}

#[derive(Deserialize)]
#[allow(dead_code)]
struct GithubOAuthQueryParam {
    code: String,
    state: Option<String>,
}

async fn github_oauth_handler(
    State(state): State<OAuthState>,
    Query(param): Query<GithubOAuthQueryParam>,
) -> Redirect {
    match_auth_result(
        OAuthProvider::Github,
        state.oauth(param.code, OAuthProvider::Github).await,
    )
}

#[derive(Deserialize)]
#[allow(dead_code)]
struct GoogleOAuthQueryParam {
    #[serde(default)]
    code: String,
    #[serde(default)]
    scope: String,
    #[serde(default)]
    error: String,
}

async fn google_oauth_handler(
    State(state): State<OAuthState>,
    Query(param): Query<GoogleOAuthQueryParam>,
) -> Redirect {
    if !param.error.is_empty() {
        return make_error_redirect(OAuthProvider::Google, &param.error);
    }
    match_auth_result(
        OAuthProvider::Google,
        state.oauth(param.code, OAuthProvider::Google).await,
    )
}

lazy_static! {
    static ref OAUTH_REDIRECT_URL: String = std::env::var("OAUTH_REDIRECT_URL").unwrap_or_default();
}

fn match_auth_result(
    provider: OAuthProvider,
    result: Result<OAuthResponse, OAuthError>,
) -> Redirect {
    match result {
        Ok(resp) => {
            let uri = format!(
                "{}/auth/signin?refresh_token={}&access_token={}",
                OAUTH_REDIRECT_URL.as_str(),
                resp.refresh_token,
                resp.access_token,
            );
            Redirect::temporary(&uri)
        }
        Err(OAuthError::InvalidVerificationCode) => {
            make_error_redirect(provider, "Invalid oauth code")
        }
        Err(OAuthError::CredentialNotActive) => {
            make_error_redirect(provider, "OAuth is not enabled")
        }
        Err(OAuthError::UserNotInvited) => make_error_redirect(
            provider,
            "User is not invited, please contact your admin for help",
        ),
        Err(e) => {
            error!("Failed to authenticate: {:?}", e);
            make_error_redirect(provider, "Unknown error")
        }
    }
}

fn make_error_redirect(provider: OAuthProvider, message: &str) -> Redirect {
    let query = querystring::stringify(vec![
        ("error_message", urlencoding::encode(message).as_ref()),
        (
            "provider",
            serde_json::to_string(&provider).unwrap().as_str(),
        ),
    ]);
    let uri = format!("{}/auth/signin?{}", OAUTH_REDIRECT_URL.as_str(), query);
    Redirect::temporary(&uri)
}
