/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        cool: ['"Coolvetica Condensed"', "sans-serif"],
      },
      colors: {
        primary: "#CEFF65", // give it a name you like
      },
    },
  },
  plugins: [],
};
