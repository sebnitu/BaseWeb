var u = require('./modules/utility');
var getjsonsync = require('./modules/getjsonsync');
var watch = require('node-watch');

/**
 * The Watch Task
 */
desc('Watch for change to files and rebuild if they change');
task('watch', {async: true}, function() {

  u.print_notice('Files are now being watched (ctrl+c to exit)', 'yellow');
  
  var settings = getjsonsync('settings.json');
  
  watch('src/scss/', function(filename) {
    u.print(filename + ' was changed:', 'cyan');
    jake.Task['build:scss'].execute();
  });
  
  watch('docs/scss/', function(filename) {
    u.print(filename + ' was changed:', 'cyan');
    jake.Task['build:scss'].execute();
  });
  
  watch(['docs/templates/layouts/', 'docs/templates/pages/', 'docs/templates/partials/'], function(filename) {
    u.print(filename + ' was changed:', 'cyan');
    jake.Task['build:docs'].execute();
  });
  
});
