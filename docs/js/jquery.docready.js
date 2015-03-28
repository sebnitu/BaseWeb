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
      blacklist: '.logo, .no-smoothstate',
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
        
        // Call prism.js for syntax highlighting
        Prism.highlightAll();
        
        // Show active nav and subpage
        active_nav($('#nav'));
        active_subpage($('.subpage'));
        
      }
    }).data('smoothState');
    
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
    
  });
  
  /**
   * When the images are loaded
   */
  $(window).load(function () {
  

  
  });

}(jQuery));