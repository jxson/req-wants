
var request = require('supertest')
  , server = require('./server')

describe('req.wants(type)', function(){
  it('should handle explicit json accept headers')

  it('handles accept header that includes charset')

  describe('missing accept header', function(){
    it('should default to the extname of req.url')

    it('should default to html if missing extname')
  })

  describe('*/*')
})
