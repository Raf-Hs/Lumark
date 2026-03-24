use tauri::{AppHandle, Manager};

// Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}

#[tauri::command]
fn save_content(app: AppHandle, content: String) -> Result<(), String> {
    use std::fs;

    let app_dir = app
        .path()
        .app_data_dir()
        .expect("failed to retrieve app data dir");

    // Ensure the directory exists
    fs::create_dir_all(&app_dir)
        .map_err(|e| format!("Failed to create app data dir: {}", e))?;

    let file_path = app_dir.join("content.md");

    fs::write(&file_path, content)
        .map_err(|e| format!("Failed to write content file: {}", e))?;

    Ok(())
}

#[tauri::command]
fn load_content(app: AppHandle) -> Result<String, String> {
    use std::fs;

    let app_dir = app
        .path()
        .app_data_dir()
        .map_err(|e| format!("Failed to get app data dir: {}", e))?;

    let file_path = app_dir.join("content.md");

    if file_path.exists() {
        let content = fs::read_to_string(&file_path)
            .map_err(|e| format!("Failed to read content file: {}", e))?;
        Ok(content)
    } else {
        Ok(String::new()) // Return empty string if file doesn't exist
    }
}

#[tauri::command]
fn add_file(app: AppHandle, file_name: String) -> Result<(), String> {
    use std::fs;

    let app_dir = app
        .path()
        .app_data_dir()
        .expect("failed to retrieve app data dir");

    // Ensure the directory exists
    fs::create_dir_all(&app_dir)
        .map_err(|e| format!("Failed to create app data dir: {}", e))?;

    let file_path = app_dir.join(file_name + ".md");

    fs::write(&file_path, "")
        .map_err(|e| format!("Failed to create file: {}", e))?;

    Ok(())
}

#[tauri::command]
fn load_files(app: AppHandle) -> Result<Vec<String>, String> {
    use std::fs;

    let app_dir = app
        .path()
        .app_data_dir()
        .map_err(|e| format!("Failed to get app data dir: {}", e))?;

    if !app_dir.exists() {
        return Ok(vec![]); // Return empty list if directory doesn't exist
    }

    let mut files = Vec::new();
    for entry in fs::read_dir(app_dir).map_err(|e| format!("Failed to read app data dir: {}", e))? {
        let entry = entry.map_err(|e| format!("Failed to read directory entry: {}", e))?;
        let path = entry.path();
        if path.is_file() {
            if let Some(file_name) = path.file_stem().and_then(|s| s.to_str()) {
                files.push(file_name.to_string());
            }
        }
    }

    Ok(files)
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_opener::init())
        .invoke_handler(tauri::generate_handler![
            greet,
            save_content,
            load_content,
            add_file,
            load_files
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
