var colorize = require('./jakelib/colorize');

desc('This is the default task.');
task('default', function (params) {
    console.log( colorize('This is the default task.', 'green') );
});