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
function active_nav($selector) {
  // Get the Path and Hash
  var path = window.location.pathname;
  var hash = window.location.hash;
      
  // Active link based on current URL
  $selector.find('a').each(function() {
    var href = $(this).attr('href');
    if (path.substring(0, href.length) === href) {
      $(this).closest('li').addClass('active');
    }
    if (hash === href) {
      $(this).closest('li').addClass('active');
    }
    
    $('#nav .rootnav > li.active').find('.subnav').fadeIn(250);
    
    $('#nav .rootnav > li > a').click(function() {
      $selector.find('.subnav').fadeOut(250);
    });
    
    if (/#/.test($(this).attr('href'))) {
      $(this).click(function() {
        $selector.find('.subnav li').removeClass('active');
        $(this).closest('li').addClass('active');
      });
    }
  });
}

/**
 * Sets the active subpage block based on URL Path and Hash
 */
function active_subpage($selector) {
  // Get the Path and Hash
  var hash = window.location.hash;
  
  $('.rootpage').hide();
  $selector.hide();
  
  if (hash) {
    $(hash).show();
  } else {
    $('.rootpage').show();
  }
  
  $('#nav .subnav a').click(function() {
    var href = $(this).attr('href');
    $('.rootpage').fadeOut(250);
    $selector.fadeOut(250, function() {
      // $(href).fadeIn(250);
      setTimeout(function() {
        $(href).fadeIn(250);
      }, 250);
    });
    $('html, body').animate({
      scrollTop: 0
    });
  });
}
