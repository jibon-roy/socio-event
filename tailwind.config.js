/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'primary-dark': '#202020',
      'primary-pink': '#ed008c',
      'primary-sky': '#00aeef',
      'primary-white': '#F9F9F9'
    },
    extend: {},
  },
  plugins: [require("daisyui")],
}