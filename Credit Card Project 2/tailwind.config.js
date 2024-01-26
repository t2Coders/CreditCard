/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ 
    "./index.html",      // HTML file in the same directory
    "./javascript/first.js"  // JavaScript files in the "javascript" folder
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

