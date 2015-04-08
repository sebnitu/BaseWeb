var u = require('./modules/node-utility');
var watch = require('node-watch');

// Get our configuration settings
var config = require('../jake-config');

// Create our watch task
if ('watch' in config) {
  
  desc('Watch for change to files and rebuild if they change');
  task('watch', {async: true}, function() {
    
    // Output our watch notice
    u.printNotice('Files are now being watched (ctrl+c to exit)', 'yellow');
    
    config.watch.forEach(function(item, i, a) {
      
      watch(item.files, function(filename) {
        
        // CHeck for ignored files
        if ('ignore' in item) {
          if (item.ignore.indexOf(filename) >= 0) { return; }
        }
        
        // Something has changed message
        u.print(filename + ' was changed:', 'cyan');
        
        // Run task or group of tasks
        if (typeof item.task === 'string') {
          jake.Task['build:' + item.task].execute();
        } else {
          item.task.forEach(function(task) {
            jake.Task['build:' + task].execute();
          });
        }
        
      });
      
    });
    
  });
  
}
  