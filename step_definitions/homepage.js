const {Given} = require('@cucumber/cucumber');
const {client} = require('nightwatch-api');

Given(/^I visit the homepage$/, () => client
    .url('https://www.pokerstarssports.uk/')
    .waitForElementVisible('body', 1000)
    .end()
);