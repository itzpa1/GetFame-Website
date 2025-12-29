import { defineConfig } from "vite";
import path from "path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    proxy: {
      // This matches the fetch calls in InstagramDemo.tsx
      '/proxied-api': {
        target: 'https://zefame-free.com',
        changeOrigin: true, // Required to bypass CORS
        secure: false,      // Ignores SSL issues if any
        rewrite: (path) => path.replace(/^\/proxied-api/, ''), // Removes the prefix
      }
    }
  }
});