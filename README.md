# req-wants

An http request decorator for simplified content negotiation.

# EXAMPLE

    var http = require('http')
      , wants = require('req-wants')

    http.createServer(function(req, res){

      req.wants = wants(req, res)

      if (req.wants('json')) {
        res.writeHead(200, { 'content-type': 'application/json' })
        res.write(JSON.stringify({ foo: 'bar' }))
        return res.end()
      }

      // Assuming you are using beardo or Templar
      if (req.wants('html')) return res.template('foo')

      // don't want to support anything else.
      res.statusCode = 415
      res.end()
    }

    }).listen(1337)

