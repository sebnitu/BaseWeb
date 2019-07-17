import u from './utility.js'

export default function(options) {

  var api = {}
  var settings
  var defaults = {
    classTrigger: 'dropdown-trigger',
    classDropdown: 'dropdown',
    classOnClick: 'on-click',
    classOnHover: 'on-hover',
    classActive: 'active',
    delay: 500,
  }
  var triggers = []
  var triggersHover = []

  var runDropdownClick = function () {
    var trigger = event.target.closest('.' + settings.classTrigger + '.' + settings.classOnClick)
    var is_trigger_child = u.hasClass(event.target.parentElement, [settings.classTrigger, settings.classOnClick])
    var is_active
    if ( trigger ) {
      is_active = u.hasClass(trigger, settings.classActive)
    }
    hideAll()
    if ( !trigger ) return
    showParents(event.target)
    if (!is_active) {
      u.addClass(trigger, settings.classActive)
    } else {
      if (is_trigger_child) {
        u.removeClass(trigger, settings.classActive)
      }
    }
    if (is_trigger_child) {
      event.preventDefault()
    }
  }

  var hideAll = function () {
    triggers.forEach( function (el) {
      u.removeClass(el, settings.classActive)
    })
  }

  var showParents = function (el) {
    var parent = u.closest(el, [settings.classTrigger, settings.classOnClick])
    while (parent) {
      u.addClass(parent, settings.classActive)
      parent = u.closest(parent, settings.classTrigger)
    }
  }

  api.init = function (options) {
    api.destroy()
    settings = u.extend( defaults, options || {} )
    triggers = document.querySelectorAll('.' + settings.classTrigger)
    triggersHover = document.querySelectorAll('.' + settings.classTrigger + '.' + settings.classOnHover)
    document.addEventListener('click', runDropdownClick, false)
    triggersHover.forEach(function (el) {
      var timer
      el.addEventListener('mouseover', function () {
        var trigger = event.target.closest('.' + settings.classTrigger + '.' + settings.classOnHover)
        clearTimeout(timer)
        u.addClass(trigger, settings.classActive)
      }, false)
      el.addEventListener('mouseleave', function () {
        var trigger = event.target.closest('.' + settings.classTrigger + '.' + settings.classOnHover)
        timer = setTimeout(function () {
          u.removeClass(trigger, settings.classActive)
        }, settings.delay)
      }, false)
    })
  }

  api.destroy = function () {
    document.removeEventListener('click', runDropdownClick, false)
    settings = null
    triggers = []
    triggersHover = []
  }

  api.init(options)
  return api
}
