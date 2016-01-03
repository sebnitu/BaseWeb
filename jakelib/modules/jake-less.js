var fs = require('fs');
var u = require('./node-utility');
var less = require('less');

module.exports = function runless(o) {
  
  fs.readFile(o.input, 'utf8', function(err, data) {
    if (err) throw new Error(u.colorize(err, 'red'));
    
    less.render(data, o.options)
      .then(function(output) {
      
        fs.writeFile(o.output, output.css, 'utf8', function(err) {
          if (err) throw new Error(u.colorize(err, 'red'));
          u.print('√ less: wrote ' + o.output, 'green');
        });
        
      },
      function(error) {
        u.print(error, 'red');
      });
    
  });

}
