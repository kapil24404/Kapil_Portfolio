import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // ✅ Use "/" for local dev, and "/Kapil_Portfolio/" for GitHub Pages
  base: mode === "production" ? "/Kapil_Portfolio/" : "/",

  server: {
    host: "localhost", // safer on Windows than "::"
    port: 4000,        // dev server URL → http://localhost:4000
  },

  plugins: [
    react(),
    mode === "development" && componentTagger(),
  ].filter(Boolean),

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
