module.exports = {
  content: ["index.html", "./src/**/*.{js,jsx,ts,tsx,vue,html}"],
  theme: {
    extend: {
      fontFamily: {
        josefin: ["Josefin sans", "sans-serrif"],
        lato: ["lato", "sans-serif"],
      },
    },
    colors: {
      white: "#CCCCCC",
      "grey-1": "#F8F8FD",
      "grey-2": "#E5E0FC",
      "grey-3": "#8A8FB9",
      black: "#101750",
      primary: "#FB2E86",
      "primary-dark": "#F0056A",
      "primary-light": "#FC5FA2",
      secondary: "#F9BA00",
      "secondary-light": "#FFF3CE",
      tertiary: "#7E33E0",
      danger: "#FB2448",
      "danger-light": "#FEB9C4",
      info: "#603EFF",
      "info-light": "#DDD6FF",
      success: "#0CC562",
      "success-light": "#92F2BF",
      "success-dark": "#00994C",
      hero: "#F2F0FF",
    },
  },
  plugins: [],
};
