/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "my-pink": "#F375CD",
      }
      ,
      fontFamily: {
        AbyssinicaSIL: ["AbyssinicaSIL", ...defaultTheme.fontFamily.serif],
      }
    },
  },
  plugins: [],
}
