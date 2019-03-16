"use strict";

exports.assertion = function(expectedUrl, msg) {
  /**
   * Optional message which will be used in the test output and
   * inside the XML reports
   * @type {string}
   */
  this.message = msg || `Testing contains url ${expectedUrl}.`;

  /**
   * A value to perform the assertion on. If a function is
   * defined, its result will be used.
   * @type @type {string}
   */
  this.expected = expectedUrl;

  /**
   * The method which performs the actual assertion. It is
   * called with the result of the value method as the argument.
   * @type {function}
   */
  this.pass = function(value) {
    return value.indexOf(expectedUrl) > -1;
  };

  /**
   * The method which returns the value to be used on the
   * assertion. It is called with the result of the command's
   * callback as argument.
   * @type {function}
   */
  this.value = function(result) {
    return result.value;
  };

  /**
   * Performs a protocol command/action and its result is
   * passed to the value method via the callback argument.
   * @type {function}
   */
  this.command = function(callback) {
    return this.api.url(callback);
  };
};
