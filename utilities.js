// ####################################
// ##### UTILITIES (TAILWIND PLUGIN)
// ####################################

module.exports = function({ addUtilities }) {

  addUtilities({
    '.h-toolbar': {
      'height': '4rem'
    },

    '.h-toolbar-sm': {
      'height': '2rem'
    },

    '.text-shadow': {
      'text-shadow': '1px 0'
    },
  })

}
