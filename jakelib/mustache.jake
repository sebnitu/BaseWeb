var fs = require('fs');
var mustache = require('mustache');
var extend = require('./modules/extend');
var getjsonsync = require('./modules/getjsonsync');
var u = require('./modules/utility');

/**
 * Jake task for compiling mustache templates
 */
desc('Compiles mustache templates');
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

var buildMenu = function(o, current) {
  
  var menu = [];
  
  for( i = 0; i < o.pages.length; i++ ) {
    
    var name = o.pages[i];
    
    data = fs.readFileSync(o.path.pages + name, 'utf8');
    
    var search_start = '{{!'
     ,  search_end = '}}'
     ,  index_1 = data.indexOf(search_start)
     ,  index_2 = data.indexOf(search_end)
     ,  page_options = [];
    
    if( (index_1 != -1) && (index_2 != -1) ) {
      page_options = data.substr( index_1 + (search_start.length) , index_2  - (search_start.length));
      page_options = JSON.parse(page_options);
    }
        
    if (!name.match(/\.mustache$/)) {
      return;
    }
    
    var name_html = name.replace(/mustache$/, 'html')
      , slug = name.replace(/\.mustache/, '')
      , key = slug.replace(/\-/, '_')
      , text = slug.replace(/\-/, ' ').replace(/\w\S*/g, function(txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
    
    menu[i] = { 
      'name_mustache' : name,
      'name_html' : name_html,
      'url' : '../' + o.dir + name_html,
      'text' : text,
      'id' : 'menu-item-' + slug,
      'order' : 0
    };
    
    if ( page_options.order ) {
      menu[i].order = page_options.order;
    }
    
    if ( menu[i].name_mustache === current ) {
      menu[i].select = 'selected="selected"';
    } else {
      menu[i].select = '';
    }
    
  }
  
  function compare( a, b ) {
    // console.log('Compare: ' + a.order + ' with ' + b.order);
    if (a.order === 0)
      return 1;
    if (b.order === 0)
      return -1;
    if (a.order < b.order)
      return -1;
    if (a.order > b.order)
      return 1;
    return 0;
  }
  
  menu.sort(compare);
    
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
  context.menu = buildMenu(o, name);
  
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
      u.print('Warning: `' + o.path.layouts + o.customLayouts[name] + '` does not exist. Using `' +  o.path.layouts + o.defaultLayout + '` to build `' + o.dir + context.menu[currentIndex].name_html + '`', 'yellow');
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
  u.print('√ mustache: wrote ' + o.dir + name.replace(/\.mustache/, '.html'), 'green');
}
