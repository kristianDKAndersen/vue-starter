module.exports = {
    source: {
      include: ['src'],
      includePattern: '\\.(vue|js)$',
    },
    opts: {
      destination: 'docs',
    },
    plugins: ['node_modules/jsdoc-vuejs'],
  }