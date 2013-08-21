
module.exports = decorate

var Negotiator = require('negotiator')
  , mime = require('mime')
  , path = require('path')

function decorate(req, res) {
  var negotiator = new Negotiator(req)
    , types = negotiator.preferredMediaTypes()
    , extname = path.extname(req.url)

  // treat undefined accept types the same as allow everything
  if (types.length === 0) types = [ '*/*' ]

  return wants

  function wants(type){
    // is there a normal match
    if (contains(types, mime.lookup(type))) return true

    // do we have a match against the extname?
    if (mime.lookup(type) === mime.lookup(extname)) return true

    // catch all kinda nice for default responses like
    //
    //     if (req.wants('html') || req.wants('*')) {
    //       res.end('<p>Hi</p>')
    //     }
    //
    if (type === '*' && contains(types, '*/*')) return true

    return false
  }
}

// Makes is a little more obvious what is intended than checking for a -1
function contains(array, item){
  return array.indexOf(item) !== -1
}
