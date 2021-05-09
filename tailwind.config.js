// tailwind.config.js
const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./**/*.njk','./**/*.md','./**/*.svg'],
  darkMode: false,
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      red: {
        DEFAULT: '#d00000'
      }
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
