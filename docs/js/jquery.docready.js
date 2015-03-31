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
  
  // Scroll the page to the top
  if (location.hash) {
    setTimeout(function() {
      window.scrollTo(0, 0);
    }, 1);
  }
  
  // Initial JavaScript
  active_nav();
  active_subpage();
  examples();
  
  // SmoothState
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
      
      // Re-highlight code examples
      Prism.highlightAll();
      
      // Re-initiate JavaScript
      active_nav();
      active_subpage();
      examples();
      
    }
  }).data('smoothState');

}(jQuery));