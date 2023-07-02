/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      spacing: {
        'container': '6rem',
      },
      boxShadow: {
        '3xl': 'rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px',
      },
      backgroundImage: {
        'home-hero': 'url(./images/home-hero.jpg)',
        'loginimg' : 'url(./images/Login.jpg)'
      },
      fontFamily:{
        'navlogo' : 'Belanosima'
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

