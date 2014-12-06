var fs = require('fs');
var less = require('less');
var extend = require('./extend');
var u = require('./utility');

/**
 * LESS function for compiling and outputing LESS into a CSS files
 */
function runless(o) {
  
  // Read the input file  
  fs.readFile(o.input, 'utf8', function(err, data) {
    if (err) throw new Error(u.colorize(err, 'red'));
    
    // Compile LESS without compression
    less.render(data, o.options)
      .then(function(output) {
      
        // Write file
        fs.writeFile(o.output, output.css, 'utf8', function(err) {
          if (err) throw new Error(u.colorize(err, 'red'));
          u.print('√ lessc: wrote ' + o.output, 'green');
        });
        
      },
      function(error) {
        u.print(error, 'red');
      });
    
  });

}

module.exports = runless;
