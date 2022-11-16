/** @typedef { import('tailwindcss/defaultConfig') } DefaultConfig */
/** @typedef { import('tailwindcss/defaultTheme') } DefaultTheme */
/** @typedef { DefaultConfig & { theme: { extend: DefaultTheme } } } TailwindConfig */

/** @type {TailwindConfig} */
module.exports = {
  purge: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false,
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
  variants: {
    extend: {},
  },
  plugins: [],
}
