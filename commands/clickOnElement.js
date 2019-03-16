exports.command = function(locator) {
    var client = this;
  
    client.waitForElementVisible(locator, 1000, function clickOnElement() {
      return client.click(locator);
    });
    return client;
  };