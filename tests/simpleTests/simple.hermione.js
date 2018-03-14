var assert = require('chai').assert;

describe('First test', function() {
  it('passed', function() {
    return this.browser
      .url('https://app.biocarcare.com/')
      .getText('#react-root h3')
      .then(function(title) {
        assert.equal(title, 'Choice a garage')
      });
  });
});