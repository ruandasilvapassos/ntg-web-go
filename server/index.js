const compression = require('compression')
const express = require('express')
const next = require('next')
const join = require('path').join
const parse = require('url').parse

const port = parseInt(process.env.PORT || '3000', 10)
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const serverApp = () => {
  const server = express()

  /* server.get('/a', (req: express.Request, res: express.Response) => {
        return app.render(req, res, '/a')
    })
    server.get('/b', (req, res) => {
        return app.render(req, res, '/b')
    })
    */
  server.all('*', (req, res) => {
    return handle(req, res)
  })

  // Serve static files.
  /* server.use(express.static(path.join(__dirname, 'public')))
    server.use('/_next', express.static(path.join(__dirname, '.next'))) */

  return server
}

app.prepare().then(() => {
  // Start up the Node server //
  const server = serverApp()

  // gzip //
  server.use(compression())

  // pwa //
  server.get('/sw.js', (req, res) => {
    const parsedUrl = parse(req.url, true)
    const { pathname } = parsedUrl
    const filePath = join(__dirname, '.next', pathname || '')
    app.serveStatic(req, res, filePath)
  })

  server
    .listen(port, () => {
      //if (err) throw err
      console.log(`> Ready on http://localhost:${port}`)
    })
    .on('error', (err) => {
      // console.log('error occurred', err)
      throw err
    })
})
