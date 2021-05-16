// tailwind.config.js
const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./**/*.njk','./**/*.md','./**/*.svg'],
  darkMode: false,
  theme: {
    fontFamily: {
      'sans': ['Fira Sans', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji']
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: {
        DEFAULT: '#d10a10'
      }
    },
    extend: {},
  },
  variants: {
    extend: {
      scale: ['group-hover'],
    },
  },
  plugins: [],
}
