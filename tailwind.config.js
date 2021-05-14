module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      maxWidth: {
        'd-nav': '250px'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
