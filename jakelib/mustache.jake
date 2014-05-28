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
  var defaultOptions = { 
    pages : {}, 
    search : {
      start : '{{!',
      end : '}}'
    },
    dir : '',
    path: {
      global   : {
        base     : 'mustache/',
        template : 'mustache/templates/',
        layouts  : 'mustache/templates/layouts/',
        pages    : 'mustache/templates/pages/'
      },
      template : 'templates/',
      layouts  : 'templates/layouts/',
      pages    : 'templates/pages/'
    },
    defaultLayout : 'default.mustache'
  };
      
  // Extend passed options with the defaults
  var o = extend(defaultOptions, options);

  // Build the template paths
  o.path.template = o.dir + o.path.template;
  o.path.layouts = o.dir + o.path.layouts;
  o.path.pages = o.dir + o.path.pages;
    
  // Save our pages listing
  var pages = fs.readdirSync(o.path.pages);
  o.pages = [];
  for( i = 0; i < pages.length; i++ ) {
    if (pages[i].match(/\.mustache$/)) {
      o.pages.push(pages[i]);
    }
  }
    
  // Lets loop through pages asyncronously
  o.pages.forEach(function(name) {
    
    // Check that it's a mustache file, else return
    if (!name.match(/\.mustache$/)) {
      return;
    }
    
    // Read the page
    data = fs.readFileSync(o.path.pages + name, 'utf8');
    
    // Write the page
    writePage(data, name, o);
    
  });

});

/**
 * Get Page Options
 */
var get_page_options = function(o, data) {
  
  // Set the default variables
  var index_1 = data.indexOf(o.search.start)
   ,  index_2 = data.indexOf(o.search.end)
   ,  page_options = {};
  
  // Get the page speficic options
  if( (index_1 != -1) && (index_2 != -1) ) {
    page_options = data.substr( index_1 + (o.search.start.length) , index_2  - (o.search.start.length));
    page_options = JSON.parse(page_options);
  }
  
  return page_options;
}

/**
 * Build Directories Menu
 */
var build_directories_menu = function(o, context) {
  
  var menu = [];
  var dirs = context.paths.mustache.directories;
  var i = 0;
  
  for ( var key in dirs ) {
  
    // Key = key
    // Value = dirs[key]
    
    menu[i] = { 
      'url' : '/' + dirs[key].url,
      'text' : dirs[key].text,
      'slug' : dirs[key].slug,
      'id' : 'menu-item-' + dirs[key].slug,
      'classes' : 'menu-item' + ' ' + 'menu-item-' + dirs[key].slug
    };
        
    // Add active class
    if (o.dir === dirs[key].url) {
      menu[i].classes = menu[i].classes + ' active';
    }
    
    i++;
  }
  
  return menu;
}

/**
 * Build Menu
 */
