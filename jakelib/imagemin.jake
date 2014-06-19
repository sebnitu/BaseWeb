var fs = require('fs');
var imagemin = require('imagemin');
var extend = require('./modules/extend');
var u = require('./modules/utility');

/**
 * Jake task for compiling LESS files
 */
desc('Optimizes Images');
task('imagemin', {async: true}, function(options) {
  
  // Default Options
  var defaultOptions = { 
    input: false,
    output: false
  };
  
  // Extend passed options with the defaults
  var o = extend(defaultOptions, options);
  
  imagemin(o.input, o.output, function() {
    u.print('√ Images optimized', 'green');
  });
    
});