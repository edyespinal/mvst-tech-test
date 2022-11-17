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
      },
      borderRadius: {
        input: '0.625rem',
      },
      textColor: {
        black: 'black',
        primary: 'black',
        secondary: 'black',
        grey: '#44403C',
      },
    },
  },
  plugins: [],
}
