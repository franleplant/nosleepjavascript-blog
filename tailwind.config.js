//const PINK = "#eb37d0"
const PINK = "#eb3782";
const PINK_BG = "#ed3785";
const YELLOW = "#ffd703";

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "media",
  theme: {
    extend: {
      colors: {
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
    },
  },
  plugins: [],
};
