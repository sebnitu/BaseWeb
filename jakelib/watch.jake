var u = require('./modules/node-utility');
var watch = require('node-watch');

// Get our configuration settings
var config = require('../jake-config');

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
            if (typeof item.key === 'string') {
              jake.Task['build:' + item.key].execute();
            } else {
              item.key.forEach(function(task) {
                jake.Task['build:' + task].execute();
              });
            }
          }
        } else {
          u.print(filename + ' was changed:', 'cyan');
          if (typeof item.key === 'string') {
            jake.Task['build:' + item.key].execute();
          } else {
            item.key.forEach(function(task) {
              jake.Task['build:' + task].execute();
            });
          }
        }
      });
      
    });
    
  });
  
}
