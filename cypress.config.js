const { defineConfig } = require('cypress')

module.exports = defineConfig({

  // These settings apply everywhere unless overridden
  defaultCommandTimeout: 5000,
  viewportWidth: 1500,
  viewportHeight: 900,
  // Viewport settings overridden for component tests
  component: {
    viewportWidth: 500,
    viewportHeight: 500,
  },

  e2e: {
   // baseUrl: 'http://localhost:1234',
   baseUrl: 'https://venia.magento.com/',
  },
})

