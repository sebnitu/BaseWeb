/**
 * jquery.docready.js
 * A place to store all your JavaScript you want to run after 
 * either the document is ready or images are finished loading
 * 
 * @author Sebastian Nitu
 * @url https://github.com/sebnitu/BaseWeb
 * @url http://sebnitu.com
 */

;(function ($) {
  'use strict';
  
  /**
   * When the document is ready
   */
  $(document).ready(function () {
    
    if (location.hash) {
      setTimeout(function() {
        window.scrollTo(0, 0);
      }, 1);
    }
    
    active_nav($('#nav'));
    active_subpage($('.subpage'));
    
    var $body = $('html, body');
    var content = $('#main').smoothState({
      // Runs when a link has been activated
      blacklist: '.logo',
      prefetch: true,
      // pageCacheSize: 4,
      onStart: {
        duration: 250, // Duration of our animation
        render: function (url, $container) {
          // toggleAnimationClass() is a public method
          // for restarting css animations with a class
          content.toggleAnimationClass('is-exiting');
          // Scroll user to the top
          $body.animate({
            scrollTop: 0
          });
        }
      },
      callback: function(url, $container, $content) {
        
        active_nav($('#nav'));
        active_subpage($('.subpage'));
        
      }
    }).data('smoothState');
    
  });
  
  /**
   * When the images are loaded
   */
  $(window).load(function () {
  

  
  });

}(jQuery));