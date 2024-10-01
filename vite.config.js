import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000,
    host: "localhost",
    proxy: {
      "/api": "http://localhost:1337",
    },
  },
  plugins: [react()],
});
