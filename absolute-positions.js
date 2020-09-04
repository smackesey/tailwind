module.exports = function({ addUtilities }) {

  addUtilities({
    '.absolute-centered': {
      top: '50%',
      left: '50%',
      transform: 'translateX(-50%) translateY(-50%)',
    },
  })

}
