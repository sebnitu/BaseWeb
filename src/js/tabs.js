var tabs = (function () {

  'use strict';

  //
  // Variables
  //

  var u = utility;

  var api = {};
  var settings;
  var defaults = {
    classActive: 'active'
  };

  var triggers = [];

  //
  // Private Methods
  //

  var runTabs = function () {

    // Is the clicked item already active?
    var is_active = u.hasClass(event.target.parentElement, settings.classActive);

    // If it's not active
    if (!is_active) {

      // Tabs wrapper
      var tabs = u.closest(event.target, 'tabs');

      // Tabs nav wrapper
      var tabsNav = u.closest(event.target, 'tabs-nav');

      // Tabs content
      var tabsContent;
      if (tabs) {
        u.forEach(tabs.children, function(i, el) {
          if (u.hasClass(el, 'tabs-content')) {
            tabsContent = el;
            return;
          }
        });
      } else {
        var contentID = tabsNav.dataset.content;
        if (contentID) {
          tabsContent = document.querySelector('#' + contentID);
        } else {
          console.log('Tabs content does not exist!');
        }
      }

      // Get target
      var target = event.target.getAttribute('href');

      // Remove all active classes
      var activeNav = Array.prototype.slice.call(tabsNav.querySelectorAll('.' + settings.classActive));
      var activeContent = Array.prototype.slice.call(tabsContent.querySelectorAll('.' + settings.classActive));
      var activeAll = activeNav.concat(activeContent);

      activeAll.forEach(function (el) {
        u.removeClass(el, settings.classActive);
      });

      // Set tab nav item to active
      u.addClass(event.target.parentElement, settings.classActive);

      // Set tab content to active
      u.addClass(document.querySelector(target), settings.classActive);

    } // End if is_active

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

    // Find triggers
    triggers = document.querySelectorAll('.tabs-nav a');

    // Add event listener
    triggers.forEach(function (el) {
      el.addEventListener('click', runTabs, false);
    });

  };

  api.destroy = function () {

    // Remove listener
    triggers.forEach(function (el) {
      el.removeEventListener('click', runTabs, false);
    });

    // Reset settings
    settings = null;
    triggers = null;

  };

  //
  // Return Public APIs
  //

  return api;

})();
