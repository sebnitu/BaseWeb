var utility = (function () {

  'use strict';

  //
  // Variables
  //

  var api = {};
  var settings;
  var defaults = {};

  //
  // Public Methods
  //

  /**
   * Checks if an element has a class or not
   * @param {Element} Element to check class on
   * @param {String} Class string to check for
   * @returns {Boolean} Returns true if class exists on element, otherwise false
   */
  api.hasClass = function ( el, c ) {

    c = api.toArray(c);

    return c.every( function ( c ) {
      return el.classList.contains(c);
    });

  }; // End hasClass

  /**
   * Adds a class to an element
   * @param {Element} Element to add class(es) on
   * @param {String} || {Array} Class(es) to add
   */
  api.addClass = function ( el, c ) {

    c = api.toArray(c);

    c.forEach( function ( c ) {
      el.classList.add( c );
    });

  }; // End addClass

  /**
   * Remove a class from an element
   * @param {Element} Element to remove class(es) from
   * @param {String} || {Array} Class(es) to remove
   */
  api.removeClass = function ( el, c ) {

    c = api.toArray(c);

    c.forEach( function ( c ) {
      el.classList.remove( c );
    });

  }; // End removeClass

  /**
   * Toggle a class on an element
   * @param {Element} Element to toggle class(es) on
   * @param {String} || {Array} Class(es) to toggle
   */
  api.toggleClass = function ( el, c ) {

    c = api.toArray(c);

    c.forEach( function ( c ) {
      el.classList.toggle(c);
    });

  }; // End toggleClass

  /**
   * Find the closest parent element based on class. This is different from the
   * native .closest() method in that it doesn't check the current element.
   * @param {Element} Element to start search on
   * @param {String} Class string to toggle
   * @return {Element} Closest parent element
   */
  api.closest = function ( el, c ) {
    while ((el = el.parentElement) && !api.hasClass(el, c));
    return el;
  }; // End closest

  /**
   * Converts a string to an array
   * @param {String} || {Array} A string to convert to an array
   * @return {Array} Return the converted array
   */
  api.toArray = function( c ) {

    var array = [];

    if (typeof c === 'string') {
      array.push(c);
    } else if (Array.isArray(c)) {
      array = c;
    } else {
      return false;
    }

    return array;

  }; // End toArray

  /**
   * Creates a forEach loop for NodeList
   * @param {NodeList} Node list to loop through
   * @param {Function} The function to run within the loop
   * @param {Scope} I'm not quite sure what this does
   * @return {Integer} {Value} Passed to the callback function
   */
  api.forEach = function (array, callback, scope) {
    for (var i = 0; i < array.length; ++i) {
      callback.call(scope, i, array[i]); // passes back stuff we need
    }
  };

  /**
   * Merge two or more objects. Returns a new object.
   * Set the first argument to `true` for a deep or recursive merge
   * @param {Boolean} deep If true, do a deep (or recursive) merge [optional]
   * @param {Object} objects The objects to merge together
   * @returns {Object} Merged values of defaults and options
   */
  api.extend = function () {

    // Variables
    var extended = {};
    var deep = false;
    var i = 0;
    var length = arguments.length;

    // Check if a deep merge
    if ( Object.prototype.toString.call( arguments[0] ) === '[object Boolean]' ) {
      deep = arguments[0];
      i++;
    }

    // Merge the object into the extended object
    var merge = function ( obj ) {
      for ( var prop in obj ) {
        if ( Object.prototype.hasOwnProperty.call( obj, prop ) ) {
          // If deep merge and property is an object, merge properties
          if ( deep && Object.prototype.toString.call(obj[prop]) === '[object Object]' ) {
            extended[prop] = extend( true, extended[prop], obj[prop] );
          } else {
            extended[prop] = obj[prop];
          }
        }
      }
    };

    // Loop through each object and conduct a merge
    for ( ; i < length; i++ ) {
      var obj = arguments[i];
      merge(obj);
    }

    return extended;

  }; // End extend

  //
  // Return Public APIs
  //

  return api;

})();

