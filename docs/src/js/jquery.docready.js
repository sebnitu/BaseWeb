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
     * Back to top
     */
    $('.button-totop').click(function (e) {
      $('html, body').animate({ scrollTop: 0 }, 250);
      $(this).blur();
      e.preventDefault();
    });

    var headerHeight = $('.header').outerHeight();

    console.log(headerHeight);

    if (headerHeight < $(document).scrollTop()) {
      $('.button-totop').addClass('fadeIn');
    } else {
      $('.button-totop').removeClass('fadeIn');
    }

    $(document).scroll(function () {
      if (headerHeight < $(this).scrollTop()) {
        $('.button-totop').addClass('fadeIn');
      } else {
        $('.button-totop').removeClass('fadeIn');
      }
    });

    /**
     * ACSII Folder Toggle
     */
    $('.list-ascii').each(function () {
      var dir = $(this).find('strong');

      dir.click(function () {
        $(this).parent('li').toggleClass('hide-children');
      });
    });

    /**
     * Table of Contents (toc)
     */
    $('#toc').each(function () {

      var toc = $(this);
      var items = $('.docs-item');
      var i = 0;

      // toc.hide();
      toc.append('<h3>Contents</h3>');
      toc.append('<ul></ul>');

      items.each(function() {
        i += 1;
        var hash = $(this).attr('id');
        var text = $(this).find('h3').text();
        toc.find('ul').append('<li><a href="#' + hash + '">' + text + '</a></li>');

        if (i == items.length) {
          // toc.slideDown();
        }
      });

    });

    /**
     * Expandable
     */
    $('.expandable-trigger').click(function(e) {

      var $trigger = $(this);
      var $expandable = $trigger.parents('.expandable');
      var $expandableContent = $expandable.find('.expandable-content');

      var $text_a = $trigger.text();
      var $text_b = $trigger.data('text-swap');

      $trigger.text($text_b).data('text-swap', $text_a);
      $expandable.toggleClass('active');

      e.preventDefault();
    });

    /**
     * Sticky Element
     */
    $('.sticky').theiaStickySidebar();

    /**
     * Navigation Toggle
     */
    $('.widget-menu .toggle').click(function() {
      $(this).parent().toggleClass('active');
      return false;
    });

    /**
     * New Tab Links
     */
    $('.onclick-newtab').click(function() {
      $(this).attr('target', '_blank');
      window.open($(this).attr('href'));
      return false;
    });

    /**
     * Swatches Background
     */
    $('.swatch').each(function() {
      var bg = $(this).css('backgroundColor');
      var text = getContrastYIQ(rgb2hex(bg));
      $(this).addClass(text);
    });

    /**
     * Switch off-canvas class
     */
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

    /**
     * Select on focus
     */
    $('.form-off-canvas-transitions input[readonly]').focus(function() {
      $(this).select();
    });

  });

}(jQuery));
