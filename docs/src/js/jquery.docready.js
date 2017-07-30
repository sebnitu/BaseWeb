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
     * @Docs Interface
     */

    // Sticky Element
    $('.sticky').theiaStickySidebar();

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
    $('.form-offcanvas-transitions select').change(function () {
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

    });

    // Select on focus
    $('.form-off-canvas-transitions input[readonly]').focus(function() {
      $(this).select();
    });

  });

}(jQuery));
