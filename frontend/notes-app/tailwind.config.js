/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Colors used
      colors:{
        primary:"#36454F",
        secondary:"#36454F"
      },
    },
  },
  plugins: [],
}