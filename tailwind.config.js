module.exports = {
  mode: 'jit',
  content: [
    './app/views/**/*.html.erb',
    './app/helpers/**/*.rb',
    './app/assets/stylesheets/**/*.css',
    './app/javascript/**/*.js'
  ],
  theme: {
    fontFamily: {
      sans: ["Futura", "Helvetica", "sans-serif"],
      serif: ["Source Serif Pro", "Times New Roman", "serif"]
    }
  }
}
