#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

mod commands;
mod menu;
mod window;

fn main() {
    use window::WindowExt;

    use commands::check_has_database::check_has_database;
    use menu::construct_menu;
    use tauri::Manager;

    tauri::Builder::default()
        .menu(construct_menu())
        .setup(|app| {
            let win = app.get_window("main").unwrap();
            win.hide_titlebar();

            Ok(())
        })
        .invoke_handler(tauri::generate_handler![check_has_database])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
