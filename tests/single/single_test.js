module.exports = {
  'View Pokerstars\'s homepage': function (browser) {
    browser
        .url('https://www.pokerstarssports.uk/')
        .waitForElementVisible('body', 1000)
        .end();
  }
};
