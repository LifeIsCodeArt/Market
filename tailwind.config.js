/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js,vue}"],
  theme: {
    extend: {
      fontFamily: {
        cardo: ['Cardo', 'serif'],
        roboto: ['Roboto', 'sans-serif'],
        orbitron: ['Orbitron', 'sans-serif'],
      },
      backgroundImage: {
        'clickImage': 'url(@/assets/images/image-right.png)',
      },
      background: {
        'clickModalBackground': 'linear-gradient(180deg, #130625 0%, #1B0929 100%);'
      },
      screens: {
        'sll': '375px',
      }
    }
  },
  plugins: [],
}