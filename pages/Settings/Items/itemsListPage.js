let itemsListCommands = {
    verifyPageTitle: function(){
        return this.waitForTitleContains("@addItem", "Confirm item taxability");
    },
    navigateToAddItemPage: function() {
        return this.clickOnElement("@addItem").waitForElementNotPresent("@addItem");
    },
    doneWithTheseSettings: function() {
        return this.clickOnElement("@doneWithTheseSettings");
    }
}

let itemsListPage = {
    elements: {
        itemsListPage: ".items-confirm-page",
        addItem: 'div[title="Add a special taxability item"]',
        searchBox: ".ember-text-field",
        exportButton: ".at-download-batch",
        noResultBanner: ".no-results-banner",
        importItems: ".at-upload-batch",
        searchButton: ".at-search-box-submit",
        helpLink: ".at-help-link",
        doneWithTheseSettings: ".at-done-with-items",
        viewImportHistoryLink: ".at-view-import-history",
        assignTaxCode: ".at-assign-same-type-to-many",
        paginationList: ".pagination-list"
    },
    commands: [itemsListCommands]
};
module.exports = itemsListPage;