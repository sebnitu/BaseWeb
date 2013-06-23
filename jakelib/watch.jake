var watch = require('node-watch');
var notice = require('./notice');
var colorize = require('./colorize');

desc('Watch for change to files and rebuild if they change');
task('watch', {async: true}, function() {
    var msg = notice('Files are now being watched (ctrl+c to exit)')
    ,   spy = ['./assets/less/'];
    console.log(colorize(msg, 'yellow'));
    watch(spy, function(filename) {
        console.log(colorize(filename + ' was changed:', 'cyan'));
        jake.Task['build:baseweb'].execute();
        jake.Task['build:test'].execute();
    });
});
