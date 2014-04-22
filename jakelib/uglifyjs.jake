var fs = require('fs');
var uglify = require('uglify-js');
var extend = require('./modules/extend');
var u = require('./modules/utility');

/**
 * Jake task for compiling LESS files
 */
desc('Compiles and minifies JavaScript files');
task('uglifyjs', {async: true}, function(options) {
  
  // Default Options
  var defaultOptions = { 
    input: false,
    output: false,
    path: ''
  };
  
  // Extend passed options with the defaults
  var o = extend(defaultOptions, options);
  
  var js;
  
  // Minify and compile JS files
  if (typeof o.input === 'string') {
    js = uglify.minify( o.path + o.input );
  } else {
    
    // Lets loop through JS files asyncronously
    o.input.forEach(function(name, index) {
                  
      // Check that it's a JavaScript file, else return
      if (!name.match(/\.js$/)) {
        return;
      }
      
      // Append the path to our JS files
      o.input[index] = o.path + o.input[index];
      
    });
    
    // Minify our JS files
    js = uglify.minify( o.input );
    
  }
  
  o.output.forEach(function(name, index) {
    
    // Check that it's a JavaScript file, else return
    if (!name.match(/\.js$/)) {
      return;
    }
    
    // Append the path to our JS files
    o.output[index] = o.path + o.output[index];
    
    fs.writeFile(o.output[index], js.code, 'utf8', function(err) {
      if (err) throw new Error(u.colorize(err, 'red'));
      u.print('√ lessc: wrote ' + o.output, 'green');
    });
    
  });
  
});
