/**
 * Asynchronous forEach
 */
var asyncForEach = function(array, fn, callback) {
  array = array.slice(0);
  function processOne() {
    var item = array.pop();
    fn(item, function(result) {
      if(array.length > 0) {
        processOne();
      } else {
        callback();
      }
    });
  }
  if(array.length > 0) {
    processOne();
  } else {
    callback();
  }
};

module.exports = asyncForEach;