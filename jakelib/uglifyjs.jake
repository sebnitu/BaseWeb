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
    output: false
  };
  
  // Extend passed options with the defaults
  var o = extend(defaultOptions, options);
  
  var jsraw;
  var js;
  
  // Minify and compile JS files
  if (typeof o.input === 'string') {
    js = uglify.minify( o.input );
  } else {
    
    // Lets loop through JS files asyncronously
    o.input.forEach(function(name) {
      
      // Check that it's a mustache file, else return
      if (!name.match(/\.js$/)) {
        return;
      }
      
      // Read the page
      jsraw += fs.readFileSync(name, 'utf8');
      
    });
    
    js = uglify.minify( o.input );
    
  }
    
  fs.writeFile(o.output, js.code, 'utf8', function(err) {
    if (err) throw new Error(u.colorize(err, 'red'));
    u.print('√ lessc: wrote ' + o.output, 'green');
  });
    
});
