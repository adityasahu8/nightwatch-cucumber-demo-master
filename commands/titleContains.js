exports.command = function verifyTitle(pageTitle) {
  return this.expect.element('head title').text.to.contain(pageTitle).before(1000);
};