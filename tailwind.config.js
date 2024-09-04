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
    },
  },
  plugins: [],
};
