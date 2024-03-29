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
        'intro': 'auto 1fr',
        'timeline': '1fr auto 1fr',
        'prizeAndReward': '1fr auto',
      },
      animation: {
        'spin-slow': 'spin 9s linear infinite',
      },
      backgroundSize: {
        'size-100': '100% 100%',
      },
      backgroundPosition: {
        'pos-0': '0% 0%',
        'pos-200': '200% 200%',
      },
    },
  },
  plugins: [],
}

