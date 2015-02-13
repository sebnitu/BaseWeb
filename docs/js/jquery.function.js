/**
 * jquery.function.js
 * A place to store all your project specific JavaScript functions
 * 
 * @author Sebastian Nitu
 * @url https://github.com/sebnitu/BaseWeb
 * @url http://sebnitu.com
 */

;(function ($) {
  'use strict';
  
  /**
   * Smooth Page Transitions
   */
  var $body = $('html, body');
  var $content = $('#main').smoothState({
    // prefetch: true,
    // pageCacheSize: 4,
    onStart: {
      duration: 250, // Duration of our animation
      render: function (url, $container) {
        $content.toggleAnimationClass('is-exiting');
        $body.animate({
          scrollTop: 0
        });
      }
    },
    callback: function() {
      activenav();
      subpages();
      ishome();
    }
  }).data('smoothState');
  
  current_subpage();
  activenav();
  subpages();
  ishome();
  
}(jQuery));

/**
 * Current Subpage
 */
function current_subpage() {
  var hash = window.location.hash;
  console.log(hash);
  $('.subnav a[href*="' + hash + '"]').closest('li').addClass('active');
  $(hash).fadeIn(250);
}

/**
 * Active Navigation Function
 */
function activenav() {
  var path = window.location.pathname;
  path = path.replace(/\/$/, "");
  path = decodeURIComponent(path);

  $('.mainnav a').each(function () {
    var href = $(this).attr('href');
    if (path.substring(0, href.length) === href) {
      $(this).closest('li').addClass('active');
    }
  }).click(function() {
    $('.mainnav li').removeClass('active');
    $(this).closest('li').addClass('active');
  });
}

/**
 * Subpage Function
 */
function subpages(event) {
  $('.subnav a').click(function() {
    
    $('.subnav li').removeClass('active');
    $(this).closest('li').addClass('active');
    
    var subpage = $(this).attr('href');
    
    if( $('.subpage').is(':visible') ) {
      $('.subpage').fadeOut(250);
      $(subpage).delay(250).fadeIn(250);
    } else {
      $(subpage).fadeIn(250);
    }
    
    var el = $(subpage);
    var id = el.attr('id');
    
    console.log(id);
    
    el.removeAttr('id');
    location.hash = subpage;
    el.attr('id',id);
    
    $('html, body').animate({
      scrollTop: 0
    }, 250);
    
    return false;
  });
}

/**
 * Is Home
 */
function ishome() {
    
  var loc = window.location.pathname;
  
  if(loc === '/' || loc === '/index.html') {
    $('body').addClass('is_home');
  } else {
    $('body').removeClass('is_home');
  }
  
  $('.page-home .mainnav a').click(function() {
    $('body').removeClass('is_home');
  });
  
}
