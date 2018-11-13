# explicit-event [![Build Status](https://travis-ci.org/bendrucker/explicit-event.svg?branch=master)](https://travis-ci.org/bendrucker/explicit-event) [![Greenkeeper badge](https://badges.greenkeeper.io/bendrucker/explicit-event.svg)](https://greenkeeper.io/)

> Generate an explicit event interface from an EventEmitter


## Install

```
$ npm install --save explicit-event
```


## Usage

```js
var explicitEvent = require('explicit-event')
var server = require('http').createServer()

var onRequest = explicitEvent(server, 'request')

var unlisten = onRequest(function (req, res) {
  //=> ...  
})
```

## API

#### `explicitEvent(emitter, name)` -> `function`

Returns a function that can be called with an event handler function.

##### emitter

*Required*  
Type: `object`

An instance of `EventEmitter`.

##### name

*Required*  
Type: `string`

The name of the event to proxy.


## License

MIT © [Ben Drucker](http://bendrucker.me)
