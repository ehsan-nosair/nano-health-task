module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    './node_modules/tw-elements/dist/js/**/*.js'
  ],
  theme: {
    extend: {
      container: {
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
      colors: {
        primary: '#1D829A',
        secondary: '#2EB9CC',
        thirdy: '#D1F7FC',
        fourdy: '#B8D5E0',
        darky: '#16375B',
        gray: '#F2F7FA',
        hover1: '#51cfe1',
        hover2: '#03a8c9'
        
      }
    },

  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],

}