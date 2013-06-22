var fs = require('fs');
var less = require('less');

var extend = require('./extend');
var colorize = require('./colorize');

var defaultOptions = {
    depends: false,
    compress: false,
    yuicompress: false,
    max_line_len: -1,
    optimization: 1,
    silent: false,
    verbose: false,
    lint: false,
    paths: [],
    color: true,
    strictImports: false,
    rootpath: '',
    relativeUrls: false,
    ieCompat: true,
    strictMath: false,
    strictUnits: false
};

desc('Compile and minify a LESS file');
task('lessc', {async: true}, function(input, output, options) {
    
    var options = extend(defaultOptions, options);
    
    fs.readFile(input, 'utf8', function(err, data) {
        if (err) throw new Error(colorize(err, 'red'));
        
        var parser = new(less.Parser)(options);
        
        parser.parse(data, function (err, tree) {
            if (err) {
                less.writeError(err, options);
                return;
            }
            try {
                var css = tree.toCSS({
                    silent: options.silent,
                    verbose: options.verbose,
                    ieCompat: options.ieCompat,
                    compress: options.compress,
                    yuicompress: options.yuicompress,
                    maxLineLen: options.maxLineLen,
                    strictMath: options.strictMath,
                    strictUnits: options.strictUnits
                });

                fs.writeFile(output, css, 'utf8', function(err) {
                    if (err) throw new Error(colorize(err, 'red'));
                    console.log(colorize('√ lessc: wrote ' + output, 'green'));
                    complete();
                });

            } catch (err) {
                less.writeError(err, options);
                return;
            }
        });

    });

});