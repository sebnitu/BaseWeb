var fs = require('fs');
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
  
  // SASS Commands
  // sass src/scss/_baseweb.scss src/css/baseweb.css --style expanded
  // sass src/scss/_baseweb.scss src/css/baseweb.min.css --style compressed
  // sass --watch src/scss:src/css/baseweb.css
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
  
});
