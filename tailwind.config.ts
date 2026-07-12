import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      xs: "400px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        primary: "#DCB84F",
        appGrey: {
          400: "hsl(var(--bg-hover) / <alpha-value>)",
        },
        background: "hsl(var(--background) / <alpha-value>)",
        foreground: "hsl(var(--foreground) / <alpha-value>)",
        "foreground-muted": "hsl(var(--foreground-muted) / <alpha-value>)",
        overlay: "hsl(var(--overlay) / <alpha-value>)",
        "surface-100": "hsl(var(--colors-gray-dark-100) / <alpha-value>)",
      },
      maxWidth: {
        content: "1200px",
      },
      fontFamily: {
        sans: [
          "var(--font-inter)",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
        display: [
          "var(--font-grotesk)",
          "var(--font-inter)",
          "ui-sans-serif",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};
export default config;
