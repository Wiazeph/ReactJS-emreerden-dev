/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        screens: {
          sm: "640px",
          md: "768px",
        },
      },
      fontFamily: {
        Heebo: ["Heebo", "sans-serif"],
        Caveat: ["Caveat", "cursive"],
      },
      colors: {
        baseBgColor: "#1a1a1a",
      },
    },
  },
  plugins: [],
};
