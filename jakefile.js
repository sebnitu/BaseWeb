var fs = require('fs');
var watch = require('node-watch');

var colorize = require('./jakelib/colorize');
var notice = require('./jakelib/notice');

namespace('build', function() {
    
    desc('Compiles and minifies BaseWeb');
    task('baseweb', {async: true}, function() {
        var lessp = ['./assets/less/']
        ,   input = 'assets/less/baseweb.less'
        ,   output = 'assets/css/baseweb.css'
        ,   outputMin = 'assets/css/baseweb.min.css'
        ,   lessTask = jake.Task.lessc;
        
        // Reenables task so we can call it more than once
        lessTask.reenable(true);
        
        // Compile baseweb.css
        lessTask.invoke.apply(lessTask, [
            input
        ,   output
        ,   { paths: lessp }
        ]);
        // Compile and minify baseweb.min.css
        lessTask.invoke.apply(lessTask, [
            input
        ,   outputMin
        ,   { paths: lessp, compress : true }
        ]);
        
    });
    
    desc('Build documentation');
    task('docs', {async: true}, function() {
        
    });
    
});

desc('Watch for change to files and rebuild if they change');
task('watch', function() {
    var msg = notice('Files are now being watched (ctrl+c to exit)')
    ,   files = './assets/less/';
    
    console.log(colorize(msg, 'yellow'));
    watch(files, function(filename) {
        console.log(colorize(filename + ' was changed:', 'cyan'));
        jake.Task['build:baseweb'].execute();
    });
});