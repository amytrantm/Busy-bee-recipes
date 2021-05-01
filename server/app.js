const path = require('path')
const express = require('express')
const morgan = require('morgan')
const app = express()

module.exports = app

// logging middleware
app.use(morgan('dev'))

// body parsing middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// auth and api routes
//app.use('/auth', require('./auth'))
app.use('/api', require('./api'))   //! set up API Routes: match all routes in api folder
//app.use('/auth', require('./auth'))

app.get('/', (req, res) => res.sendFile(path.join(__dirname, '..', 'public/index.html')));

// static file-serving middleware
app.use(express.static(path.join(__dirname, '..', 'public')))

// any remaining requests with an extension (.js, .css, etc.) send 404
app.use((req, res, next) => {
   if (path.extname(req.path).length) {
      const err = new Error('Not found')
      err.status = 404
      next(err)
   } else {
      next()
   }
})

// sends index.html
//Make sure this is after all of your routes in your server entry file!
app.use('*', (req, res) => {
   res.sendFile(path.join(__dirname, '..', 'public/index.html'));
})

// error handling endware: 500
//Make sure this is at the very end of your server entry file!
app.use((err, req, res, next) => {
   console.error(err)
   console.error(err.stack)
   res.status(err.status || 500).send(err.message || 'Internal server error.')
})