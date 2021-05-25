const {Given} = require('@cucumber/cucumber');
const {client} = require('nightwatch-api');

Given(/^I visit the homepage$/, () => client
    .url('https://bs-eu.qc-sports-mt1.starsweb.io/')
    .waitForElementVisible('body', 1000)
    .end()
);