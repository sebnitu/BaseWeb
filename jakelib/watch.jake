var watch = require('node-watch');
var getjson = require('./modules/getjson');
var u = require('./modules/utility');

desc('Watch for change to files and rebuild if they change');
task('watch', {async: true}, function() {

  getjson('package.json', function(config) {
  
    // Output the watch message to the console
    u.print_notice('Files are now being watched (ctrl+c to exit)', 'yellow');
    
    // Watch our LESS files
    watch(config.watch.less, function(filepath) {
      u.print(filepath + ' was changed:', 'cyan');
      jake.Task['build:less'].execute();
    });
    
    // Watch our SCSS files
    watch(config.watch.scss, function(filepath) {
      u.print(filepath + ' was changed:', 'cyan');
      jake.Task['build:scss'].execute();
    });

    // Watch our JS files
    watch(config.watch.js, function(filepath) {
      var filename = filepath.replace(config.watch.js[0].substr(2), '');
      var index = config.js.output.indexOf(filename);
      if (index >= 0) {
        u.print(filepath + ' was changed:', 'cyan');
        jake.Task['build:js'].execute();
      }
    });
    
    // Watch our templates
    watch(config.watch.mustache, function(filepath) {
      u.print(filepath + ' was changed:', 'cyan');
      jake.Task['build:docs'].execute();
      jake.Task['build:examples'].execute();
      jake.Task['build:devlog'].execute();
    });
    
    // Watch our doc files
    watch(config.watch.docs, function(filepath) {
      u.print(filepath + ' was changed:', 'cyan');
      jake.Task['build:docs'].execute();
    });
    
    // Watch our example files
    watch(config.watch.examples, function(filepath) {
      u.print(filepath + ' was changed:', 'cyan');
      jake.Task['build:examples'].execute();
    });
    
    // Watch our devlog files
    watch(config.watch.devlog, function(filepath) {
      u.print(filepath + ' was changed:', 'cyan');
      jake.Task['build:devlog'].execute();
    });
  });
  
});
