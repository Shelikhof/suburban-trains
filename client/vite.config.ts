import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@1_app": path.resolve(__dirname, "./src/1_app"),
      "@2_pages": path.resolve(__dirname, "./src/2_pages"),
      "@3_widgets": path.resolve(__dirname, "./src/3_widgets"),
      "@4_features": path.resolve(__dirname, "./src/4_features"),
      "@5_entities": path.resolve(__dirname, "./src/5_entities"),
      "@6_shared": path.resolve(__dirname, "./src/6_shared"),
    },
  },
});
