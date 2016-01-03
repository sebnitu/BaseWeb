var fs = require('fs');
var u = require('./node-utility');
var uglify = require('uglify-js');

module.exports = function runuglifyjs(o) {
  
  if (o.path === undefined) {
    o.path = '';
  }
  
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
    u.print('√ uglify-js: wrote ' + o.output, 'green');
  });
  
}
