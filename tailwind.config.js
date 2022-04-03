module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  plugins: [require('daisyui')],
  theme: {
    extend: {
      animation:{
        'wiggle': 'wiggle 3s ease-in-out infinite',
        'slideIn1':'slideIn1 2s ease ',
        'slideIn2':'slideIn1 2.5s ease ',
        'slideIn3':'slideIn1 3s ease ',
        'slideIn4':'slideIn1 3.5s ease ',
        'slideIn5':'slideIn1 4s ease ',
        'slideIn6':'slideIn1 4.5s ease',
        'slideIn7':'slideIn1 5s ease ',
        'slideIn8':'slideIn1 5.5s ease ',
      },

      keyframes:{
        wiggle: {
          '0%, 100%': { transform: 'rotate(-2deg)' },
          '50%': { transform: 'rotate(2deg)' },
        },
        bgColorChange1:{
          '0%': {
            'background-color': '#ffe5f2 ' ,
          },
          '100%': {
            'background-color': '#ffffe5' ,
          },
        },
        slideIn1:{
          '0%': {
            'opacity': '0',
            transform: 'translateY(300px)'
          },
          '100%':{
            'opacity': '1',
            transform: 'translateY(0)'
          }
        },

      }
    },
  },
}
