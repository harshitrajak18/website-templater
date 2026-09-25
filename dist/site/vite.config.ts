import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        home: resolve(__dirname, "index.html"),
        about: resolve(__dirname, "about/index.html"),
        pricing: resolve(__dirname, "pricing/index.html"),
        contact: resolve(__dirname, "contact/index.html"),
        signin: resolve(__dirname, "SignIn/index.html"),
      },
    },
  },
});
