import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    //
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layout/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/uiCore/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    keyframes: {
      slideDown: {
        "0%": { transform: "translateY(-100%)", opacity: "0" },
        "100%": { transform: "translateY(0)", opacity: "1" },
      },
      slideDownSort: {
        "0%": { transform: "translateY(-10%)", opacity: "0" },
        "100%": { transform: "translateY(0)", opacity: "1" },
      },
      slideUp: {
        "0%": { transform: "translateY(0)", opacity: "1" },
        "100%": { transform: "translateY(-100%)", opacity: "0" },
      },
      slideLeft: {
        "0%": { transform: "translateX(100%)", opacity: "0" },
        "100%": { transform: "translateX(0)", opacity: "1" },
      },
      slideRight: {
        "0%": { transform: "translateX(-100%)", opacity: "0" },
        "100%": { transform: "translateX(0)", opacity: "1" },
      },
      zoomInZoomOut: {
        "0%": { transform: "scale(1)" },
        "50%": { transform: "scale(1.2)" },
        "100%": { transform: "scale(1)" },
      },
    },
    animation: {
      slideDown: "slideDown 0.5s ease-out forwards",
      slideDownSort: "slideDownSort 0.5s ease-out forwards",
      slideUp: "slideUp 0.5s ease-out forwards",
      slideLeft: "slideLeft 0.5s ease-out forwards",
      slideRight: "slideRight 0.5s ease-out forwards",
      zoomInZoomOut: "zoomInZoomOut 14s ease-out infinite",
    },
  },
  plugins: [],
};
export default config;
