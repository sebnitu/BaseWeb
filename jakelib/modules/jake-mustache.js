var fs = require('fs');
var u = require('./node-utility');
var mustache = require('mustache');

module.exports = function runmustache(options) {
  
  // Default Options
  var defaultOptions = { 
    pages : {},
    partials : {},
    search : {
      start : '{{!',
      end : '}}'
    },
    dir : '',
    path: {
      global   : {
        base     : 'docs/',
        template : 'docs/templates/',
        layouts  : 'docs/templates/layouts/',
        pages    : 'docs/templates/pages/',
        partials : 'docs/templates/partials/'
      },
      template : 'templates/',
      layouts  : 'templates/layouts/',
      pages    : 'templates/pages/',
      partials : 'templates/partials/'
    },
    defaultLayout : 'default.mustache'
  };
      
  // Extend passed options with the defaults
  var o = u.extend(defaultOptions, options);
  
  // Build the template paths
  o.path.template = o.dir + o.path.template;
  o.path.layouts = o.dir + o.path.layouts;
  o.path.pages = o.dir + o.path.pages;
  o.path.partials = o.dir + o.path.partials;
  
  // Save our pages listing
  var pages = fs.readdirSync(o.path.pages);
  o.pages = [];
  for( i = 0; i < pages.length; i++ ) {
    if (pages[i].match(/\.mustache$/)) {
      o.pages.push(pages[i]);
    }
  }
  
  // Save our partials listing
  var partials = fs.readdirSync(o.path.partials);
  o.partials = [];
  for( i = 0; i < partials.length; i++ ) {
    if (partials[i].match(/\.mustache$/)) {
      o.partials.push(partials[i]);
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
  
}

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
 * Write Page
 */
var writePage = function(data, name, o) {
  
  // Initiate variables
  var layout
   ,  layout_paths
   ,  layout_path
   ,  json
   ,  partials = {}
   ,  template
   ,  context = {};
  
  // Get package.json details
  json = u.getjsonsync('package.json');
  
  // Combine context and json
  context = u.extend(context, json);
    
  // Get page options
  context.page = get_page_options(o, data);
  
  // Set layout paths ordered by priority
  layout_paths = [
    o.path.layouts + context.page.layout,
    o.path.global.layouts + context.page.layout,
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
  
  // Set the page slug
  context.page.slug = context.page.output.file.replace(/\.html/, '');
  
  // Reset the subpages variable
  o.subpages = [];
  
  // Get all the subpages if they exists
  if (fs.existsSync(o.path.pages + context.page.slug)) {
    // Save our subpage listing
    var subpages = fs.readdirSync(o.path.pages + context.page.slug);
    for( i = 0; i < subpages.length; i++ ) {
      if (subpages[i].match(/\.mustache$/)) {
        o.subpages.push(subpages[i]);
      }
    }
  }
  
  // Get the partials from the partials directory
  o.partials.forEach(function(name) {
        
    // Check that it's a mustache file, else return
    if (!name.match(/\.mustache$/)) {
      return;
    }
    
    // Save our partial to the partials object
    partials[name.replace(/\.mustache/, '')] = fs.readFileSync(o.path.partials + name, 'utf8');
    
  });
    
  // Get the subpages from the subpage directory
  if (fs.existsSync(o.path.pages + context.page.slug)) {
    o.subpages.forEach(function(subpage) {
          
      // Check that it's a mustache file, else return
      if (!subpage.match(/\.mustache$/)) {
        return;
      }
      
      // Save our partial to the partials object
      partials['subpage_' + subpage.replace(/\.mustache/, '')] = fs.readFileSync(o.path.pages + context.page.slug + '/' + subpage, 'utf8');
      
    });
  }
  
  // Set the page partial
  partials['page'] = data;
  
  // Create the mustache template
  template = mustache.to_html(layout, context, partials);
    
  // Write the file and output our message to the console
  fs.writeFileSync(context.page.output.path + context.page.output.file, template, 'utf8');
  u.print('√ mustache: wrote ' + context.page.output.path + context.page.output.file, 'green');
}