var fs = require('fs');
var mustache = require('mustache');
var colorize = require('./colorize');

desc('Assembles the documentation templates');
task('mustache', {async: true}, function(options) {
    
    var layout = options.paths + 'default.mustache';
    
    fs.readFile(layout, 'utf8', function(err, data) {
        if (err) throw new Error(colorize(err, 'red'));
        
        var tags = {
            "page": "output"
        };
        
        var compiledTemplate = mustache.to_html(data, tags);
        
        console.log(compiledTemplate);
        
    });

});
