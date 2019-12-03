const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const cookieSession = require('cookie-session')
const accountRouter = require('./server/routes/account.js')
const apiRouter = require('./server/routes/api.js')
const app = express()

// Register body parser middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.set('view engine', 'html')

// Set 'public' to be a static directory
app.use(express.static(path.join(__dirname, '..', 'public')))

app.use(
  cookieSession({
    name: 'local-session',
    keys: ['spooky'],
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
  })
)

/** TODO: What does this do? */
app.post('/', function(req, res, next) {
  console.log('posting from slash')
  if (req.body.charsTyped) {
    res.redirect('/api/trial')
  }
})

app.use('/account', accountRouter)

// Connect to the database
//require('../db/dbconnect')

// Load the api router onto app
// app.use('/api', require('./server/routes/apirouter'))

// Any non-api routes should be sent the html file as a response
// app.get('*', (req, res) => {
//   console.log('just for testing')
//   res.sendFile(path.join(__dirname, '..', 'public', 'index.html'))
// })

app.get('*', function(req, res, next) {
  // If user is not logged in, prompt to sign in before continuing forward
  if (!req.session.user || req.session.user.length == 0) {
    res.redirect('./account/login')
  } else {
    res.cookie('cookieName', 0, { username: req.session.user, httpOnly: true })
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'))
  }
})

app.listen(3000, () => console.log('listening...'))
