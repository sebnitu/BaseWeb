import u from './utility.js'

export default function(options) {

  var api = {}
  var settings
  var defaults = {
    classTrigger : 'tabs-nav',
    classWrap : 'tabs',
    classContent : 'tabs-content',
    classActive : 'active',
  }

  var getContent = function (wrap, nav) {
    var content
    if (wrap) {
      content = wrap.querySelector('.' + settings.classContent)
    } else {
      var id = nav.dataset.content
      if (id) {
        content = document.querySelector('#' + id)
      } else {
        content = null
      }
    }
    return content
  }

  var runTabs = function () {
    var trigger = event.target.closest('.' + settings.classTrigger)
    if ( !trigger ) return
    var is_active = u.hasClass(event.target.parentElement, settings.classActive)
    if (!is_active) {
      var wrap = event.target.closest('.' + settings.classWrap)
      var content = getContent(wrap, trigger)
      var target = event.target.getAttribute('href')
      u.removeClass(trigger.querySelector('.' + settings.classActive), settings.classActive)
      u.removeClass(content.querySelector('.' + settings.classActive), settings.classActive)
      u.addClass(event.target.parentElement, settings.classActive)
      u.addClass(content.querySelector(target), settings.classActive)
    }
    event.preventDefault()
  }

  api.init = function (options) {
    api.destroy()
    settings = u.extend( defaults, options || {} )
    document.addEventListener('click', runTabs, false)
  }

  api.destroy = function () {
    document.removeEventListener('click', runTabs, false)
    settings = null
  }

  api.init(options)
  return api
}
