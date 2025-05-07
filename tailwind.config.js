/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        dm: ["DM Sans", "sans-serif"],
        bebas: ['"Bebas Neue"', "sans-serif"],
      },
      backgroundImage: {
        "hero-image": "url('/src/assets/bg.webp')",
      },
      colors: {
        secondary: "#FFEFEF",
        igray: "#F1F1F1",
        iblack: "#101010",
        igrey: "#4A4A4A",
        ipurple: "#685BC7",
      },
      screens: {
        xs: "400px",
        "3xl": "1600px",
      },
    },
  },
  plugins: [],
};
