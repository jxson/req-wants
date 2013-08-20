
var request = require('supertest')
  , server = require('./server')
  , assert = require('assert')

describe('req.wants(type)', function(){
  it('handles explicit json accept header', function(done){
    request(server)
    .get('/')
    .set('accept', 'application/json')
    .expect(200)
    .end(function(err, res){
      if (err) return done(err)

      assert.ok(res.body.json, '! req.wants("json")')

      done()
    })
  })

  it('handles accept header including charset', function(done){
    request(server)
    .get('/')
    .set('accept', 'application/json; charset=utf-8')
    .expect(200)
    .end(function(err, res){
      if (err) return done(err)

      assert.ok(res.body.json, '! req.wants("json")')

      done()
    })
  })

  describe('missing accept header', function(){
    it('should default to the extname of req.url', function(done){
      request(server)
      .get('/foo.css')
      .expect(200)
      .end(function(err, res){
        if (err) return done(err)

        assert.ok(res.body.css, '! req.wants("css")')

        done()
      })
    })
  })

  describe('*/*', function(){
    //...
  })
})
