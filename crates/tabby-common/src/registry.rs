use std::{fs, path::PathBuf};

use anyhow::{Context, Result};
use serde::{Deserialize, Serialize};

use crate::path::models_dir;

#[derive(Serialize, Deserialize)]
pub struct ModelInfo {
    pub name: String,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub prompt_template: Option<String>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub chat_template: Option<String>,
    pub urls: Vec<String>,
    pub sha256: String,
}

fn models_json_file(registry: &str) -> PathBuf {
    models_dir().join(registry).join("models.json")
}

async fn load_remote_registry(registry: &str) -> Result<Vec<ModelInfo>> {
    let model_info = reqwest::get(format!(
        "https://raw.githubusercontent.com/{}/registry-tabby/main/models.json",
        registry
    ))
    .await
    .context("Failed to download")?
    .json()
    .await
    .context("Failed to get JSON")?;
    let dir = models_dir().join(registry);
    // We don't want to fail if the TabbyML directory already exists,
    // which is exactly, what `create_dir_all` will do, see
    // https://doc.rust-lang.org/std/fs/fn.create_dir.html#errors.
    if !dir.exists() {
        fs::create_dir_all(&dir).context(format!("Failed to create dir {dir:?}"))?;
    }
    serdeconv::to_json_file(&model_info, models_json_file(registry))
        .context("Failed to convert JSON to file")?;
    Ok(model_info)
}

fn load_local_registry(registry: &str) -> Result<Vec<ModelInfo>> {
    Ok(serdeconv::from_json_file(models_json_file(registry))?)
}

#[derive(Default)]
pub struct ModelRegistry {
    pub name: String,
    pub models: Vec<ModelInfo>,
}

impl ModelRegistry {
    pub async fn new(registry: &str) -> Self {
        Self {
            name: registry.to_owned(),
            // load model info from local registry
            models: load_local_registry(registry).unwrap_or_else(|err| {
                    panic!(
                        "Failed to fetch model organization <{}>: {:?}",
                        registry, err
                    )
                })

        }
    }

    fn get_model_dir(&self, name: &str) -> PathBuf {
        models_dir().join(&self.name).join(name)
    }

    pub fn get_model_path(&self, name: &str) -> PathBuf {
        self.get_model_dir(name).join(GGML_MODEL_RELATIVE_PATH)
    }

    pub fn save_model_info(&self, name: &str) {
        let model_info = self.get_model_info(name);
        let path = self.get_model_dir(name).join("tabby.json");
        fs::create_dir_all(path.parent().unwrap()).unwrap();
        serdeconv::to_json_file(model_info, path).unwrap();
    }

    pub fn get_model_info(&self, name: &str) -> &ModelInfo {
        self.models
            .iter()
            .find(|x| x.name == name)
            .unwrap_or_else(|| panic!("Invalid model_id <{}/{}>", self.name, name))
    }
}

pub fn parse_model_id(model_id: &str) -> (&str, &str) {
    let parts: Vec<_> = model_id.split('/').collect();
    if parts.len() == 1 {
        ("TabbyML", parts[0])
    } else if parts.len() == 2 {
        (parts[0], parts[1])
    } else {
        panic!("Invalid model id {}", model_id);
    }
}

pub static GGML_MODEL_RELATIVE_PATH: &str = "ggml/q8_0.v2.gguf";
