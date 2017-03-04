// require jquery.sticky.js jquery.function.js
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

    /**
     * @Notices
     */
    $('.dismissible > .close').on('click', function() {
      $(this).closest('.dismissible').fadeOut();
    });

    /**
     * @Dropdowns
     */
    // Add click event bind to document
    $(document).click(function(){
      // Hide all dropdowns that are click activated
      $('.dropdown-trigger.on-click').removeClass('active');
    });

    // Bind the click event to .dropdown-trigger
    $('.dropdown-trigger.on-click').click(function(e) {

      // Is the dropdown already active?
      var is_active = $(this).hasClass('active');

      // Hide all dropdowns that are click activated
      $('.dropdown-trigger.on-click').removeClass('active');

      // Keep the parent dropdowns active
      $(this).parents('.dropdown-trigger').addClass('active');

      // If the dropdown is not active, add the active class
      if (!is_active) {
        $(this).addClass('active');
      }

      // Stop the click event from bubbling down to the document
      e.stopPropagation();
    });

    // Bind the click event to .dropdown
    $('.dropdown-trigger.on-click .dropdown').click(function(e) {

      // Hide all dropdowns that are click activated
      $('.dropdown-trigger.on-click').removeClass('active');

      // Keep the parent dropdowns active
      $(this).parents('.dropdown-trigger').addClass('active');

      // Keep the current dropdown active
      $(this).addClass('active');

      // Stop the click event from bubbling down to the document
      e.stopPropagation();
    });

    /**
     * @Tabs
     */
    $('.tabs-nav').each(function() {

      // Save this
      var $this = $(this);

      // Save our tabs content
      var tabs_content = $this.parents('.tabs').find('.tabs-content');
      var has_content = tabs_content.length;

      // Check our other tabs content method if one wasn't found yet
      if (!has_content) {
        // Check if we have a linked content data attribute
        tabs_content = $this.attr('data-content');
        if (tabs_content) {
          // Save our tabs content
          tabs_content = $('#' + tabs_content);
          // Set has_content to true
          if (tabs_content.length) {
            has_content = 1;
          }
        } else {
          console.log('Tabs content does not exist!');
        }
      }

      // Add click event to tab links
      $this.find('a').click(function() {
        // Check if item is already active or not
        var is_active = $(this).parents('li').hasClass('active');

        if (!is_active) {
          // Remove active class from all children nav items
          $this.find('li').removeClass('active');
          // Add active class to currently selected item
          $(this).parents('li').addClass('active');

          // Check if tabs-nav has an associated content block
          if (has_content) {
            // Hide current active content
            tabs_content.find('.tabs-panel').removeClass('active');
            // Show new active content
            var target = $(this).attr('href');
            $(target).addClass('active');
          } else {
            console.log('Tabs content does not exist!');
          }
        }

        // Stop the default behavior
        return false;
      });

    });

    /**
     * @Off Canvas
     */
    function off_canvas() {
      $('.oc-trigger').each(function () {
        var
          $this = $(this),
          $wrap = $this.closest('.oc-wrap'),
          $aside = $wrap.find('.oc-aside'),
          target = $this.attr('data-target'),
          reset = 'oc-wrap',
          is_active = false,
          close = function() {
            // Remove active class
            $wrap.removeClass('oc-active');
            // Remove delay class after the set transition duration
            setTimeout( function() {
              $wrap.removeClass('oc-delay');
            }, 500 );
          }
        ;

        // Button click event
        $this.click(function(e) {
          is_active = $wrap.hasClass('oc-active');

          // Check if it's a close button or if off-canvas is already active
          if(!target || is_active) {
            // Close off-canvas content
            close();
          } else {
            // Reset container class
            $wrap.attr('class', reset);
          }
          // Add target class
          if(target && !is_active) {
            $wrap.addClass(target);
            // Add active and delay classes after a slight delay
    				setTimeout( function() {
              $wrap.addClass('oc-active oc-delay');
    				}, 25 );
          }

          // Stop the default behavior
          return false;
        });

        // Aside click event
        $aside.click(function(e) {
          // Stop the click propogation from bubbling down to the container
          e.stopPropagation();
        });

        // Container click event
        $wrap.click(function(e) {
          // Close off-canvas content
          close();
        });

      });
    }

    off_canvas();

    /**
     * @Docs Interface
     */

    // Sticky Element
    $('.sticky').theiaStickySidebar({
      containerSelector : '.row',
      additionalMarginTop : 0
    });

    // Navigation Toggle
    $('.widget-menu .toggle').click(function() {
      $(this).parent().toggleClass('active');
      return false;
    });

    // New Tab Links
    $('.onclick-newtab').click(function() {
      $(this).attr('target', '_blank');
      window.open($(this).attr('href'));
      return false;
    });

    // Swatches Background
    $('.swatch').each(function() {
      var bg = $(this).css('backgroundColor');
      var text = getContrastYIQ(rgb2hex(bg));
      $(this).addClass(text);
    });

    // Switch off-canvas class
    $('.form-off-canvas-transitions select').change(function () {
      var
        $this = $(this),
        oc_effect = $('#oc-effect').val(),
        oc_position = $('#oc-position').val(),
        oc_class = oc_effect + '-' + oc_position,
        $oc_transition_value = $('#oc-transition-value'),
        $oc_trigger = $('#oc-trigger-sample'),
        $oc_aside = $this.closest('.oc-wrap').find('.oc-aside')
      ;

      $oc_transition_value.val(oc_class);
      $oc_trigger.attr('data-target', oc_class);
      $oc_aside.attr('class', 'oc-aside ' + oc_class);

      off_canvas();
    });

    // Select on focus
    $('.form-off-canvas-transitions input[readonly]').focus(function() {
      $(this).select();
    });

  });

  /**
   * When the images are loaded
   */
  $(window).on('load', function() { });

}(jQuery));
