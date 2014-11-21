/**
 * Find and replace all
 */
String.prototype.replaceAll = function(find, replace){
  return this.replace(new RegExp(find, 'g'), replace);
};

/**
 * To title case
 */
String.prototype.toTitleCase = function(){
  var smallWords = /^(a|an|and|as|at|but|by|en|for|if|in|nor|of|on|or|per|the|to|vs?\.?|via)$/i;

  return this.replace(/[A-Za-z0-9\u00C0-\u00FF]+[^\s-]*/g, function(match, index, title){
    if (index > 0 && index + match.length !== title.length &&
      match.search(smallWords) > -1 && title.charAt(index - 2) !== ":" &&
      (title.charAt(index + match.length) !== '-' || title.charAt(index - 1) === '-') &&
      title.charAt(index - 1).search(/[^\s-]/) < 0) {
      return match.toLowerCase();
    }

    if (match.substr(1).search(/[A-Z]|\../) > -1) {
      return match;
    }

    return match.charAt(0).toUpperCase() + match.substr(1);
  });
};

/**
 * jQuery alias wrap
 */
;(function ($) {
  'use strict';
  
  /**
   * When the document is ready
   */
  $(document).ready(function () {
    
    /**
     * Sticky Navigation
     */
    $('#aside-inner').stick_in_parent();
    
    /**
     * Navigation
     * Add our h2's as sub navigation
     */
    var headings = $('h1, h2');
    var sub_menu = '<ul class="sub-menu">';
    
    var text, href;
    
    // Loop through the headers
    headings.each(function(index, element) {
    
      // Get the values
      text = $(this).text();
      href = $(this).attr('id');
      
      // Append link to navigation
      if (href) {
        sub_menu += '<li><a href="#' + href + '">' + text + '</a></li>';
      }
      
    });
    
    // Close the submenu UL
    sub_menu += '</ul>';
        
    // Append submenu to navigation
    if (headings.length !== 0) {
      sub_menu = $('.block-aside .active').append(sub_menu).find('.sub-menu').hide().delay(500).slideDown();
    }
    
    /**
     * Scroll to element
     */
    $('a[href*=#]:not([href=#])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });
    
    /**
     * Color Palette Tables
     */
    var palette_table = $('.palette-table');
    
    // Define our swatch template
    var swatch_template = '<tr>\
      <td class="swatch-desc"><code>${{ color }}</code></td>\
      <td class="swatch-cell" title="${{ color }}-lighter"><span class="swatch color-{{ color }}-lighter"></span></td>\
      <td class="swatch-cell" title="${{ color }}-light"><span class="swatch color-{{ color }}-light"></span></td>\
      <td class="swatch-cell" title="${{ color }}"><span class="swatch color-{{ color }}"></span></td>\
      <td class="swatch-cell" title="${{ color }}-dark"><span class="swatch color-{{ color }}-dark"></span></td>\
      <td class="swatch-cell" title="${{ color }}-darker"><span class="swatch color-{{ color }}-darker"></span></td>\
    </tr>';
    
    // Define our swatches
    var swatches = [
      'red',
      'red-orange',
      'orange',
      'yellow-orange',
      'yellow',
      'yellow-green',
      'green',
      'blue-green',
      'blue',
      'blue-violet',
      'violet',
      'red-violet'
    ];
    
    // Create our variables to be used in the forEach loop
    var title, color, tmp, palette = '';
    
    // Loop through the swatches
    swatches.forEach(function(element, index, array) {
    
      // Get the values
      title = element.toTitleCase();
      color = element;
      
      // Replace values in template
      tmp = swatch_template.replace('{{ title }}', title);
      tmp = tmp.replaceAll('{{ color }}', color);
      
      // Save our template to the palette
      palette += tmp;
      
    });
    
    // Append our palette to the table
    palette_table.append(palette);
        
  });

}(jQuery));