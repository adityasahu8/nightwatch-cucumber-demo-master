exports.command = function(locator, value) {
    var client = this;
  
    client.waitForElementVisible(locator,200, function enterValueInElement() {
      return client.setValue(locator, value);
    });
    return client;
};