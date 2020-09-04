const codes = [
  'xxxx-small',
  'xxx-small',
  'xx-small',
  'x-small',
  'small',
  'medium',
  'large',
  'x-large',
  'xx-large',
  'xxx-large',
  'xxxx-large'
]

const values = {
  // diameter
  icon: {
    'xxx-small': 10,
    'xx-small': 12,
    'x-small': 14,
    'small': 16,
    'medium': 20,
    'large': 24
  },

  circle: {
    'xxx-small': 12,
    'xx-small': 16,
    'x-small': 24,
    'small': 32,
    'medium': 40,
    'large': 48
  },

  text: {
    'xxx-small': 6,
    'xx-small': 8,
    'x-small': 10,
    'small': 12,
    'medium': 14,
    'large': 16,
    'x-large': 18,
    'xx-large': 20,
    'xxx-large': 22
  },

  listTile: {
    small: 20,
    medium: 30,
    large: 40
  }
}

module.exports = {
  values,
  codes
}
