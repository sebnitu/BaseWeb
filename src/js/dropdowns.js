var dropdowns = (function () {

  'use strict';

  //
  // Variables
  //

  var u = utility;

  var api = {};
  var settings;
  var defaults = {
    classTrigger: 'dropdown-trigger',
    classDropdown: 'dropdown',
    classOnClick: 'on-click',
    classOnHover: 'on-hover',
    classActive: 'active',
  };

  var triggers = [];

  //
  // Private Methods
  //

  var runDropdownClick = function () {

    var trigger = event.target.closest('.' + settings.classTrigger + '.' + settings.classOnClick);
    var is_trigger_child = u.hasClass(event.target.parentElement, [settings.classTrigger, settings.classOnClick]);
    var is_active = false;

    // Save the state of the current trigger
    if ( trigger ) {
      is_active = u.hasClass(trigger, settings.classActive);
    }

    // Hide all dropdowns that are click activated
    api.hideAll();

    // Exit if a trigger doesn't exist
    if ( !trigger ) return;

    // Keep the parent dropdowns active
    api.showParents(event.target);

    // Add active class if item is not active
    if (!is_active) {
      u.addClass(trigger, settings.classActive);
    } else {
      // Remove active class if child of a trigger
      if (is_trigger_child) {
        u.removeClass(trigger, settings.classActive);
      }
    }

    // Prevent default link behavior if trigger is clicked
    if (is_trigger_child) {
      event.preventDefault();
    }

  };

  var runDropdownHover = function () {

    var trigger = event.target.closest('.' + settings.classTrigger + '.' + settings.classOnHover);

    // Check if trigger exists
    if ( !trigger ) return;

    // Is the dropdown already active?
    var is_active = u.hasClass(trigger, settings.classActive);

    console.log(is_active);

  };

  //
  // Public Methods
  //

  // Hide all dropdowns that are click activated
  api.hideAll = function () {

    triggers.forEach( function (el) {
      u.removeClass(el, settings.classActive);
    });

  };

  // Keep the parent dropdowns active
  api.showParents = function (el) {

    var parent = u.closest(el, settings.classTrigger);

    while (parent) {
      u.addClass(parent, settings.classActive);
      parent = u.closest(parent, settings.classTrigger);
    }

  };

  api.init = function (options) {

    // Destroy any previous initializations
    api.destroy();

    // Merge user options with the defaults
    settings = u.extend( defaults, options || {} );

    // Get triggers and dropdowns
    triggers = document.querySelectorAll('.' + settings.classTrigger + '.' + settings.classOnClick);

    // Add event listener to document
    document.addEventListener('click', runDropdownClick, false);
    document.addEventListener('mouseover', runDropdownHover, false);

  };

  api.destroy = function () {

    // Remove listeners
    document.removeEventListener('click', runDropdownClick, false);
    document.removeEventListener('mouseover', runDropdownHover, false);

    // Reset settings
    settings = null;
    triggers = [];

  };

  //
  // Return Public APIs
  //

  return api;

})();
