var fs = require('fs');
var mustache = require('mustache');
var colorize = require('./modules/colorize');
var extend = require('./modules/extend');
var getjsonsync = require('./modules/getjsonsync');

desc('Assembles the mustache templates');
task('mustache', {async: false}, function(options) {
  
  // Default Options
  var defaultOptions = 
    { pages : {}
    , dir : ''
    , path:
      { template : 'templates/'
      , layouts  : 'templates/layouts/'
      , pages    : 'templates/pages/'
      }
    , defaultLayout : 'default.mustache'
    , customLayouts : {}
    };
      
  // Extend passed options with the defaults
  var o = extend(defaultOptions, options);

  // Build the template paths
  o.path.template = o.dir + o.path.template;
  o.path.layouts = o.dir + o.path.layouts;
  o.path.pages = o.dir + o.path.pages;
  
  // Save our pages listing
  o.pages = fs.readdirSync(o.path.pages);
  
  // Lets loop through pages asyncronously
  o.pages.forEach(function(name) {
    
    // Check that it's a mustache file, else callback and return
    if (!name.match(/\.mustache$/)) {
      callback();
      return;
    }
    
    // Read the page
    data = fs.readFileSync(o.path.pages + name, 'utf8');
    
    // Write the page
    writePage(data, name, o);
    
  });

});

var buildMenu = function(pages, dir, current) {
  
  var menu = [];
  
  for( i = 0; i < pages.length; i++ ) {
    
    var name = pages[i];
    
    if (!name.match(/\.mustache$/)) {
      return;
    }
    
    var name_html = name.replace(/mustache$/, 'html')
      , slug = name.replace(/\.mustache/, '')
      , key = slug.replace(/\-/, '_')
      , text = slug.replace(/\-/, ' ').replace(/\w\S*/g, function(txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
    
    if (text === 'Index') {
      text = 'Home'
    }
    
    menu[i] = { 
      'name_mustache' : name,
      'name_html' : name_html,
      'url' : '../' + dir + name_html,
      'text' : text,
      'id' : 'nav-item-' + slug
    };
    
    if ( menu[i].name_mustache === current ) {
      menu[i].class = 'nav-item nav-item-' + slug + ' nav-item-active';
    } else {
      menu[i].class = 'nav-item nav-item-' + slug;
    }
    
  }
  
  return menu;
}

var writePage = function(data, name, o) {
  
  // Initiate variables
  var layout
    , json
    , partials
    , template
    , name_html
    , context = {}
    , currentIndex
    , defaultClasses;
  
  // Build the page menu
  context.menu = buildMenu(o.pages, o.dir, name);
  
  
  // Set the page title
  context.title = name
    .replace(/\.mustache/, '')
    .replace(/\-/, ' ')
    .replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
  
  if (context.title == 'Index') {
    context.title = 'Home'
  }
      
  // Check if we need to use a custom layout for our page
  if ( o.customLayouts[name] ) {
    // Check if custom layout exists
    if ( fs.existsSync(o.path.layouts + o.customLayouts[name]) ) {
      // We're good, let's use our custom layout
      layout = fs.readFileSync(o.path.layouts + o.customLayouts[name], 'utf8');
    } else {
      // Custom layout file wasn't created so throw a warning and use the default instead
      console.log(colorize('Warning: `' + o.path.layouts + o.customLayouts[name] + '` does not exist. Using `' +  o.path.layouts + o.defaultLayout + '` to build `' + o.dir + context.menu[currentIndex].name_html + '`', 'yellow'));
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
    
  // Write the file and output our message to the console
  fs.writeFileSync(o.dir + name.replace(/\.mustache/, '.html'), template, 'utf8');
  console.log(colorize('√ mustache: wrote ' + o.dir + name.replace(/\.mustache/, '.html'), 'green'));
}
