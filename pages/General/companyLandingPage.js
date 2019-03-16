let companyLandingCommands = {
    verifyPageTitle: function(text){
        return this.waitForTitleContains("@switchCompanyLink", text || "AvaTax");
    },
    clickOnSettingsTab: function(){
        return this.clickOnElement("@settingsTab");
    },
    waitForPageGetsLoaded: function(){
        return this.waitForElementVisible("@switchCompanyLink", 20000)
            .waitForElementVisible("@settingsTab");
    }
}

let companyLandingPage = {
    elements: {
      companyName: "span.page-title > span.company-name",
      switchCompanyLink: "span.page-title > a.switch-company",
      settingsTab: 'a.at-navbar-settings'
    },
    commands: [companyLandingCommands]
};
module.exports = companyLandingPage;