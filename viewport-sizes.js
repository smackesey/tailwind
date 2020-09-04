// TAILWIND PLUGIN

module.exports = function({ addUtilities }) {
  const utilities = {}
  let counter = 5
  while (counter <= 100) {
    utilities[`.min-h-${counter}vh`] = { 'min-height': `${counter}vh` }
    utilities[`.max-h-${counter}vh`] = { 'max-height': `${counter}vh` }
    utilities[`.h-${counter}vh`] = { 'height': `${counter}vh` }
    utilities[`.min-h-${counter}vw`] = { 'min-height': `${counter}vw` }
    utilities[`.max-h-${counter}vw`] = { 'max-height': `${counter}vw` }
    utilities[`.h-${counter}vw`] = { 'height': `${counter}vw` }
    counter += 5
  }
  addUtilities(utilities)
}
