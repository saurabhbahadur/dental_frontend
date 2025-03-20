import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    minify: "terser", // Use terser for minification
    terserOptions: {
      compress: {
        drop_console: true, // Removes console.logs in production
      },
      format: {
        comments: false, // Removes comments to reduce file size
      },
    },
    chunkSizeWarningLimit: 600, // Ignore warnings for large chunk sizes
  },
});
