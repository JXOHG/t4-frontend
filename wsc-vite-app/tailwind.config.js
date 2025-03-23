/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: '#ffd95a',
        purple: '#7F42A9',
      },
      fontFamily: {
        georgia: ['Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}