var dismissible = (function () {

  'use strict';

  //
  // Variables
  //

  var u = utility;

  var api = {};
  var settings;
  var defaults = {
    classTrigger : 'close',
    classDismissible : 'dismissible',
    classHide : 'hide',
  };

  //
  // Private Methods
  //

  var runDismissible = function () {

    // Get the trigger parent element
    var trigger = event.target.closest('.' + settings.classTrigger);

    // Exit if a trigger doesn't exist
    if ( !trigger ) return;

    // Get the dismissible parent element
    var dismissible = event.target.closest('.' + settings.classDismissible);

    // Exit if a dismissible doesn't exist
    if ( !dismissible ) return;

    // Add initial classes
    if (dismissible) {
      u.addClass(dismissible, settings.classHide);
    } else {
      console.log('Dismissible element was not found!');
    }

    // Prevent default link behavior
    event.preventDefault();

  };

  //
  // Public Methods
  //

  api.getDismissible = function (selector) {

    // Initialize dismissible array
    var dismissible = [];

    // Check if a selector was passed
    if (selector) {
      // Get selector items
      var items = document.querySelectorAll(selector);
      // Loop through selector items
      items.forEach(function (el) {
        // Get dismissible items
        var items = el.querySelectorAll('.' + settings.classDismissible);
        // Loop through dismissible items
        items.forEach(function (el) {
          // Save item to our array
          dismissible.push(el);
        });
      });
    } else {
      // Search dismissible items on documents
      dismissible = document.querySelectorAll('.' + settings.classDismissible);
    }

    // Return dismissible
    return dismissible;

  };

  api.hideAll = function (selector) {

    // Get dismissible items
    var dismissible = api.getDismissible(selector);

    // Loop through and remove active class from dismissible items
    dismissible.forEach(function (el) {
      u.addClass(el, settings.classHide);
    });

  };

  api.showAll = function (selector) {

    // Get dismissible items
    var dismissible = api.getDismissible(selector);

    // Loop through and remove active class from dismissible items
    dismissible.forEach(function (el) {
      u.removeClass(el, settings.classHide);
    });

  };

  api.init = function (options) {

    // Destroy any previous initializations
    api.destroy();

    // Merge user options with the defaults
    settings = u.extend( defaults, options || {} );

    // Add event listener
    document.addEventListener('click', runDismissible, false);

  };

  api.destroy = function () {

    // Remove event listener
    document.removeEventListener('click', runDismissible, false);

    // Reset settings
    settings = null;

  };

  //
  // Return Public APIs
  //

  return api;

})();

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
    delay: 500,
  };

  var triggers = [];
  var triggersHover = [];
  var timeoutID;

  //
  // Private Methods
  //

  var runDropdownClick = function () {

    // Get the trigger
    var trigger = event.target.closest('.' + settings.classTrigger + '.' + settings.classOnClick);

    // Check if parent element is a trigger
    var is_trigger_child = u.hasClass(event.target.parentElement, [settings.classTrigger, settings.classOnClick]);

    // Initiate is active
    var is_active;

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

    var parent = u.closest(el, [settings.classTrigger, settings.classOnClick]);

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
    triggers = document.querySelectorAll('.' + settings.classTrigger);
    triggersHover = document.querySelectorAll('.' + settings.classTrigger + '.' + settings.classOnHover);

    // Add event listener to document
    document.addEventListener('click', runDropdownClick, false);

    // Loop through our hover triggers
    triggersHover.forEach(function (el) {
      // Init timer var
      var timer;

      // Add on mouse over event listener to trigger
      el.addEventListener('mouseover', function () {
        // Get the trigger
        var trigger = event.target.closest('.' + settings.classTrigger + '.' + settings.classOnHover);
        // Clear our set timeout if set
        clearTimeout(timer);
        // Add the active class
        u.addClass(trigger, settings.classActive);
      }, false);

      // Add on mouse leave event listener to trigger
      el.addEventListener('mouseleave', function () {
        var trigger = event.target.closest('.' + settings.classTrigger + '.' + settings.classOnHover);
        // Set a delay before we remove active class
        timer = setTimeout(function () {
          // Remove the active class
          u.removeClass(trigger, settings.classActive);
        }, settings.delay);
      }, false);

    }); // End of hover triggers loop

  };

  api.destroy = function () {

    // Remove listeners
    document.removeEventListener('click', runDropdownClick, false);

    // Reset settings
    settings = null;
    triggers = [];
    triggersHover = [];

  };

  //
  // Return Public APIs
  //

  return api;

})();

