import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vitest/config";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
	},
	server: {
		open: true,
	},
	build: {
		outDir: "dist",
		sourcemap: true,
	},
	test: {
		globals: true,
		environment: "jsdom",
		setupFiles: "src/setupTests",
		mockReset: true,
	},
});
