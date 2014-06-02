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
     * Masonry
     */
    var $container = $('#widgets-listing-container');
    // initialize
    $container.masonry({
      //gutter: 20,
      itemSelector: '.widget'
    });
        
  });

}(jQuery));