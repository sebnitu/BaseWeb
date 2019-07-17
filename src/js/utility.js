export default function() {

  var api = {}

  api.hasClass = function ( el, c ) {
    c = api.toArray(c)
    return c.every( function ( c ) {
      return el.classList.contains(c)
    })
  }

  api.addClass = function ( el, c ) {
    c = api.toArray(c)
    c.forEach( function ( c ) {
      el.classList.add( c )
    })
  }

  api.removeClass = function ( el, c ) {
    c = api.toArray(c)
    c.forEach( function ( c ) {
      el.classList.remove( c )
    })
  }

  api.toggleClass = function ( el, c ) {
    c = api.toArray(c)
    c.forEach( function ( c ) {
      el.classList.toggle(c)
    })
  }

  api.closest = function ( el, c ) {
    while ((el = el.parentElement) && !api.hasClass(el, c))
    return el
  }

  api.toArray = function( s ) {
    var array = []
    if (typeof s === 'string') {
      array.push(s)
    } else if (Array.isArray(s)) {
      array = s
    } else {
      return false
    }
    return array
  }

  api.extend = function () {
    var extended = {}
    var deep = false
    var i = 0
    var length = arguments.length
    if ( Object.prototype.toString.call( arguments[0] ) === '[object Boolean]' ) {
      deep = arguments[0]
      i++
    }
    var merge = function ( obj ) {
      for ( var prop in obj ) {
        if ( Object.prototype.hasOwnProperty.call( obj, prop ) ) {
          if ( deep && Object.prototype.toString.call(obj[prop]) === '[object Object]' ) {
            extended[prop] = extend( true, extended[prop], obj[prop] )
          } else {
            extended[prop] = obj[prop]
          }
        }
      }
    }
    for ( i = 0; i < length; i++ ) {
      var obj = arguments[i]
      merge(obj)
    }
    return extended
  }

  return api
}
