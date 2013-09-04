var fs = require('fs');
var uglify = require('uglify-js');
var extend = require('./modules/extend');
var u = require('./modules/utility');

/**
 * Jake task for compiling LESS files
 */
desc('Compiles and minifies JavaScript files');
task('uglifyjs', {async: true}, function(options) {
  
  var js = uglify.minify( options.input );
  fs.writeFile(options.output, js.code, 'utf8', function(err) {
    if (err) throw new Error(u.colorize(err, 'red'));
    u.print('√ lessc: wrote ' + options.output, 'green');
  });
    
});
