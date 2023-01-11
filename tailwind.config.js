module.exports = {
  mode: "jit",
  content: [
    "./app/views/**/*.html.erb",
    "./app/helpers/**/*.rb",
    "./app/assets/stylesheets/**/*.css",
    "./app/javascript/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        'lightyellow':'#FFF8EB',
      }
    },
    fontFamily: {
      serif: ["Source Serif Pro", "Times New Roman", "serif"],
    }
  }
};
