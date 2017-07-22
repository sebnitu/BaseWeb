// require utility.js

var dropdowns = (function () {

  'use strict';

  //
  // Variables
  //

  var t = transitions;
  var u = utility;

  var api = {};
  var settings;
  var defaults = {
    selectorTrigger: '.dropdown-trigger.on-click',
    selectorDropdown: '.dropdown-trigger.on-click .dropdown'
  };

  //
  // Private Methods
  //

  var runDropdowns = function() {

    console.log(u.closest(event.target, 'on-click'));

    // Only run if the clicked link was a dismissible item
    if ( !event.target.matches('.dropdown-trigger.on-click')) return;

    // Prevent default link behavior
    event.preventDefault();

    console.log('On click dropdown was clicked');

  };

  //
  // Public Methods
  //

  api.init = function ( options ) {

    // Destroy any previous initializations
    api.destroy();

    // Merge user options with the defaults
    settings = u.extend( defaults, options || {} );

    var triggers = document.querySelectorAll(settings.selectorTrigger);
    var dropdowns = document.querySelectorAll(settings.selectorDropdown);

    // Add event listener to document
    document.addEventListener('click', function() {

      console.log('Document Root');

      triggers.forEach( function (el) {
        u.removeClass(el, 'active');
      } );

    }, false);

    // Add event listener to dropdown trigger
    triggers.forEach(function (el) {
      el.addEventListener('click', function (event) {

        console.log(this);

        // Is the dropdown already active?
        var is_active = u.hasClass(this, 'active');

        // Hide all dropdowns that are click activated
        triggers.forEach( function (el) {
          u.removeClass(el, 'active');
        } );

        // Keep the parent dropdowns active
        var parent = u.closest(this, 'dropdown-trigger');
        while (parent) {
          u.addClass(parent, 'active');
          parent = u.closest(parent, 'dropdown-trigger');
        }

        // If the dropdown is not active, add the active class
        if (!is_active) {
          u.addClass(this, 'active');
        }

        // Stop the click event from bubbling down to the document
        event.stopPropagation();

      }, false);
    });

    // Add event listener to dropdown
    dropdowns.forEach(function (el) {
      el.addEventListener('click', function (event) {

        console.log(this);



        // Stop the click event from bubbling down to the document
        event.stopPropagation();

      }, false);
    });

  };

  api.destroy = function () {

    // Remove listener
    document.removeEventListener('click', runDropdowns, false);

    // Reset settings
    settings = null;

  };

  /*

  // Bind document click event
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

  */

  //
  // Return Public APIs
  //

  return api;

})();
