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
    selectorDropdown: '.dropdown-trigger.on-click .dropdown',
    classTrigger: 'dropdown-trigger',
    classDropdown: 'dropdown',
    classActive: 'active'
  };
  var triggers = [];
  var dropdowns = [];

  //
  // Private Methods
  //

  var runDropdowns = function () {

    // Only run if the clicked link was a on-click dropdown
    if ( !event.target.matches(settings.selectorTrigger)) return;

    // Prevent default link behavior
    event.preventDefault();

  };

  // Hide all dropdowns that are click activated
  var hideAll = function () {

    triggers.forEach( function (el) {
      u.removeClass(el, settings.classActive);
    });

  };

  // Keep the parent dropdowns active
  var showParents = function (el) {

    var parent = u.closest(el, settings.classTrigger);

    while (parent) {
      u.addClass(parent, settings.classActive);
      parent = u.closest(parent, settings.classTrigger);
    }

  };

  //
  // Public Methods
  //

  api.init = function ( options ) {

    // Destroy any previous initializations
    api.destroy();

    // Merge user options with the defaults
    settings = u.extend( defaults, options || {} );

    // Find triggers and dropdowns
    triggers = document.querySelectorAll(settings.selectorTrigger);
    dropdowns = document.querySelectorAll(settings.selectorDropdown);

    // Add event listener to document
    document.addEventListener('click', hideAll, false);

    // Add event listener to dropdown trigger
    triggers.forEach(function (el) {
      el.addEventListener('click', function (event) {

        // Is the dropdown already active?
        var is_active = u.hasClass(this, 'active');

        hideAll();

        showParents(this);

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

        hideAll();

        showParents(this);

        // Stop the click event from bubbling down to the document
        event.stopPropagation();

      }, false);
    });

  };

  api.destroy = function () {

    // Remove listeners
    // document.removeEventListener('click', runDropdowns, false);

    // Reset settings
    settings = null;

  };

  //
  // Return Public APIs
  //

  return api;

})();
