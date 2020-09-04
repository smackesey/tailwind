// ####################################
// ##### CHARACTER WIDTHS (TAILWIND PLUGIN)
// ####################################

const MAX_SIZE = 12

module.exports = function({ addUtilities }) {
  const utilities = {}
  for (let i = 1; i <= MAX_SIZE; i++) {
    utilities[`.w-${i}ch`] = `${i}ch`
  }
  addUtilities(utilities)
}
