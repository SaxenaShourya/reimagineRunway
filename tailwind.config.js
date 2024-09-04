/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "clash-display": ["ClashDisplay", "sans-serif"],
        "clash-display-bold": ["ClashDisplay-Bold", "sans-serif"],
        "clash-display-medium": ["ClashDisplay-Medium", "sans-serif"],
        geist: ["Geist", "sans-serif"],
        "geist-bold": ["Geist-Bold", "sans-serif"],
        "geist-medium": ["Geist-Medium", "sans-serif"],
      },
      colors: {
        light: "rgb(238,238,238)",
        dark: "rgb(12,12,12)",
      },
      animation: {
        pulse: "pulse 0.5s infinite alternate",
        "pulse-inner": "pulse-inner 0.5s infinite alternate",
        expand: "expand 0.5s forwards",
      },
      keyframes: {
        pulse: {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(0.7)" },
        },
        "pulse-inner": {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(0.4)" },
        },
        expand: {
          "0%": { transform: "scale(1)", opacity: "1" },
          "50%": { transform: "scale(3)" },
          "100%": { transform: "scale(1)", opacity: "0" },
        },
      },
    },
  },
  plugins: [],
};
