var fs = require('fs');
var uglify = require('uglify-js');
var extend = require('./extend');
var u = require('./utility');

/**
 * Jake task for compiling LESS files
 */
function runuglifyjs(o) {
  
  // Minify and compile JS files
  if (typeof o.input === 'string') {
    var js = uglify.minify( o.path + o.input );
  } else {
    
    var files = [];
    
    // Lets loop through JS files asyncronously
    o.input.forEach(function(name, index) {
                  
      // Check that it's a JavaScript file, else return
      if (!name.match(/\.js$/)) {
        return;
      }
      
      // Append the path to our JS files
      files.push( o.path + o.input[index] );
            
    });
    
    // Minify our JS files
    var js = uglify.minify( files );
    
  }
  
  fs.writeFile(o.output, js.code, 'utf8', function(err) {
    if (err) throw new Error(u.colorize(err, 'red'));
    u.print('√ lessc: wrote ' + o.output, 'green');
  });
  
};

module.exports = runuglifyjs;
