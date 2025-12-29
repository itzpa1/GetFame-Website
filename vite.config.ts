import { defineConfig, loadEnv } from "vite";
import path from "path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory.
  const env = loadEnv(mode, process.cwd(), "");

  return {
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    server: {
      proxy: {
        // This matches the fetch calls in InstagramDemo.tsx
        "/proxied-api": {
          target: env.VITE_API_BASE_URL || "https://zefame-free.com",
          changeOrigin: true, // Required to bypass CORS
          secure: false, // Ignores SSL issues if any
          rewrite: (path) => path.replace(/^\/proxied-api/, ""), // Removes the prefix
        },
      },
    },
  };
});
