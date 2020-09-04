const colors = require('./parameters/colors');
const sizes = require('./parameters/sizes');

const textSizes = {};
Object.entries(sizes.values.text).forEach(([k, v]) => {
  textSizes[k] = `${v}px`;
});

const width = {};
Array.from(Array(21).keys()).forEach(x => {
  width[`${x * 5}pct`] = `${x * 5}%`;
});

module.exports = {
  separator: '-',
  prefix: 'f-',
  plugins: [
    require('./utilities.js'),
    require('./viewport-sizes.js'),
    require('./flex-gaps.js'),
    require('./grid.js'),
    require('./outlines.js'),
    require('./scrollbars.js'),
    require('./text-orientation.js'),
    require('./absolute-positions.js'),
    require('./character-widths.js'),
  ],
  theme: {
    fontSize: textSizes,
    colors,
    extend: {
      margin: {
        '2px': '2px',
      },
      width,
    },
  },
};
