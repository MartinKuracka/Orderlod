module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      maxWidth: {
        'd-nav': '250px'
      },
      backgroundColor: {
        'snippet': '#1E1E1E',
        'header' : '#E5A6A9',
        'header2' : '#e5e5e5'
      },
      colors: {
        'header' : '#E5A6A9',
        'header2' : '#e5e5e5'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
