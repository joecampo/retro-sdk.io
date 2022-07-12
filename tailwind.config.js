/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./.vitepress/theme/**/*.vue', './components/**/*.vue', './**/*.md'],
  theme: {
    fontFamily: {
      sans: ['Proxima Nova'],
    },
    extend: {
      colors: {
        cream: '#fbfdf6',
      },
      backgroundImage: {
        'hero-pattern':
          "linear-gradient(to right bottom, rgba(71, 85, 105, .9),rgba(15, 23, 42, .9)), url('/img/signal 2.svg')",
      },
      keyframes: {
        'bounce-r': {
          '0%, 100%': {
            transform: 'translateX(25%)',
            'animation-timing-function': 'cubic-bezier(0.8, 0, 1, 1)',
          },
          '50%': {
            transform: 'translateX(0)',
            'animation-timing-function': 'cubic-bezier(0, 0, 0.2, 1)',
          },
        },
      },
      animation: {
        'bounce-r': 'bounce-r 1s infinite',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
