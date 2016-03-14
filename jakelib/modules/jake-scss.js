var fs = require('fs');
var u = require('./node-utility');
var sass = require('node-sass');

module.exports = function runscss(o) {
  
  fs.readFile(o.input, 'utf8', function(err, data) {
  
    sass.render({
      data: data,
      outFile: o.output,
      includePaths: o.paths,
      outputStyle: o.style,
    }, function(error, result) {
      if(!error){
        fs.writeFile(o.output, result.css, 'utf8', function(err) {
          if (err) throw new Error(u.colorize(err, 'red'));
          u.print('√ node-sass: wrote ' + o.output, 'green');
        });
      } else {
        u.print(error.message, 'red');
        u.print('Line: ' + error.line + ', Column: ' + error.column, 'red');
      }
    });
  
  });
  
}
