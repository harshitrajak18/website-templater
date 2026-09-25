import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        home: resolve(__dirname, "index.html"),
        product: resolve(__dirname, "product/index.html"),
        solutions: resolve(__dirname, "solutions/index.html"),
        features: resolve(__dirname, "features/index.html"),
        integrations: resolve(__dirname, "integrations/index.html"),
        pricing: resolve(__dirname, "pricing/index.html"),
        about: resolve(__dirname, "about/index.html"),
        careers: resolve(__dirname, "careers/index.html"),
        blog: resolve(__dirname, "blog/index.html"),
        resources: resolve(__dirname, "resources/index.html"),
        contact: resolve(__dirname, "contact/index.html"),
        team: resolve(__dirname, "team/index.html"),
        customers: resolve(__dirname, "customers/index.html"),
        faq: resolve(__dirname, "faq/index.html"),
        security: resolve(__dirname, "security/index.html"),
        privacy: resolve(__dirname, "privacy/index.html"),
        terms: resolve(__dirname, "terms/index.html"),
        signin: resolve(__dirname, "signin/index.html"),
        getstarted: resolve(__dirname, "get-started/index.html"),
      },
    },
  },
});
