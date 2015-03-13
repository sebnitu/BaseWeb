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
  $selector.find('a').each(function () {
    var href = $(this).attr('href');
    if (path.substring(0, href.length) === href) {
      $(this).closest('li').addClass('active');
    }
    if (hash === href) {
      $(this).closest('li').addClass('active');
    }
    
    if (/#/.test($(this).attr('href'))) {
      $(this).click(function() {
        $selector.find('ul ul li').removeClass('active');
        $(this).closest('li').addClass('active');
      });
    }
  });
}
