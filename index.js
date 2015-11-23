'use strict'

module.exports = function createEvent (emitter, name) {
  return function listen (handler) {
    var bound = handler.bind(null)
    emitter.on(name, bound)

    return function unlisten () {
      emitter.removeListener(name, bound)
    }
  }
}
