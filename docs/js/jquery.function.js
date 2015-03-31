/**
 * jquery.function.js
 * A place to store all your project specific JavaScript functions
 * 
 * @author Sebastian Nitu
 * @url https://github.com/sebnitu/BaseWeb
 * @url http://sebnitu.com
 */

/**
 * Sets the active navigation elemnt base on URL Path and Hash
 */
function active_nav() {
  // Get the Path and Hash
  var path = window.location.pathname;
  var hash = window.location.hash;
  
  // Active link based on current URL
  $('.nav').find('a').each(function() {
    var href = $(this).attr('href');
    
    if (path.substring(0, href.length) === href) {
      $(this).closest('li').addClass('active');
    }
    if (hash === href) {
      $(this).closest('li').addClass('active');
    }
    if (path + hash === href) {
      $(this).closest('li').addClass('active');
    }
    
  });
}

/**
 * Sets the active subpage block based on URL Path and Hash
 */
function active_subpage($selector) {
  // Get the Path and Hash
  var path = window.location.pathname;
  var hash = window.location.hash;
  
  $('.rootpage, .subpage').hide();
  
  if (hash) {
    $(hash).show();
  } else {
    $('.rootpage').show();
  }
  
  $('.rootnav a, .breadcrumb a').click(function() {
    var this_href = $(this).attr('href');
    var this_hash = this_href.substring(this_href.indexOf('#'));
    
    if(this_href === this_hash && this_hash === path && path === this_href) {
      $('.rootpage, .subpage').fadeOut(250, function() {
        setTimeout(function() {
          $('.rootpage').fadeIn(250);
        }, 250);
      });
      
      $('html, body').animate({
        scrollTop: 0
      });
            
      // Update navigation
      $('.subnav li').removeClass('active');
      
      // Re,pve
      window.location.hash = '';
      
      return false;
    }
    
  });
  
  $('.subnav a').click(function() {
    var this_href = $(this).attr('href');
    var this_hash = this_href.substring(this_href.indexOf('#'));
    
    $('.page').fadeOut(250, function() {
      setTimeout(function() {
        $(this_hash).fadeIn(250);
      }, 250);
    });
    
    
    $('html, body').animate({
      scrollTop: 0
    });
    
    // Update navigation
    $('.subnav li').removeClass('active');
    $('.subnav li a').each(function() {
      var href = $(this).attr('href');
              
      if (this_href === href) {
        $(this).closest('li').addClass('active');
      }
    });
    
  });

}

/**
 * Resize
 */
function resize() {
  var h = (window.innerHeight || (window.document.documentElement.clientHeight || window.document.body.clientHeight));
  
  var $content = $('#example-content')
    , $left_panel = $('#example-content-output')
    , $right_panel = $('#example-content-input')
    , $handle_vertical = $('#handler-vertical');
    
  var divHight = 70;
  
  $content.css({ 'min-height': h - divHight + 'px' });
  $handle_vertical.css({ 'height': h - divHight + 'px' });
  $left_panel.css({ 'height': h - divHight + 'px' });
  $right_panel.css({
    'height': h - divHight + 'px',
    'width': $content.width() - $left_panel.width() - $handle_vertical.outerWidth() + 'px'
  });
  
}

jQuery.resizable = function(resizerID, vOrH) {
  jQuery('#' + resizerID).bind('mousedown', function(e) {
    
    var $shim = $('.shim');
    var start = e.pageY;
    if(vOrH=='v') start = e.pageX;
    
    $shim.show();
    
    jQuery('body').bind('mouseup', function() {
      jQuery('body').unbind('mousemove');
      jQuery('body').unbind('mouseup');
      $shim.hide();
    });
    
    jQuery('body').bind('mousemove', function(e) {
      var end = e.pageY;
      if(vOrH=='v') end = e.pageX;
      if(vOrH=='h'){
        jQuery('#' + resizerID).prev().height(jQuery('#' + resizerID).prev().height()+ (end-start)); 
        jQuery('#' + resizerID).next().height(jQuery('#' + resizerID).next().height()- (end-start)); 
      }
      else{
        jQuery('#' + resizerID).prev().width(jQuery('#' + resizerID).prev().width()+ (end-start)); 
        jQuery('#' + resizerID).next().width(jQuery('#' + resizerID).next().width()- (end-start)); 
      }
      start = end;
    });
    
  });
}

/**
 * Select Page Switcher
 */
function navigateTo(sel, target, newWindow) {
  var url = sel.options[sel.selectedIndex].value;
  if (newWindow) {
    window.open(url, target, '--- attributes here, see below ---');
  } else {
    window[target].location.href = url;
  }
}

/**
 * Examples JS
 */
function examples() {
  
  /**
   * Example Resize
   */
  window.onresize = resize;
  resize();
  $.resizable('handler-vertical', "v");
  
  /**
   * Example Output Switcher
   */
  $('.select-output-example select').change(function() {
    navigateTo(this, 'window', false);
  });
  
  /**
   * Example Input Display
   */
  var $example_input_items = $('.example-input-wrapper pre');
  var $example_input_values = $('.select-input-display input');
  
  $example_input_values.each(function() {
    if( $(this).is(':checked') ) {
      $('.example-input-wrapper').find('.' + $(this).val()).show();
    } else {
      $('.example-input-wrapper').find('.' + $(this).val()).hide();
    }
  });
  
  $('.select-input-display input').change(function() {
    
    var $value = $(this).val();
    var $checked = $(this).is(':checked');
    
    $example_input_items.each(function() {
      if ($(this).hasClass($value)) {
        if ($checked) {
          $(this).show();
        } else {
          $(this).hide();
        }
      }
    });
    
  });
  
}
