var express = require('express');
var router = express.Router();
var pg = require('pg');
var knex = require('knex');
var queries = require('../queries')

// Route to GET signup page when the /signup endpoint is hit
router.get('/', function(req, res, next) {
  res.render('signup', { title: 'Sign Up Now!'});
});

module.exports = router