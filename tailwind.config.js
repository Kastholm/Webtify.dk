module.exports = {
  content: ["node_modules/preline/dist/*.js"],
  plugins: [require("preline/plugin")],
  theme: {
    extend: {
      colors: {
        midnight: "#0A6C74",
        cyangreen: "#316b74",
        smooth: "#FAF9F7",
        elipse: "#191919",
      },
    },
  },
};