var tabs = (function () {

  'use strict';

  //
  // Variables
  //

  var u = utility;

  var api = {};
  var settings;
  var defaults = {
    classWrap : 'tabs',
    classNav : 'tabs-nav',
    classContent : 'tabs-content',
    classActive : 'active',
  };

  var triggers = [];

  //
  // Private Methods
  //

  var getTabsContent = function (wrap, nav) {

    var content;

    if (wrap) {
      u.forEach(wrap.children, function(i, el) {
        if (u.hasClass(el, settings.classContent)) {
          content = el;
        }
      });
    } else {
      var id = nav.dataset.content;
      if (id) {
        content = document.querySelector('#' + id);
      } else {
        console.log('Tabs content was not found!');
      }
    }

    return content;

  };

  var removeActive = function (nav, content) {

    var activeNav = Array.prototype.slice.call(nav.querySelectorAll('.' + settings.classActive));
    var activeContent = Array.prototype.slice.call(content.querySelectorAll('.' + settings.classActive));
    var activeAll = activeNav.concat(activeContent);

    activeAll.forEach(function (el) {
      u.removeClass(el, settings.classActive);
    });

  };

  var runTabs = function () {

    // Is the clicked item already active?
    var is_active = u.hasClass(event.target.parentElement, settings.classActive);

    // If it's not active
    if (!is_active) {

      // Tabs wrapper
      var tabs = event.target.closest('.' + settings.classWrap);

      // Tabs nav wrapper
      var tabsNav = event.target.closest('.' + settings.classNav);

      // Tabs content
      var tabsContent = getTabsContent(tabs, tabsNav);

      // Get target
      var target = event.target.getAttribute('href');

      // Remove all active classes
      removeActive(tabsNav, tabsContent);

      // Set tab nav and content item to active
      u.addClass(event.target.parentElement, settings.classActive);
      u.addClass(tabsContent.querySelector(target), settings.classActive);

    } // End if is_active

    // Prevent default link behavior
    event.preventDefault();

  };

  //
  // Public Methods
  //

  api.init = function (options) {

    // Destroy any previous initializations
    api.destroy();

    // Merge user options with the defaults
    settings = u.extend( defaults, options || {} );

    // Get triggers
    triggers = document.querySelectorAll('.' + settings.classNav + ' a');

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
    triggers = [];

  };

  //
  // Return Public APIs
  //

  return api;

})();

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

    var wrap = event.target.closest('.' + settings.classWrap);

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
      wrap : el.closest('.' + settings.classWrap),
      aside : getAside(el.closest('.' + settings.classWrap)),
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
      var wrap = el.closest('.' + settings.classWrap);
      var aside = getAside(el.closest('.' + settings.classWrap));

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
      var wrap = el.closest('.' + settings.classWrap);
      var aside = getAside(el.closest('.' + settings.classWrap));

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

/*
require
  utility.js
  dismissible.js
  dropdowns.js
  tabs.js
  offcanvas.js
*/

// Default initializations
;(function (window, document, undefined) {

  'use strict';

  dismissible.init();
  dropdowns.init();
  tabs.init();
  offcanvas.init();

})(window, document);
