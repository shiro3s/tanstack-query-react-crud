import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { App } from "./app/App";
import "normalize.css";

const root = document.getElementById("root");

// biome-ignore lint: lint/style/noNonNullAssertion
createRoot(root!).render(
	<StrictMode>
		<App />
	</StrictMode>,
);
