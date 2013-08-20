


# req-wants

[![NPM](https://nodei.co/npm/req-wants.png)](https://nodei.co/npm/req-wants/)

An http request decorator for simplified content negotiation.

[![build status](https://secure.travis-ci.org/jxson/req-wants.png)](http://travis-ci.org/jxson/req-wants) [![Dependency Status](https://david-dm.org/jxson/req-wants.png)](https://david-dm.org/req-wants/beardo)

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

# DEVELOPMENT

You can run the tests through standard npm commands.

    $ npm install   # install dependencies
    $ npm test      # run the tests

# CONTRIBUTING

Want to help? Send a [pull request][pr], I'll give you commit access and we can make this better.

If a PR is too much any feedback is always welcome, I prefer [GH issues][issues] but a [tweet][twitter] or IRC chat is fine as well :)

# LICENSE (MIT)

Copyright (c) Jason Campbell ("Author")

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


[issues]: https://github.com/jxson/req-wants/issues
[pr]: https://github.com/jxson/req-wants/pulls
[twitter]: https://twitter.com/jxson
