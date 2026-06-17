// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    preview: {
      allowedHosts: ["eli-robinson.dev", "100.69.141.115"],
    },
  },
});
