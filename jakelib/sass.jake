var fs = require('fs');
var sass = require('node-sass');
var extend = require('./modules/extend');
var u = require('./modules/utility');

/**
 * Jake task for compiling LESS files
 */
desc('Parse a SASS file and write CSS to an output');
task('sass', {async: true}, function(options) {
  
  // Default Options
  var defaultOptions = { style: 'expanded' };
  
  // Extend passed options with the defaults
  var o = extend(defaultOptions, options);
    
  fs.readFile(o.input, 'utf8', function(err, data) {
    if (err) throw new Error(u.colorize(err, 'red'));
    
    // Render and write expanded file
    sass.render({
      data: data,
      success: function(css){
        writeCSS(css, o.output[0]);
      },
      error: function(error) {
        u.print(error, 'red');
      },
      includePaths: [ o.paths ],
      outputStyle: 'expanded'
    });
    
    // Render and write compressed file
    sass.render({
      data: data,
      success: function(css){
        writeCSS(css, o.output[1]);
      },
      error: function(error) {
        u.print(error, 'red');
      },
      includePaths: [ o.paths ],
      outputStyle: 'compressed'
    });
    
  });

  // Raw SASS Commands
  // sass src/scss/_baseweb.scss src/css/baseweb.css --style expanded
  // sass src/scss/_baseweb.scss src/css/baseweb.min.css --style compressed
  // sass --watch src/scss:src/css/baseweb.css
  
  /*
  var cmds = [
    'sass src/scss/_baseweb.scss src/css/baseweb.css --style expanded',
    'sass src/scss/_baseweb.scss src/css/baseweb.min.css --style compressed'
  ];
  
  // Execute Commands
  jake.exec(cmds, {printStdout: true}, function () {
    u.print('√ sass: wrote baseweb.css', 'green');
    u.print('√ sass: wrote baseweb.min.css', 'green');
    complete();
  });
  */
  
});

var writeCSS = function(css, output) {
  fs.writeFile(output, css, 'utf8', function(err) {
    if (err) throw new Error(u.colorize(err, 'red'));
    u.print('√ lessc: wrote ' + output, 'green');
  });
}
