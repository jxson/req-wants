
module.exports = decorate

var Negotiator = require('negotiator')
  , mime = require('mime')
  , path = require('path')

function decorate(req, res) {
  var negotiator = new Negotiator(req)
    , types = negotiator.preferredMediaTypes() || []
    , extname = path.extname(req.url)

  return wants

  function wants(type){
    if (types.length === 0 && extname) {
      return mime.lookup(type) === mime.lookup(extname)
    }

    return contains(types, mime.lookup(type))
  }
}

// Makes is a little more obvious what is intended than checking for a -1
function contains(array, item){
  return array.indexOf(item) !== -1
}
