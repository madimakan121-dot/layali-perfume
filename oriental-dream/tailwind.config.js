/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#09070d',
        panel: '#14101a',
        gold: '#c89b6a',
        softgold: '#e9d7b2',
        sand: '#efe1d1',
        smoke: '#bbb2ab'
      },
      boxShadow: {
        glow: '0 30px 80px rgba(200, 155, 106, 0.18)',
        soft: '0 18px 40px rgba(0, 0, 0, 0.18)'
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: []
};