var dropdowns = (function () {

  'use strict';

  //
  // Variables
  //

  var u = utility;

  var api = {};
  var settings;
  var defaults = {
    selectorTrigger: '.dropdown-trigger.on-click',
    classTrigger: 'dropdown-trigger',
    classDropdown: 'dropdown',
    classOnClick: 'on-click',
    classOnHover: 'on-hover',
    classActive: 'active',
  };

  var triggers = [];
  var dropdowns = [];

  //
  // Private Methods
  //

  var runDropdownTriggers = function () {

    var trigger = event.target.closest('.' + settings.classTrigger);

    // Is the dropdown already active?
    var is_active = u.hasClass(trigger, settings.classActive);

    // Hide all dropdowns that are click activated
    api.hideAll();

    // Keep the parent dropdowns active
    api.showParents(trigger);

    // If the dropdown is not active, add the active class
    if (!is_active) {
      u.addClass(trigger, settings.classActive);
    }

    // Prevent default link behavior
    event.preventDefault();

    // Stop the click event from bubbling down to the document
    event.stopPropagation();

  };

  var runDropdowns = function () {

    // Hide all dropdowns that are click activated
    api.hideAll();

    // Keep the parent dropdowns active
    api.showParents(event.target);

    // Prevent default link behavior
    event.preventDefault();

    // Stop the click event from bubbling down to the document
    event.stopPropagation();

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
    triggers = document.querySelectorAll(settings.selectorTrigger);
    dropdowns = document.querySelectorAll(settings.selectorTrigger + ' .' + settings.classDropdown);

    // Add event listener to document
    document.addEventListener('click', api.hideAll, false);

    // Add event listener to dropdown trigger
    triggers.forEach(function (el) {
      el.addEventListener('click', runDropdownTriggers, false);
    });

    // Add event listener to dropdown
    dropdowns.forEach(function (el) {
      el.addEventListener('click', runDropdowns, false);
    });

  };

  api.destroy = function () {

    // Remove listeners
    document.removeEventListener('click', api.hideAll, false);

    triggers.forEach(function (el) {
      el.removeEventListener('click', runDropdownTriggers, false);
    });

    dropdowns.forEach(function (el) {
      el.removeEventListener('click', runDropdowns, false);
    });

    // Reset settings
    settings = null;
    triggers = [];
    dropdowns = [];

  };

  //
  // Return Public APIs
  //

  return api;

})();
