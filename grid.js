// ####################################
// ##### GRID (TAILWIND PLUGIN)
// ####################################

module.exports = function({ addUtilities, config }) {

  const directions = [ 'r', 'c' ]  // row, column
  const sizes = [ 'px', '2px', 0, 1, 2, 3, 4, 5, 6 ].map(x => x.toString())
  const margins = config('theme.margin')

  const gapProps = {
    r: 'grid-row-gap',
    c: 'grid-column-gap'
  }

  const utilities = {
    '.grid': { 
      'display': 'grid'
    }
  }

  directions.forEach(dir => {
    sizes.forEach(sz => {
      const key = `.grid-${dir}g-${sz}`
      utilities[key] = {
        [gapProps[dir]]: margins[sz]
      }
    })
  })

  const counts = Array.from(Array(10).keys()).map(x => x + 1)

  const templateProps = {
    r: 'grid-template-rows',
    c: 'grid-template-columns',
  }

  directions.forEach(dir => {
    counts.forEach(count => {
      const key = `.grid-${dir}-${count}`
      utilities[key] = {
        [templateProps[dir]]: `repeat(${count}, 1fr)`
      }
    })
  })

  addUtilities(utilities)
}
