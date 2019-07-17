import u from './utility.js'

export default function(options) {

  var api = {}
  var settings
  var defaults = {
    classTrigger : 'dismiss',
    classDismissible : 'dismissible',
    classHide : 'hide',
  }

  var runDismissible = function () {
    var trigger = event.target.closest('.' + settings.classTrigger)
    if ( !trigger ) return
    var dismissible = event.target.closest('.' + settings.classDismissible)
    if ( !dismissible ) return
    if (dismissible) {
      u.addClass(dismissible, settings.classHide)
    } else {
      console.log('Dismissible element was not found!')
    }
    event.preventDefault()
  }

  api.init = function (options) {
    api.destroy()
    settings = u.extend( defaults, options || {} )
    document.addEventListener('click', runDismissible, false)
  }

  api.destroy = function () {
    document.removeEventListener('click', runDismissible, false)
    settings = null
  }

  api.showAll = function (selector) {
    var dismissible = api.getDismissible(selector)
    dismissible.forEach(function (el) {
      u.removeClass(el, settings.classHide)
    })

  }

  api.hideAll = function (selector) {
    var dismissible = api.getDismissible(selector)
    dismissible.forEach(function (el) {
      u.addClass(el, settings.classHide)
    })
  }

  api.getDismissible = function (selector) {
    var dismissible = []
    if (selector) {
      var items = document.querySelectorAll(selector)
      items.forEach(function (el) {
        var items = el.querySelectorAll('.' + settings.classDismissible)
        items.forEach(function (el) {
          dismissible.push(el)
        })
      })
    } else {
      dismissible = document.querySelectorAll('.' + settings.classDismissible)
    }
    return dismissible
  }

  api.init(options)
  return api
}
