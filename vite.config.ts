import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";
import path from "path";
import { createProxyMiddleware } from "http-proxy-middleware";

import commonjs from "vite-plugin-commonjs";

export default defineConfig({
  plugins: [sveltekit(), commonjs()],
  assetsInclude: ["**/*.html"],

  resolve: {
    alias: {
      // создание алиаса
      $src: path.resolve("./src"),
      $assets: path.resolve("./src/routes/assets"),
    },
  },

  build: {
    // Устанавливаем dev: true только для целей разработки
    dev: true,
  },




  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@use "src/variables.scss" as *;',
      },
    },
  },
});

//# sourceMappingURL=vite.config.js.map
