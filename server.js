const http = require('http')
const HttpHashRouter = require('http-hash-router')
const sendHtml = require('send-data/html')
const sendError = require('send-data/error')
const filed = require('filed')
const layout = require('./layout')
const fs = require('fs')

const router = HttpHashRouter()

const read = (name, cb) => fs.readFile([__dirname, name + '.md'].join('/'), 'utf-8', cb)

const render = (req,res) => name => read(name, (err, content) => {
  if (err) { return sendError(req, res, {body: err.message}) }
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

router.set('/github-markdown.css', (req, res) =>
  filed(__dirname + '/node_modules/github-markdown-css/github-markdown.css')
    .pipe(res)
)

const server = http.createServer( (req, res) => {
  router(req,res, {}, err => sendError(req, res, {body: err.message}))
})

server.listen(process.env.PORT || 3000)
