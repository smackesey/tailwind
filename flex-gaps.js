// ####################################
// ##### FLEX GAPS (TAILWIND PLUGIN)
// ####################################

const sizes = [ 'px', '2px', 0, 1, 2, 3, 4, 5, 6 ].map(x => x.toString())

module.exports = function({ addUtilities, config }) {
  const utilities = {}
  const margins = config('theme.margin')
  sizes.forEach(x => {

    // COL (good for flex-row)
    utilities[`.flex-cg-${x}`] = {
      'margin-left': `-${margins[x]}`,
      'margin-right': `-${margins[x]}`,
    },
    utilities[`.flex-cg-${x} > *`] = {
      'margin-left': margins[x],
      'margin-right': margins[x]
    },

    // ROW (good for flex-col)
    utilities[`.flex-rg-${x}`] = {
      'margin-top': `-${margins[x]}`,
      'margin-bottom': `-${margins[x]}`,
    },
    utilities[`.flex-rg-${x} > *`] = {
      'margin-top': margins[x],
      'margin-bottom': margins[x]
    }

  })

  addUtilities(utilities)
}
