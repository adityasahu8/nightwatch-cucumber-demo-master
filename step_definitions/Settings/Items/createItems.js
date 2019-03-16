const {client} = require('nightwatch-cucumber');
const {Before, After, Given, Then, When} = require('cucumber');

let loginPage, companyLandingPage, settingsPage, itemsListPage, itemsAddPage;

let item;

Before(() => new Promise(resolve => {
  loginPage = client.page.AvalaraIdentity.loginPage();
    companyLandingPage = client.page.General.companyLandingPage();
    settingsPage = client.page.Settings.settingsPage();
    itemsListPage = client.page.Settings.Items.itemsListPage();
    itemsAddPage = client.page.Settings.Items.itemsAddPage();
    item = {
        itemCode: `AutoItem1`,
        description: "item description",
        taxCode: "P0000000"
    };
  setTimeout(() => {
    resolve();
  }, 1000);
}));

After(() => new Promise(resolve => {
  setTimeout(() => {
    console.log('After Execution');
    resolve();
  }, 1000);
}));

Given(/^User Login into Customer Portal page$/, () => {
  client.url('http://sandbox.admin.avalara.com/');
});

Then(/^Go to Settings page$/, () => {
  loginPage
    .verifyPageTitle()
    .enterUserNameTextBox()
    .enterPasswordTextBox()
    .clickOnLoginButton();
  companyLandingPage
    .waitForPageGetsLoaded()
    .verifyPageTitle()
    .clickOnSettingsTab();
});

Then(/^Navigate to Items - Add new item page$/, () => {
    return settingsPage.verifyPageTitle().navigateToItemsListPage();
});

// Then(/^verify user able to create new item$/, (text) => {
// return companyLandingPage.waitForVisible().verifyPageTitle(text);
// });