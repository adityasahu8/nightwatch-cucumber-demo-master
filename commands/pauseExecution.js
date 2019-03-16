var util = require('util');
var events = require('events');

function pauseExecution() {
  events.EventEmitter.call(this);
}

util.inherits(pauseExecution, events.EventEmitter);

pauseExecution.prototype.command = function(ms, cb) {
  var self = this;
  // If we don't pass the milliseconds, the client will
  // be suspended indefinitely
  if (!ms) {
    return this;
  }

  setTimeout(function() {
    // if we have a callback, call it right before the complete event
    if (cb) {
      cb.call(self.client.api);
    }

    self.emit('complete');
  }, ms);

  return this;
};

module.exports = pauseExecution;