
var http = require('http')
  , wants = require('../')
  , json = require('JSONStream')
  , fs = require('fs')
  , through = require('through')

module.exports = http.createServer(function(req, res){
  req.wants = wants(req, res)

  res.writeHead(200, { 'content-type': 'application/json' })

  // Reads the ./types.json file and converts the array into a simple json
  // response that is easy to validate accept headers against `req.wants()`
  // return value.
  fs
  .createReadStream(__dirname + '/types.json')
  .pipe(json.parse('*'))
  .pipe(through(write))
  .pipe(json.stringifyObject())
  .pipe(res)

  function write(type){
    this.queue([ type, req.wants(type) ])
  }

})
