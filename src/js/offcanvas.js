var offcanvas = (function () {

  'use strict';

  //
  // Variables
  //

  var u = utility;

  var api = {};
  var settings;
  var defaults = {
    classTrigger : 'oc-trigger',
    classWrap : 'oc-wrap',
    classAside : 'oc-aside',
    classActive : 'oc-active',
    classDelay : 'oc-delay',
    timer : 500,
  };

  var triggers = [];

  //
  // Private Methods
  //

  var closeOffcanvas = function () {

    var wrap = u.closest(event.target, settings.classWrap);

    // Remove active class
    u.removeClass(wrap, settings.classActive);

    // Remove delay class after the set transition duration
    setTimeout( function () {
      u.removeClass(wrap, settings.classDelay);
    }, settings.timer );

  };

  var getAside = function (wrap) {

    var aside;

    u.forEach(wrap.children, function(i, el) {
      if (u.hasClass(el, settings.classAside)) {
        aside = el;
      }
    });

    return aside;

  };

  var stopProp = function () {
    event.stopPropagation();
  };

  var runOffcanvas = function () {

    var el = event.target;

    var local = {
      target : el.dataset.target,
      wrap : u.closest(el, settings.classWrap),
      aside : getAside(u.closest(el, settings.classWrap)),
      reset : settings.classWrap,
      is_active : false,
    };

    // Check if is active
    local.is_active = u.hasClass(local.wrap, settings.classActive);

    // Check if it's a close button or if off-canvas is already active
    if(!local.target || local.is_active) {
      // Close off-canvas content
      closeOffcanvas(local.wrap);
    } else {
      // Reset container class
      local.wrap.setAttribute('class', local.reset);
    }

    // Add target class
    if(local.target && !local.is_active) {
      u.addClass(local.wrap, local.target);
      // Add active and delay classes after a slight delay
      setTimeout( function() {
        u.addClass(local.wrap, [settings.classActive, settings.classDelay])
      }, 25 );
    }

    // Prevent default link behavior
    event.preventDefault();

    // Stop the click event from bubbling down to the document
    event.stopPropagation();

  };

  //
  // Public Methods
  //

  api.init = function (options) {

    // Destroy any previous initializations
    api.destroy();

    // Merge user options with the defaults
    settings = u.extend( defaults, options || {} );

    // Get trigger
    triggers = document.querySelectorAll('.' + settings.classTrigger);

    // Loop through triggers
    triggers.forEach(function (el) {

      // Local variable
      var wrap = u.closest(el, settings.classWrap);
      var aside = getAside(u.closest(el, settings.classWrap));

      // Add event listener to trigger
      el.addEventListener('click', runOffcanvas, false);

      // Add event listener to wrap
      wrap.addEventListener('click', closeOffcanvas, false);

      // Add event listener to aside
      aside.addEventListener('click', stopProp, false);

    }); // End forEach triggers

  };

  api.destroy = function () {

    // Remove listener
    // Loop through triggers
    triggers.forEach(function (el) {

      // Local variable
      var wrap = u.closest(el, settings.classWrap);
      var aside = getAside(u.closest(el, settings.classWrap));

      // Add event listener to trigger
      el.removeEventListener('click', runOffcanvas, false);

      // Add event listener to wrap
      wrap.removeEventListener('click', closeOffcanvas, false);

      // Add event listener to aside
      aside.removeEventListener('click', stopProp, false);

    }); // End forEach triggers

    // Reset settings and triggers
    settings = null;
    triggers = [];

  };

  //
  // Return Public APIs
  //

  return api;

})();
