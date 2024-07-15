/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '70px': '70px',
        '600px': '600px',
      }
    },
  },
  plugins: [],
}

