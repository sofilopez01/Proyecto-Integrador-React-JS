import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  resolve: {
    alias: [{ find: "@src", replacement: path.resolve(__dirname, "src") }]
  },
  publicDir: path.resolve(__dirname, "src/assets"),
  plugins: [react()]
});
