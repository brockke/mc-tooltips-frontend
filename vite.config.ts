import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        video_overlay: resolve(__dirname, "src/video_overlay/index.html"),
      },
    },
  },
  plugins: [react()],
  server: {
    port: 3000,
  },
  base: "",
});
