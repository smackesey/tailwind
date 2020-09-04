// ####################################
// ##### SCROLLBARS (TAILWIND PLUGIN)
// ####################################

module.exports = function({ addUtilities }) {

  const utilities = {}

  const directions = [ 'x', 'y' ]
  const sizes = [ null, 'sm', 'lg' ]

  const dirProps = {
    x: 'height',
    y: 'width'
  }

  directions.forEach(dir => {
    sizes.forEach(sz => {
      const tail = sz == null ? dir : `${dir}-${sz}`
      const klass = `.scrollbar-${tail}`

      Object.assign(utilities, {
        [klass]: {
          [`overflow-${dir}`]: 'auto',
        },
        [`${klass}::-webkit-scrollbar`]: {
          'background-color': 'inherit'
        },
        [`${klass}::-webkit-scrollbar-thumb`]: {
          'border-radius': '8px',
          'background-color': '#b1b1b1'
        }
      })

      if (sz == 'sm') {
        Object.assign(utilities, {
          [`${klass}::-webkit-scrollbar`]: {
            [dirProps[dir]]: '4px'
          },
        })
      } else if (sz == 'lg') {
        Object.assign(utilities, {
          [`${klass}::-webkit-scrollbar`]: {
            [dirProps[dir]]: '16px'
          },
        })
      }

    })
  })

  addUtilities(utilities)
}
