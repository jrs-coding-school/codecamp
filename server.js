const http = require('http')
const ecstatic = require('ecstatic')
const HttpHashRouter = require('http-hash-router')
const sendHtml = require('send-data/html')
const sendError = require('send-data/error')
const layout = require('./layout')
const fs = require('fs')

const router = HttpHashRouter()

const read = (name, cb) => fs.readFile([__dirname, name + '.md'].join('/'), 'utf-8', cb)

const render = (req,res) => name => read(name, (err, content) => {
  if (err) { return sendError(req, res, err) }
  sendHtml(req, res, layout(content))
})

router.set('/labs/:dir/:name', (req, res, opts) => {
  render(req,res)(opts.params.dir + '/' + opts.params.name)
})

router.set('/lessons/:dir', (req, res, opts) => {
  render(req,res)(opts.params.dir + '/README')
})

router.set('/', (req, res) => {
  render(req,res)('README')
})

router.set('*', ecstatic(__dirname))

const server = http.createServer( (req, res) => {
  router(req,res, {}, err => console.log(err))
})

server.listen(process.env.PORT || 3000)
