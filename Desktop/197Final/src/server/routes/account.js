var express = require('express')
var router = express.Router()
const isAuthenticated = require('./isAuthenticated.js')
const { User } = require('../../../db/dbconnect.js')
const path = require('path')

// Fetches signup page
router.get('/signup', function(req, res) {
  res.sendFile(path.join(__dirname, '..', '..', '..', 'public', 'signup.html'))
})

// User submits preferred username and password
router.post('/signup', function(req, res, next) {
  var username = req.body.username
  var password = req.body.password
  User.findOrCreate({
    where: { username: username },
    defaults: { password: password, numTrials: 0, speed: 0 }
  }).then(([user, created]) => {
    if (created) {
      console.log('created')
      res.redirect('/account/login')
    } else {
      console.log('user already exists')
      res.redirect('/signup')
    }
  })
})

// User is looking to login, renders the login page
router.get('/login', function(req, res) {
  res.sendFile(path.join(__dirname, '..', '..', '..', 'public', 'login.html'))
})

// User attempts to login
router.post('/login', function(req, res, next) {
  var username = req.body.username
  var password = req.body.password

  User.findOne({ where: { username: username, password: password } }).then(
    userValue => {
      if (userValue) {
        console.log(userValue.username)
        console.log(userValue.password)
        console.log(userValue.numTrials)
        req.session.user = username
        res.redirect('/')
      } else {
        res.redirect('/account/login')
      }
    }
  )
})

// Resets the session user to blank, removes account data
router.get('/logout', isAuthenticated, function(req, res) {
  req.session.user = ''
  res.redirect('/')
})

module.exports = router
