// TAILWIND PLUGIN

module.exports = function({ addUtilities, config }) {
  const utilities = {}

  const borders = config('theme.borderWidth')
  Object.entries(borders).forEach(([k,v]) => {
    const key = k == 'default' ? '.outline' : `.outline-${k}`
    utilities[key] = {
      'outline-style': 'solid',
      'outline-width': v
    }
  })

  const colors = config('theme.colors')
  Object.entries(colors).forEach(([hue,shades]) => {

    Object.entries(shades).forEach(([level,color]) => {
      utilities[`.outline-${hue}-${level}`] = {
        'outline-color': color
      }
    })

  })

  addUtilities(utilities)
}
