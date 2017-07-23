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

    // Only run if the clicked link was a on-click dropdown
    if ( !event.target.matches('.dropdown-trigger.on-click')) return;

    // Prevent default link behavior
    event.preventDefault();

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

      // Hide all dropdowns that are click activated
      triggers.forEach( function (el) {
        u.removeClass(el, 'active');
      } );

    }, false);

    // Add event listener to dropdown trigger
    triggers.forEach(function (el) {
      el.addEventListener('click', function (event) {

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

  //
  // Return Public APIs
  //

  return api;

})();
