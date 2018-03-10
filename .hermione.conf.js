module.exports = {
  sets: {
    desktop: {
      files: 'tests/desktop'
    }
  },

  /*plugins: {
    'allure-reporter': {
      targetDir: 'allure-results'
    }
  },*/

  browsers: {
    chrome: {
      desiredCapabilities: {
        browserName: 'chrome'
      }
    }
  }
};