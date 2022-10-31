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
        "my-green":"#0E4749",
        "my-blue" : "#0D0221",
        "light-pink" : "#F2B8DE"
      }
      ,
      fontFamily: {
        AbyssinicaSIL: ["AbyssinicaSIL", ...defaultTheme.fontFamily.serif],
      }
    },
  },
  plugins: [],
}
