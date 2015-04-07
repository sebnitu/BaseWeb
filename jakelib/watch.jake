var u = require('./modules/node-utility');
var watch = require('node-watch');

// Get our configuration settings
var config = require('../jakefile');

// Create our watch task
if ('watch' in config) {
  
  desc('Watch for change to files and rebuild if they change');
  task('watch', {async: true}, function() {
    
    u.printNotice('Files are now being watched (ctrl+c to exit)', 'yellow');
    
    config.watch.forEach(function(item, i, a) {
      
      watch(item.files, function(filename) {
        if ('ignore' in item) {
          if (item.ignore.indexOf(filename) < 0) {
            u.print(filename + ' was changed:', 'cyan');
            jake.Task['build:' + item.key].execute();
          }
        } else {
          u.print(filename + ' was changed:', 'cyan');
          jake.Task['build:' + item.key].execute();
        }
      });
      
    });
    
  });
  
}
