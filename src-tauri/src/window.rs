use cocoa::appkit::NSWindow;
use tauri::{Runtime, Window};

pub trait WindowExt {
    #[cfg(target_os = "macos")]
    fn hide_titlebar(&self);
}

impl<R: Runtime> WindowExt for Window<R> {
    #[cfg(target_os = "macos")]
    fn hide_titlebar(&self) {
        use cocoa::appkit::{NSToolbar, NSWindowTitleVisibility};

        unsafe {
            let window = self.ns_window().unwrap() as cocoa::base::id;

            let toolbar = NSToolbar::alloc(window).init_();
            toolbar.setShowsBaselineSeparator_(cocoa::base::NO);

            window.setToolbar_(toolbar);

            window.setTitleVisibility_(NSWindowTitleVisibility::NSWindowTitleHidden);
            window.setTitlebarAppearsTransparent_(cocoa::base::YES);
        }
    }
}
