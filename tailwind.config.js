module.exports = {
  purge: {
    mode: 'all',
    preserveHtmlElements: false,
    content: [
      './index.html',
      './main.js',
    ],
    options: {
      keyframes: true,
    },
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
