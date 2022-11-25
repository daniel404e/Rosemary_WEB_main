/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      screens: {
        desktop: '1840px'
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        primary: '#057AFF',
        primarylight: '#599deb',
        secondary: '#463AA1',
        secondarylight: '#7367c7',
        dark: '#4F4846',
        white: ' #FDF8F5'
      }
    }
  },
  plugins: []
}
