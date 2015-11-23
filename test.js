'use strict'

var test = require('tape')
var EventEmitter = require('events').EventEmitter
var explicitEvent = require('./')

test(function (t) {
  t.plan(3)

  var page = new EventEmitter()
  var onLoad = explicitEvent(page, 'load')

  var unlisten = onLoad(function (a, b) {
    t.equal(this, null)
    t.equal(a, 1)
    t.equal(b, 2)
  })

  page.emit('load', 1, 2)

  unlisten()

  page.emit('load') // noop
})
