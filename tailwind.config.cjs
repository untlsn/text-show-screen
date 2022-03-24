module.exports = {
  extract: {
    include: ['**/*.{vue,css}'],
    exclude: ['node_modules', '.git'],
  },
  theme: {
    extend: {
      colors: {
        coffie: {
          black: '#1A1615',
          gray: '#1E1B1A',
          brown: '#523019',
          cream: '#E3C69C',
        },
      },
    },
  },
};