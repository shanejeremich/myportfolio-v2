import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@assets": "/src/assets",
      "@config": "/src/config",
      "@design-system": "/src/design-system",
      "@lib": "/src/lib",
      "@modules": "/src/modules",
      "@styles": "/src/assets/styles",
      "@utils": "/src/modules/core/utils",
    },
  },
});
