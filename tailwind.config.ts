import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "selector",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "color-bg-primary-dark": "var(--color-bg-primary-dark)",
        "color-bg-primary-light": "var(--color-bg-primary-light)",
        "color-bg-secondary-dark": "var(--color-bg-secondary-dark)",
        "color-bg-secondary-light": "var(--color-bg-secondary-light)",
      },
    },
  },
  plugins: [],
};
export default config;
