module.exports = {
  'Browser Test': function (browser) {
    browser
      .url('http://localhost:4000/')
      .waitForElementVisible('body')
      .assert.visible('#page')
      .assert.containsText('#page', '1 / 10')
      .assert.visible('#listContainer')
      .end();
  },

  'Navigate to page two': function (browser) {
    browser
      .url('http://localhost:4000/')
      .waitForElementVisible('button')
      .assert.visible('#next')
      .click('#next')
      .assert.containsText('#page', '2 / 10')
      .assert.containsText('#list', 'Entry 20')
      .end();
  },

  'Navigate forward then backward': function (browser) {
      browser
        .url('http://localhost:4000/')
        .waitForElementVisible('button')
        .assert.visible('#next')
        .click('#next')
        .click('#prev')
        .assert.containsText('#page', '1 / 10')
        .assert.containsText('#list', 'Entry 0')
        .assert.attributeEquals('#prev', 'disabled', 'true')
  },

  'Navigate to the end': function (browser) {
      browser
        .url('http://localhost:4000/')
        .waitForElementVisible('button')
        .assert.visible('#next')
        .click('#next')
        .click('#next')
        .click('#next')
        .click('#next')
        .waitForElementVisible('#page')
        .assert.containsText('#page', '5 / 10')
        .click('#next')
        .click('#next')
        .click('#next')
        .click('#next')
        .click('#next')
        .assert.containsText('#page', '10 / 10')
        .assert.attributeEquals('#next', 'disabled', 'true')
  },
};
