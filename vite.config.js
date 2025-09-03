import { defineConfig } from "vite";

export default defineConfig({
  server: {
    port: 5176,
    host: true,
    open: true,
  },
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});
