/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        red: '#E50914',
        black: '#221F1F',
        white: '#F5F5F1',
        lightBlack: '#000000bf'
      },
    },
  },
  plugins: [
    plugin(({ addUtilities, theme, variants }) => {
      addUtilities({
        '.no-scrollbar::-webkit-scrollbar': {
          'display': 'none',
        },
        '.no-scrollbar': {
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
        },
        '@keyframes shimmer': {
          '0%': {
            'background-position': '-1000%',
          },
          '100%': {
            'background-position': '1000%',
          },
        },
        '.shimmer-animation': {
          animation: 'shimmer 4s infinite linear',
          border: '1px solid black',
          background: `linear-gradient(90deg, ${theme('colors.black')} 25%, ${theme('colors.lightBlack')} 50%, ${theme('colors.black')} 75%)`,
          'background-size': '200% 100%',
          'box-shadow': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        },
      }, variants('animation'));
    }),
  ],
};
