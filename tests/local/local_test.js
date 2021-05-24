module.exports = {
    'BrowserStack Local Testing' : function (browser) {
      browser
        .url('https://bs-eu.qc-sports-mt1.starsweb.io/')
        .waitForElementVisible('body', 1000)
        .assert.containsText('body', 'Football')
        .end();
    }
  };