var build_menu = function(o, current) {
  
  var menu = [];
  
  for ( i = 0; i < o.pages.length; i++ ) {
        
    var name = o.pages[i];
    
    data = fs.readFileSync(o.path.pages + name, 'utf8');
    
    var page_options = get_page_options(o, data);
        
    // If page order is set to 0, leave it out of the menu
    if(page_options.menu.order != '0') {
      
      // Get a few default menu values from the file name
      var name_html = name.replace(/mustache$/, 'html')
       ,  slug = name.replace(/\.mustache/, '')
       ,  key = slug.replace(/\-/, '_')
       ,  text = slug.replace(/\-/, ' ').replace(/\w\S*/g, function(txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
          });
      
      // Set the default menu values
      menu[i] = { 
        'name_mustache' : name,
        'name_html' : name_html,
        'url' : '../' + o.dir + name_html,
        'text' : text,
        'desc' : '',
        'order' : 0,
        'slug' : slug,
        'id' : 'menu-item-' + slug,
        'classes' : 'menu-item' + ' ' + 'menu-item-' + slug,
        'select' : ''
      };
      
      // Set the custom page values
      if ( page_options.menu.text ) {
        menu[i].text = page_options.menu.text;
      }
      if ( page_options.menu.slug ) {
        menu[i].slug = page_options.menu.slug;
        menu[i].id = 'menu-item-' + page_options.menu.slug;
        menu[i].classes = 'menu-item' + ' ' + 'menu-item-' + page_options.menu.slug;
      }
      if ( page_options.description ) {
        menu[i].desc = page_options.description;
      }
      if ( page_options.menu.order ) {
        menu[i].order = page_options.menu.order;
      }
      
      if ( menu[i].name_mustache === current ) {
        menu[i].classes = menu[i].classes + ' active';
        menu[i].select = 'selected="selected"';
      }
    }
  }
  
  // Clean function
  Array.prototype.clean = function(deleteValue) {
    for (var i = 0; i < this.length; i++) {
      if (this[i] == deleteValue) {         
        this.splice(i, 1);
        i--;
      }
    }
    return this;
  };
  
  // Compare function
  function compare( a, b ) {
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
  
  // Clean and sort the menu
  menu.clean(undefined).sort(compare);
  
  return menu;
}

/**
 * Write Page
 */
var writePage = function(data, name, o) {
  
  // Initiate variables
  var layout
   ,  layout_paths
   ,  layout_path
   ,  json
   ,  partials
   ,  template
   ,  context = {};
  
  // Get package.json details
  json = getjsonsync('package.json');
  
  // Combine context and json
  context = extend(context, json);
  
  // Build the page menu
  context.menu = build_menu(o, name);
    
  // Build the directories menu
  context.directories_menu = build_directories_menu(o, context);
    
  // Get page options
  context.page = get_page_options(o, data);
  
  // Set layout paths ordered by priority
  layout_paths = [
    o.path.layouts + context.layout,
    o.path.global.layouts + context.layout,
    o.path.layouts + name,
    o.path.global.layouts + name,
    o.path.layouts + o.defaultLayout,
    o.path.global.layouts + o.defaultLayout
  ];
  
  // Set the page output
  if (context.page.output) {
  
    if (!context.page.output.file) {
      context.page.output.file = name.replace(/\.mustache/, '.html');
    }
    
    if (typeof context.page.output.path === 'undefined') {
      context.page.output.path = o.dir;
    }
    
  } else {
    context.page.output = {
      "file" : name.replace(/\.mustache/, '.html'),
      "path" : o.dir
    }
  }
    
  // Set page title
  if (!context.page.title) {
    context.page.title = name
      .replace(/\.mustache/, '')
      .replace(/\-/, ' ')
      .replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
  }
  
  // Loop through the paths till we find a match
  for( i = 0; i < layout_paths.length; i++ ) {
    if ( fs.existsSync(layout_paths[i]) ) {
      layout_path = layout_paths[i];
      break;
    }
  }
    
  // Read and save our layout file
  if(layout_path) {
    layout = fs.readFileSync(layout_path, 'utf8');
  } else {
    u.print('A layout file was not found for ' + context.page.output.path + context.page.output.file + '!', 'red');
    return;
  }
  
  // Set the layout specific variables
  context.layout = get_page_options(o, layout);
  
  // Set layout title
  if (!context.layout.title) {
    context.layout.title = context.name;
  }
  
  // Set layout description
  if (!context.layout.desc) {
    context.layout.desc = context.description;
  }
  
  // Set page description
  if (!context.page.desc) {
    context.page.desc = context.description;
  }
  
  // Set the page data as a partial
  partials = {page : data};
  
  // Create the mustache template
  template = mustache.to_html(layout, context, partials);
    
  // Write the file and output our message to the console
  fs.writeFileSync(context.page.output.path + context.page.output.file, template, 'utf8');
  u.print('√ mustache: wrote ' + context.page.output.path + context.page.output.file, 'green');
}
