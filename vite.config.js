import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
	base: mode === "production" ? "/Eram/" : "/",
	plugins: [react(), tailwindcss()],
	server: {
		proxy: {
			"/api/openrouter": {
				target: "https://openrouter.ai",
				changeOrigin: true,
				secure: true,
				rewrite: (path) => path.replace(/^\/api\/openrouter/, ""),
			},
		},
	},
});

