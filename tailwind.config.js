/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        "sm2": "564px",
        "lg2": "1080px",
      }
    },
  },
  plugins: [],
}
