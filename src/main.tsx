import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import "./index.css";
import App from "./App.tsx";
// import SmoothScrolling from "./smoothScroll.tsx";

// biome-ignore lint/style/noNonNullAssertion: <explanation>
createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<App />
	</StrictMode>,
);
