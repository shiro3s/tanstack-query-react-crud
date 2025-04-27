import path from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import kumaUI from "@kuma-ui/vite";

export default defineConfig({
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
		},
	},
	plugins: [react(), kumaUI({ wasm: true })],
});
