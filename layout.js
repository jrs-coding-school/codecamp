const marked = require('marked')

module.exports = content => `
<!doctype html>
<html>
  <head>
    <title>CodeCamp</title>
    <link rel="stylesheet" href="/node_modules/github-markdown-css/github-markdown.css">
    <style>
      .markdown-body {
        box-sizing: border-box;
        min-width: 200px;
        max-width: 980px;
        margin: 0 auto;
        padding: 45px;
      }
    </style>
  </head>
  <body>
    <main class="markdown-body">
      ${marked(content)}
    </main>
  </body>
</html>
`
