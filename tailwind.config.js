/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        "green-button-gradient":
          "linear-gradient(264.19deg, #329C71 5.7%, #275A45 137.03%)",
        "black-button-gradient":
          "linear-gradient(85.53deg, #090909 12.42%, #535353 81.54%)",
      },
      colors: {
        secondary: "#FFEFEF",
        igray: "#F1F1F1",
        iblack: "#101010",
        igrey: "#4A4A4A",
      },
      screens: {
        xs: "400px",
        "3xl": "1600px",
      },
    },
  },
  plugins: [],
};
