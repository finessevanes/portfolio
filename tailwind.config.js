module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      lato: ['Lato, sans-serif']
    },
    extend: {
      transitionProperty: {
        'left': 'left',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        showDiv: {
          '99%': { visibility: 'hidden' },
          '100%': { visibility: 'visible' },
        }
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
        showDiv: '3s fadeIn',
      }


    }
  },
  plugins: [],
}
