/** @type {import('tailwindcss').Config} */

const defaultSansFont = require('tailwindcss/defaultTheme')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        sans: ['Inter var', ...defaultSansFont.fontFamily.sans]
      }
    },
  },
  plugins: [],
}

