import { Editor } from "./Editor";

export function Root() {
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
