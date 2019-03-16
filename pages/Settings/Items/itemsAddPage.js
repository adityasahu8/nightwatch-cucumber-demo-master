let itemsAddCommands = {
    fillForm: function(item) {
        return this.enterValueInElement("@itemCodeTextbox", item.code)
            .enterValueInElement("@descriptionTextarea",item.description);
    },
    selectTaxCode: function(item) {
        return this.enterValueInElement("@taxCode", item.taxCode)
            .clickOnElement(`ul.af-typeahead-results li[data-option=${item.taxCode}]`);
    },
    clickOnSubmitButton: function() {
        return this.clickOnElement("@submitButton").waitForElementNotPresent("@submitButton");
    },
    clickOnCancelLink: function(browser) {
        return this.ava_Click("@cancelLink").waitForElementNotPresent("@cancelLink");
      }
}

let itemsAddPage = {
    elements: {
        itemCodeTextbox: ".at-item-code input",
        descriptionTextarea: ".at-item-desc input",
        taxCode: ".af-typeahead-input-container input",
        submitButton: ".at-submit-item",
        cancelLink: ".at-cancel"
    },
    commands: [itemsAddCommands]
};
module.exports = itemsAddPage;