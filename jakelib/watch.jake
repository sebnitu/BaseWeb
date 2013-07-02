var watch = require('node-watch');
var notice = require('./utilities/notice');
var colorize = require('./utilities/colorize');
var getjson = require('./utilities/getjson');

desc('Watch for change to files and rebuild if they change');
task('watch', {async: true}, function() {
  getjson('config.json', function(config) {
    var msg = notice('Files are now being watched (ctrl+c to exit)');
    console.log(colorize(msg, 'yellow'));
    watch(config.watch.less, function(filename) {
      console.log(colorize(filename + ' was changed:', 'cyan'));
      jake.Task['build:baseweb'].execute();
      // jake.Task['build:test'].execute();
    });
    watch(config.watch.docs, function(filename) {
      console.log(colorize(filename + ' was changed:', 'cyan'));
      jake.Task['build:docs'].execute();
    });
  });
});
