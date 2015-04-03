var fs = require('fs');
var u = require('./node-utility');
var sass = require('node-sass');

function runscss(o) {
  
  fs.readFile(o.input, 'utf8', function(err, data) {
    if (err) throw new Error(u.colorize(err, 'red'));
    
    sass.render({
      data: data,
      success: function(result){
        
        fs.writeFile(o.output, result.css, 'utf8', function(err) {
          if (err) throw new Error(u.colorize(err, 'red'));
          u.print('√ node-sass: wrote ' + o.output, 'green');
        });
        
      },
      error: function(error) {
        u.print(error.message, 'red');
        u.print(error.code, 'red');
        u.print('Line: ' + error.line + ', Column: ' + error.column, 'red');
      },
      includePaths: o.paths,
      outputStyle: o.style
    });
    
  });
  
}

module.exports = runscss;
