import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx,mdx}",
    "./components/**/*.{ts,tsx,mdx}",
    "./content/**/*.{mdx,md}"
  ],
  theme: {
    extend: {
      colors: {
        night: "#0f0f0f",
        ivory: "#f5f1e8",
        accent: "#ff4d4d"
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        serif: ["var(--font-georgia)", "serif"],
      },
      transitionTimingFunction: {
        'soft': 'cubic-bezier(0.4, 0, 0.2, 1)'
      }
    },
  },
  plugins: [],
};

export default config;
