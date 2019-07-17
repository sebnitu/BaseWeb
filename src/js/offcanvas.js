import u from './utility.js'

export default function(options) {

  var api = {}
  var settings
  var defaults = {
    classTrigger : 'oc-trigger',
    classWrap : 'oc-wrap',
    classAside : 'oc-aside',
    classActive : 'oc-active',
    classDelay : 'oc-delay',
    timer : 500,
  }

  var openOffCanvas = function() {
    var trigger = event.target.closest('.' + settings.classTrigger)
    var target = trigger.dataset.target
    if (target) {
      var wrap = event.target.closest('.' + settings.classWrap)
      if (wrap) {
        wrap.setAttribute('class', settings.classWrap)
        u.addClass(wrap, target)
        setTimeout( function() {
          u.addClass(wrap, [settings.classActive, settings.classDelay])
        }, 25 )
      }
    } else {
      closeOffCanvas()
    }
  }

  var closeOffCanvas = function () {
    var wrap = event.target.closest('.' + settings.classWrap)
    if (wrap) {
      u.removeClass(wrap, settings.classActive)
      setTimeout( function () {
        u.removeClass(wrap, settings.classDelay)
      }, settings.timer )
    }
  }

  var runOffcanvas = function () {
    var wrap = event.target.closest('.' + settings.classWrap)
    if ( !wrap ) return
    var trigger = event.target.closest('.' + settings.classTrigger)
    var aside = event.target.closest('.' + settings.classAside)
    if ( !trigger && !aside ) closeOffCanvas()
    if ( trigger ) {
      openOffCanvas()
      event.preventDefault()
    }
  }

  api.init = function (options) {
    api.destroy()
    settings = u.extend( defaults, options || {} )
    document.addEventListener('click', runOffcanvas, false)
  }

  api.destroy = function () {
    document.removeEventListener('click', runOffcanvas, false)
    settings = null
  }

  api.init(options)
  return api
}
