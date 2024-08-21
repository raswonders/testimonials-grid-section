/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "barlow-semi": ["Barlow Semi Condensed", "sans-serif"],
      },
      colors: {
        "dark-gray": "#48556A",
      },
    },
  },
  plugins: [],
};
