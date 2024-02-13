/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/*.html',
    './public/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#780000', // Main button
        'primary-dark': '#C1121F',
        'secondary': '#669BBC', // Secondary button
        'background': '#FDF0D5', // Background
        'textcolor': '#003049', // Text
      }
    },
  },
  plugins: [],
}