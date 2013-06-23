var fs = require('fs');
var colorize = require('./colorize');

var lessPaths = ['assets/less/']
,   docsPath = 'docs/'
,   templatesPath = docsPath + 'templates/'
,   layoutsPath = templatesPath + 'layouts/'
,   pagesPath = templatesPath + 'pages/';

namespace('build', function() {
    
    desc('Compiles and minifies BaseWeb');
    task('baseweb', {async: true}, function() {
        var input = 'assets/less/baseweb.less'
        ,   output = ['assets/css/baseweb.css', 'assets/css/baseweb.min.css']
        ,   lessTask = jake.Task.lessc;
        lessTask.reenable(true);
        lessTask.invoke.apply(lessTask, [input, output, {paths: lessPaths}]);
    });
    
    desc('Compiles and minifies a test less file');
    task('test', {async: true}, function() {
        var input = 'assets/less/test.less'
        ,   output = ['assets/css/test.css', 'assets/css/test.min.css']
        ,   lessTask = jake.Task.lessc;
        lessTask.reenable(true);
        lessTask.invoke.apply(lessTask, [input, output, {paths: lessPaths}]);
    });
    
    desc('Build documentation');
    task('docs', {async: true}, function() {
        var mustacheTask = jake.Task.mustache;
        mustacheTask.reenable(true);
        mustacheTask.invoke.apply(mustacheTask, [{paths: layoutsPath}]);
    });
});
