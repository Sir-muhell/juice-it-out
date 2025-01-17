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
      },
      colors: {
        iblack: "#101010",
        igrey: "#4A4A4A",
      },
    },
  },
  plugins: [],
};
