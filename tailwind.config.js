/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  darkMode: 'class',
  theme: {
    extend: {},
    fontFamily:{
      Roboto:["Roboto, sans-serif"]
    },
    container:{
      padding:"1rem",
      center:true,
      
    },
    screens:{
      'mobile':'500px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
    }
  },
  plugins: [
    require('flowbite/plugin'),
   
  ],
}

