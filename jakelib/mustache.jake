var fs = require('fs');
var mustache = require('mustache');
var colorize = require('./utilities/colorize');
var getjson = require('./utilities/getjson');
var asyncForEach = require('./utilities/asyncForEach');

desc('Assembles the documentation templates');
task('mustache', {async: true}, function() {
  
  getjson(function(json) {
  
    var layouts, layout, pages, page, partials, template;
    
    layouts = fs.readdirSync(json.paths.layouts);
    pages = fs.readdirSync(json.paths.pages);
        
    // Lets us loop through files asyncronously
    asyncForEach(pages, function(name, callback) {
      
      if (!name.match(/\.mustache$/)) return;
      
      fs.readFile(json.paths.pages + name, 'utf8', function(err, page) {
        if (err) throw new Error(colorize(err, 'red'));
        
        partials = {page : page};
        layout = fs.readFileSync(json.paths.layouts + 'default.mustache', 'utf8');
        template = mustache.to_html(layout, json, partials);
        
        name = name.replace(/mustache$/, 'html');
        fs.writeFileSync(json.paths.docs + name, template, 'utf8');
        console.log(colorize('√ mustache: wrote ' + json.paths.docs + name, 'green'));
        
        callback();
      });
      
    }, function() {
      
      // Called after our loop has finished
      console.log(colorize('Docs have been built!', 'cyan'));
      
    });

  });

});
