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
        bg: {
          DEFAULT: "#080C12",
          2: "#0E1420",
          3: "#141B28",
        },
        gold: {
          DEFAULT: "#C9A84C",
          dim: "#7A5E24",
          bright: "#E8C068",
        },
        ink: {
          DEFAULT: "#E2DDD5",
          muted: "#7A8090",
          subtle: "#2A3245",
        },
      },
      fontFamily: {
        display: ["Cormorant Garamond", "serif"],
        sans: ["IBM Plex Sans", "sans-serif"],
        mono: ["IBM Plex Mono", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
