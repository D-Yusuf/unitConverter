/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        "primary": "#1C1C1C",
        "purple": "#6943FF",
        "main":"#F4F4F4",
        "title": "#5A537B",
        "info": "#353535"
      }
    },
    
  },
  plugins: [],
}
