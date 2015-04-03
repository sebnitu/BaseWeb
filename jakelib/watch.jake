var u = require('./modules/node-utility');
var watch = require('node-watch');

desc('Watch for change to files and rebuild if they change');
task('watch', {async: true}, function() {

  u.printNotice('Files are now being watched (ctrl+c to exit)', 'yellow');
  
  // var settings = u.getjsonsync('settings.json');
  
  watch('src/scss/', function(filename) {
    u.print(filename + ' was changed:', 'cyan');
    jake.Task['build:scss'].execute();
  });
  
  watch('docs/scss/', function(filename) {
    u.print(filename + ' was changed:', 'cyan');
    jake.Task['build:scss'].execute();
  });
  
  watch('docs/js/', function(filename) {
    if(filename != 'docs/js/scripts.min.js') {
      u.print(filename + ' was changed:', 'cyan');
      jake.Task['build:js'].execute();
    }
  });
  
  watch(['docs/templates/layouts/', 'docs/templates/pages/', 'docs/templates/partials/'], function(filename) {
    u.print(filename + ' was changed:', 'cyan');
    jake.Task['build:docs'].execute();
  });
  
  watch(['examples/templates/layouts/', 'examples/templates/pages/', 'examples/templates/partials/'], function(filename) {
    u.print(filename + ' was changed:', 'cyan');
    jake.Task['build:examples'].execute();
  });
  
});
