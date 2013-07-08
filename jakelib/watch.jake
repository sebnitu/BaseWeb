var watch = require('node-watch');
var notice = require('./modules/notice');
var colorize = require('./modules/colorize');
var getjson = require('./modules/getjson');

desc('Watch for change to files and rebuild if they change');
task('watch', {async: true}, function() {
  getjson('config.json', function(config) {
    var msg = notice('Files are now being watched (ctrl+c to exit)');
    console.log(colorize(msg, 'yellow'));
    watch(config.watch.less, function(filename) {
      console.log(colorize(filename + ' was changed:', 'cyan'));
      jake.Task['build:baseweb'].execute();
    });
    watch(config.watch.docs, function(filename) {
      console.log(colorize(filename + ' was changed:', 'cyan'));
      jake.Task['build:docs'].execute();
    });
    watch(config.watch.tests, function(filename) {
      console.log(colorize(filename + ' was changed:', 'cyan'));
      jake.Task['build:tests'].execute();
    });
  });
});
