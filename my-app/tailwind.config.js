/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      screens: {
        '3xl': '1600px',
        '4xl': '2000px'
      }
    },
  },
  plugins: [
    require('daisyui'),
    require('tailwind-scrollbar-hide')
  ],
}

