module.exports = {
  'View Pokerstars\'s homepage': function (browser) {
    browser
        .url('https://bs-eu.qc-sports-mt1.starsweb.io/')
        .waitForElementVisible('body', 1000)
        .end();
  }
};
