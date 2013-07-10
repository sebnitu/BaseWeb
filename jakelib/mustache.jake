var fs = require('fs');
var mustache = require('mustache');
var colorize = require('./modules/colorize');
var extend = require('./modules/extend');
var getjsonsync = require('./modules/getjsonsync');
var asyncForEach = require('./modules/asyncForEach');

var writePage = function(data, name, o) {
  
  // Initiate variables
  var nameHTML, layout, json, partials, template, context = {};
  
  // Set the current page class  
  var currentIndex, index = 0;
  context.nav = o.nav;
  context.nav.forEach(function(item) {
    if ( item.name_mustache === name ) {
      currentIndex = index;
    }
    index += 1;
  });
  // o.nav[currentIndex].class = o.nav[currentIndex].class + ' nav-item-active';
  console.log(context.nav[currentIndex]);
  
  // Set the page title
  context.title = name
    .replace(/\.mustache/, '')
    .replace(/\-/, ' ')
    .replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
  
  if (context.title == 'Index') {
    context.title = 'Home'
  }
  
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
  } else if ( fs.existsSync(o.path.layouts + name) ) {
    // Use matching layout and page name
    layout = fs.readFileSync(o.path.layouts + name, 'utf8');
  } else {
    // Use the default layout
    layout = fs.readFileSync(o.path.layouts + o.defaultLayout, 'utf8');
  }
  // Get the page variables
  json = extend(getjsonsync('package.json'), context);
  // Set the page data as a partial
  partials = {page : data};
  // Create the mustache template
  template = mustache.to_html(layout, json, partials);
  
  // Output json for testing
  // console.log(json);
  
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
    , nav : []
    , defaultLayout : 'default.mustache'
    , customLayouts : {}
    };
      
  // Extend passed options with the defaults
  var o = extend(defaultOptions, options);
  
  // Build the template paths
  o.path.template = o.root + o.path.template;
  o.path.layouts = o.root + o.path.layouts;
  o.path.pages = o.root + o.path.pages;
  
  // Save our pages listing
  var pages = fs.readdirSync(o.path.pages);
  
  // Build navigation for layout
  pages.forEach(function(name) {
    
    if (!name.match(/\.mustache$/)) {
      return;
    }
    
    var name_html = name.replace(/mustache$/, 'html');
    var slug = name.replace(/\.mustache/, '');
    var key = slug.replace(/\-/, '_');
    var text = slug.replace(/\-/, ' ').replace(/\w\S*/g, function(txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
    
    if (text === 'Index') {
      text = 'Home'
    }
    
    o.nav.push( { 
      'name_mustache' : name,
      'name_html' : name_html,
      'url' : '../' + o.root + name_html,
      'text' : text,
      'class' : 'nav-item nav-item-' + slug,
      'id' : 'nav-item-' + slug
    });
  });
  
  // Lets loop through pages asyncronously
  asyncForEach(pages, function(name, callback) {
    
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
