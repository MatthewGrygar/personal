import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        amber: {
          smoke: "#F2E0D0",
          deep: "#E8C9B0",
          warm: "#D4B08A",
        },
        blue: {
          mirage: "#6E88B0",
          light: "#8BA3C7",
          pale: "#C5D3E8",
        },
        ink: {
          DEFAULT: "#1C1814",
          soft: "#3A342C",
          muted: "#6B6055",
        },
        surface: {
          DEFAULT: "#FAF5F0",
          2: "#F5EDE4",
        },
      },
      fontFamily: {
        display: ["Cormorant Garamond", "serif"],
        sans: ["DM Sans", "sans-serif"],
        mono: ["DM Mono", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
