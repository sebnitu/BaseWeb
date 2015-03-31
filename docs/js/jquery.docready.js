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
    
    active_nav();
    active_subpage();
    examples();
    
    var $body = $('html, body');
    var content = $('#wrapper').smoothState({
      prefetch: true,
      // pageCacheSize: 4,
      onStart: {
        duration: 0,
        render: function (url, $container) {
          content.toggleAnimationClass('is-exiting');
          $body.animate({
            scrollTop: 0
          });
        }
      },
      callback: function(url, $container, $content) {
        
        Prism.highlightAll();
        
        active_nav();
        active_subpage();
        examples();
        
      }
    }).data('smoothState');
    
  });

}(jQuery));