var fs = require('fs');
var sys = require('util');
var path = require('path');

var less = require('less');
var watch = require('node-watch');

var lessc = require('./jakelib/lessc');
var colorize = require('./jakelib/colorize');
var notice = require('./jakelib/notice');

namespace('compile', function() {
    
    desc('Compile LESS files');
    task('less', {async: true}, function() {
        
        var input = 'assets/less/baseweb.less'
        ,   output = 'assets/css/baseweb.css'
        ,   outputMin = 'assets/css/baseweb.min.css'
        ,   lessp = ['./assets/less'];
        
        lessc(input, output, { paths: lessp });
        lessc(input, outputMin, { paths: lessp, compress : true });
        
    });
    
});

namespace('build', function() {
    
    desc('Build core BaseWeb files');
    task('baseweb', {async: true}, function() {
        
        jake.Task['compile:less'].execute();
        
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