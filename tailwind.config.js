/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {
      fontFamily: {
        spline: ['Spline Sans', 'sans-serif'],  // Adding Spline Sans to Tailwind's fontFamily
      },
    },
  },
  plugins: [],
}

