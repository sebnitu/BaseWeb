var fs = require('fs');
var sass = require('node-sass');
var extend = require('./modules/extend');
var u = require('./modules/utility');

/**
  
Sass Commands:

sass config.paths.scss + '_baseweb.scss' config.paths.css + 'baseweb.css' --style expanded
sass config.paths.scss + '_baseweb.scss' config.paths.css + 'baseweb.min.css' --style compressed

sass src/scss/_baseweb.scss src/css/baseweb.css --style expanded
sass src/scss/_baseweb.scss src/css/baseweb.min.css --style compressed

**/

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
    
    /*
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
    */
    
    var cmds = [
      "sass src/scss/_baseweb.scss src/css/baseweb.css --style expanded"
    , "sass src/scss/_baseweb.scss src/css/baseweb.min.css --style compressed"
    ];
    
    jake.exec(cmds, {printStdout: true}, function () {
      u.print('Sass has compiled successfully', 'green');
      complete();
    });
    
  });
  
});

var writeCSS = function(css, output) {
  fs.writeFile(output, css, 'utf8', function(err) {
    if (err) throw new Error(u.colorize(err, 'red'));
    u.print('√ lessc: wrote ' + output, 'green');
  });
}
