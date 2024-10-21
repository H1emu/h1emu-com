import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  css: {
    postcss: {
      // This is optional; you can include additional PostCSS plugins here if needed
      plugins: [],
    },
  },
});
