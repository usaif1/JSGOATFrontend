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
        // background colors
        "color-bg-primary-dark": "var(--color-bg-primary-dark)",
        "color-bg-primary-light": "var(--color-bg-primary-light)",
        "color-bg-secondary-dark": "var(--color-bg-secondary-dark)",
        "color-bg-secondary-light": "var(--color-bg-secondary-light)",

        // text-colors
        "color-text-primary-dark": "var(--color-text-primary-dark)",
        "color-text-primary-light": "var(--color-text-primary-light)",

        /* highlight colors */
        "color-highlight-primary": "var(--color-highlight-primary)",
        "color-highlight-secondary": "var(--color-highlight-secondary)",

        /* accents  */
        "color-accent-primary": "var(--color-accent-primary)",
        "color-accent-secondary": "var(--color-accent-secondary)",

        /* borders */
        "color-border-primary-dark": "var(--color-border-primary-dark)",
        "color-border-primary-light": "var(--color-border-primary-light)",
      },
    },
  },
  plugins: [],
};
export default config;
