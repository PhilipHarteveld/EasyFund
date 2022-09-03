module.exports = {
  purge: ["./src/**/*.{js,jsx, ts,tsx}", "./public/index.html"],
  content: [
    "node_modules/daisyui/dist/**/*.js",
    "node_modules/react-daisyui/dist/**/*.js",
  ],

  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      Navblue: "#181C4B",
      background: "#14182E",
      midnight: "#121063",
      cardBackground: "#181C4B ",
      tahiti: "#4626B3",
      silver: "#ecebff",
      "bubble-gum": "#2B88D2",
      bermuda: "#78dcca",
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
