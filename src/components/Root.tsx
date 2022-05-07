import { Editor } from "./Editor";
import Login from "./Login";

export function Root() {
  const showLogin = false;

  if (showLogin) {
    return <Login />;
  }

  return (
    <div
      data-tauri-drag-region
      className="max-w-prose mx-auto px-3.5 min-h-screen"
      style={{ paddingTop: "calc(20px + 10vh)" }}
    >
      <div className="relative">
        <Editor />
      </div>
    </div>
  );
}
