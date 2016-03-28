var express = require('express');
var router = express.Router();
var pg = require('pg');
var knex = require('knex');
var queries = require('../queries')

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Galvanize Reads' });
});

router.get('/authors', function(req, res, next) {
  res.render('authors', { title: 'Authors' });
});

router.get('/Books', function(req, res, next) {
  queries.getBooks().select()
  .then(function(data) {
    res.render('Books', { title: 'Books' });
  })
});

module.exports = router;
