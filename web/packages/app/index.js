const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
const hello = require('@node-js-getting-started/hello').default

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/hello', (req, res) => res.send(hello('world')))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
