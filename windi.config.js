//import { defineConfig } from "windicss/helpers";

export default {
  attributify: true,
  plugins: [require("daisyui")],
  extract: {
    include: ["**/*.{vue,html,jsx,tsx}"],
    exclude: ["node_modules", ".git"],
  },
};
