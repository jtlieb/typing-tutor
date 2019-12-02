var express = require('express')
var router = express.Router()
const isAuthenticated = require('./isAuthenticated.js')
const { User } = require('../../../db/dbconnect.js')
const path = require('path')
const words = require('random-words')

// Fetches signup page

module.exports = apiRouter
