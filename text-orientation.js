module.exports = function({ addUtilities }) {

  addUtilities({
    '.text-vertical-up': {
      'transform': 'rotate(180deg)',
      'writing-mode': 'vertical-lr',
    },

    '.text-vertical-down': {
      'transform': 'rotate(-180deg)',
      'writing-mode': 'vertical-lr',
    },
  })

}
