var fs = require('fs');
var mustache = require('mustache');
var colorize = require('./modules/colorize');
var extend = require('./modules/extend');
var getjsonsync = require('./modules/getjsonsync');
var asyncForEach = require('./modules/asyncForEach');

var writePage = function(data, name, o) {
  
  var layout, json, partials, template, nameHTML;
  
  // Save the HTML name for the output file
  nameHTML = name.replace(/mustache$/, 'html');
  
  // Check if we need to use a custom layout for our page
  if ( o.customLayouts[name] ) {
    // Check if custom layout exists
    if ( fs.existsSync(o.path.layouts + o.customLayouts[name]) ) {
      // We're good, let's use our custom layout
      layout = fs.readFileSync(o.path.layouts + o.customLayouts[name], 'utf8');
    } else {
      // Custom layout file wasn't created so throw a warning and use the default instead
      console.log(colorize('Warning: `' + o.path.layouts + o.customLayouts[name] + '` does not exist. Using `' +  o.path.layouts + o.defaultLayout + '` to build `' + o.root + nameHTML + '`', 'yellow'));
      layout = fs.readFileSync(o.path.layouts + o.defaultLayout, 'utf8');
    }
  } else {
    // Use the default layout
    layout = fs.readFileSync(o.path.layouts + o.defaultLayout, 'utf8');
  }
  // Get the page variables
  json = getjsonsync('package.json');
  // Set the page data as a partial
  partials = {page : data};
  // Create the mustache template
  template = mustache.to_html(layout, json, partials);
  
  // Write the file and output our message to the console
  fs.writeFileSync(o.root + nameHTML, template, 'utf8');
  console.log(colorize('√ mustache: wrote ' + o.root + nameHTML, 'green'));
}

desc('Assembles the mustache templates');
task('mustache', {async: true}, function(options) {
  
  // Default Options
  var defaultOptions = 
      { root : ''
      , path:
        { template : 'templates/'
        , layouts  : 'templates/layouts/'
        , pages    : 'templates/pages/'
        }
      , defaultLayout : 'default.mustache'
      , customLayouts :
        { 'test.mustache' : 'test.mustache'
        }
      };
      
  // Extend passed options with the defaults
  var o = extend(defaultOptions, options);
  
  // Build the template paths
  o.path.template = o.root + o.path.template;
  o.path.layouts = o.root + o.path.layouts;
  o.path.pages = o.root + o.path.pages;
    
  // Lets loop through pages asyncronously
  asyncForEach(fs.readdirSync(o.path.pages), function(name, callback) {
    
    // Check that it's a mustache file, else callback and return
    if (!name.match(/\.mustache$/)) {
      callback();
      return;
    }
    
    // Read the page
    fs.readFile(o.path.pages + name, 'utf8', function(err, data) {
      if (err) throw new Error(colorize(err, 'red'));
      // Write the page file and then callback
      writePage(data, name, o);
      callback();
    });
    
  }, function() {
    
    // Called after our loop has finished
    // console.log(colorize('Templates have been built!', 'cyan'));
    
  });    

});
