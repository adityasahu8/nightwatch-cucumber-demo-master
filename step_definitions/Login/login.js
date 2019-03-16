const {client} = require('nightwatch-cucumber');
const {Before, After, Given, Then, When} = require('cucumber');

let loginPage, companyLandingPage;

Before(() => new Promise(resolve => {
  setTimeout(() => {
    loginPage = client.page.AvalaraIdentity.loginPage();
    companyLandingPage = client.page.General.companyLandingPage();
    resolve();
  }, 1000);
}));

After(() => new Promise(resolve => {
  setTimeout(() => {
    console.log('After Execution');
    resolve();
  }, 1000);
}));

Given(/^User opens the Customer Portal page$/, () => {
  client.url('http://sandbox.admin.avalara.com/');
});

Then(/^verify title is "([^"]*)"$/, (text) => {
  return loginPage.verifyPageTitle(text);
});

Then(/^verify the Avalara identity page ui$/, () => {
  return client.verify.visible("#Username")
    .verify.visible("#Password")
    .verify.visible("#loading");
});

Then(/^verify user able to login into Customer Portal$/, () => {
  return loginPage
    .enterUserNameTextBox()
    .enterPasswordTextBox()
    .clickOnLoginButton();
});

Then(/^verify user lands on Company landing page and title contains "([^"]*)"$/, (text) => {
  return companyLandingPage.waitForPageGetsLoaded().verifyPageTitle(text);
});