/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.html'],
  theme: {
    extend: {},
  },
  plugins: [
    require('tailwindcss-primeui'),
    require('@tailwindcss/typography')
  ],
}

