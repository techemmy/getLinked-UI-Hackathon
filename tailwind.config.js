/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primaryStart: 'var(--color-primary-start)',
        primaryEnd: 'var(--color-primary-end)',
        secondary: 'var(--color-secondary)',
        purpleDark: 'var(--color-purple-dark)',
        purpleLight: 'var(--color-purple-light)',
        borderColor: 'rgba(255, 255, 255, 0.18)',
        purpleDarkWithOpacity12: 'rgba(144, 58, 255, 0.12)',
        purpleLightWithOpacity12: 'rgba(212, 52, 254, 0.12)',
        purpleLightWithOpacity3: 'rgba(217, 217, 217, 0.03)',
        purpleLightWithOpacity1: 'rgba(212, 52, 254, 0.01)',
        whiteWithOpacity75: 'rgba(255, 255, 255, 0.75)',
      },
      fontFamily: {
        'sans': ['Clash Display', ...defaultTheme.fontFamily.sans],
        'mont': ['Montserrat', 'sans'],
        'unica': ['Unica One', 'sans'],
      },
      gridTemplateColumns: {
        // Simple 16 column grid
        'timeline': '1fr auto 1fr',
        'prizeAndReward': '1fr auto',
      }

    },
  },
  plugins: [],
}

