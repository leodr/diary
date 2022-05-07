import * as ReactDOM from "react-dom/client";
import { Root } from "./components/Root";

const root = document.getElementById("app")!;
const reactRoot = ReactDOM.createRoot(root);

reactRoot.render(<Root />);
