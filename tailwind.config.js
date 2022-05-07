const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./index.html", "./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["iA Writer Quattro V", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        gray: colors.zinc,
        red: colors.rose,
      },
    },
  },
  plugins: [],
  darkMode: "media",
};
