module.exports = {
  sets: {
    SimpleTests: {
      files: 'tests/simpleTests'
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
  },
    ie: {
      desiredCapabilities: {
        browserName: 'ie'
      }
    },
    edge: {
      desiredCapabilities: {
        browserName: 'edge'
      }
    },
    firefox: {
      desiredCapabilities: {
        browserName: 'firefox'
      }
    }
}
};