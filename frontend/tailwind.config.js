/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      sans: [
        'Montserrat',
        'ui-sans-serif',
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
      ],
    },
    extend: {
      colors: {
        primary: 'black',
        white: '#ffffff',
        secondary: '#8e9882',
        tertiary: '#c69f66',
        grey: '#e7e3d9',
        lightgrey: '#fbfaf8',
        red: '#cd4c15',
        green: '#758266',
      },
      borderRadius: {
        input: '0.625rem',
      },
      textColor: {
        black: 'black',
        primary: '#32332e',
        grey: '#615f5b',
        lightgrey: '#8a8370',
        offwhite: '#fbfaf8',
      },
      maxWidth: {
        100: '70rem',
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
  safelist: ['bg-red', 'bg-green'],
}
