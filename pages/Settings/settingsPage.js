let settingsCommands = {
    verifyPageTitle: function(text){
        return this.waitForTitleContains("@editCompany", "Settings");
    },
    navigateToItemsListPage: function(){
        return this.clickOnElement("@itemsLink");
    }
}

let settingsPage = {
    elements: {
        editCompany: "a.at-settings-edit-company",
        nexus: "a.at-settings-nexus p",
        itemsLink: "a.at-settings-setup-items",
        locations: "a.at-settings-locations",
        customers: "a.at-settings-exempt-customers",
        euSalesThresholds: ".at-settings-sales-thresholds",
        advancedCompanySettings: "a.at-settings-advanced",
        companies: "a.at-settings-manage-companies",
        advancedAccountSettings: "a.at-settings-advanced-account",
        licenseKey: "a.at-settings-access-keys",
        users: "a.at-settings-users",
        successAlert: ".alert-box.success"
    },
    commands: [settingsCommands]
};
module.exports = settingsPage;