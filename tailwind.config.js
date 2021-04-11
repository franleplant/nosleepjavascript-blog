//const PINK = "#eb37d0"
//const PINK = "#e91954" Nice bright for backgrounds, bad for fonts
//const PINK = "#eb3782"; // the original
const PINK = "#f11272";
const PINK_BG = "#ed3785";
const YELLOW = "#ffd703";

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "media",
  theme: {
    extend: {
      colors: {
        gray: { 800: "#20232a", 900: "#090909" },
        pink: {
          50: `${PINK}0a`,
          100: `${PINK}3d`,
          200: `${PINK}96`,
          400: `${PINK}de`,
          600: PINK,
          700: PINK_BG,
        },
        yellow: {
          600: YELLOW,
        },
      },
    },
  },
  variants: {
    extend: {
      zIndex: ["hover"],
      borderWidth: ["dark"],
      borderRadius: ["dark"],
    },
  },
  plugins: [],
};
