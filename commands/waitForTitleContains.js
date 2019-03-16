exports.command = function(locator, pageTitle) {
    var client = this;

    client.waitForElementVisible(locator, 1000, function waitForTitleContains() {
        client.expect.element("head title")
        .to.have.attribute("innerText")
        .which.contains(pageTitle)
        .before(1000)
    });
    return client;
  };