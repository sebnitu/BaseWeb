import utility from './utility'

export default function() {

  var u = utility
  var api = {}
  var settings
  var defaults = {
    classTrigger : 'dismiss',
    classDismissible : 'dismissible',
    classHide : 'hide',
  }

  //
  // Private Methods
  //

  var runDismissible = function () {

    // Get the trigger
    var trigger = event.target.closest('.' + settings.classTrigger)

    // Exit if a trigger doesn't exist
    if ( !trigger ) return

    // Get the dismissible parent element
    var dismissible = event.target.closest('.' + settings.classDismissible)

    // Exit if a dismissible doesn't exist
    if ( !dismissible ) return

    // Add initial classes
    if (dismissible) {
      u.addClass(dismissible, settings.classHide)
    } else {
      console.log('Dismissible element was not found!')
    }

    // Prevent default behavior
    event.preventDefault()

  }

  //
  // Public Methods
  //

  api.init = function (options) {

    // Destroy any previous initializations
    api.destroy()

    // Merge user options with the defaults
    settings = u.extend( defaults, options || {} )

    // Add event listener
    document.addEventListener('click', runDismissible, false)

  }

  api.destroy = function () {

    // Remove event listener
    document.removeEventListener('click', runDismissible, false)

    // Reset settings
    settings = null

  }

  api.showAll = function (selector) {

    // Get dismissible items
    var dismissible = api.getDismissible(selector)

    // Loop through and remove active class from dismissible items
    dismissible.forEach(function (el) {
      u.removeClass(el, settings.classHide)
    })

  }

  api.hideAll = function (selector) {

    // Get dismissible items
    var dismissible = api.getDismissible(selector)

    // Loop through and remove active class from dismissible items
    dismissible.forEach(function (el) {
      u.addClass(el, settings.classHide)
    })

  }

  api.getDismissible = function (selector) {

    // Initialize dismissible array
    var dismissible = []

    // Check if a selector was passed
    if (selector) {
      // Get selector items
      var items = document.querySelectorAll(selector)
      // Loop through selector items
      items.forEach(function (el) {
        // Get dismissible items
        var items = el.querySelectorAll('.' + settings.classDismissible)
        // Loop through dismissible items
        items.forEach(function (el) {
          // Save item to our array
          dismissible.push(el)
        })
      })
    } else {
      // Search dismissible items on documents
      dismissible = document.querySelectorAll('.' + settings.classDismissible)
    }

    // Return dismissible
    return dismissible

  }

  //
  // Return Public APIs
  //

  return api

})()
