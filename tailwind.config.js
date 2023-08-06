const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        interface: {
          primary: '#fccc13',
          secondary: '#161b21',
          tertiary: '#0e1317'
        },
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1.25rem',
          '2xl': '.5rem',
        }
      },
      fontFamily: {
        'sans': ['Poppins', ...defaultTheme.fontFamily.sans],
        'serif': ['Recoleta', ...defaultTheme.fontFamily.serif],
      },
      screens: {
        'sm-down': {
          max: '640px'
        },
        'md-down': {
          max: '767px'
        }
      }
    },
  },
  plugins: [],
}

