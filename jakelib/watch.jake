var watch = require('node-watch');
var getjson = require('./modules/getjson');
var u = require('./modules/utility');

desc('Watch for change to files and rebuild if they change');
task('watch', {async: true}, function() {

  getjson('package.json', function(config) {
  
    // Output the watch message to the console
    u.print_notice('Files are now being watched (ctrl+c to exit)', 'yellow');
    
    // Watch our LESS files
    watch(config.watch.less, function(filename) {
      u.print(filename + ' was changed:', 'cyan');
      jake.Task['build:baseweb'].execute();
    });

    // Watch our JS files
    watch(config.watch.js, function(filename) {
      u.print(filename + ' was changed:', 'cyan');
      jake.Task['build:js'].execute();
    });
    
    // Watch our doc files
    watch(config.watch.docs, function(filename) {
      u.print(filename + ' was changed:', 'cyan');
      jake.Task['build:docs'].execute();
    });
    
    // Watch our test files
    watch(config.watch.tests, function(filename) {
      u.print(filename + ' was changed:', 'cyan');
      jake.Task['build:tests'].execute();
    });
  });
  
});
