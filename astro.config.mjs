// @ts-check
import { defineConfig, envField } from "astro/config";

import tailwindcss from "@tailwindcss/vite";
// import { boolean } from "astro:schema";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
//   env: {
//     schema: {
//       IS_ENABLE: envField.boolean({context : "server", access : "public"}),
//     }
// },
});
