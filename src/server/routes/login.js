var express = require('express');
var router = express.Router();
var pg = require('pg');
var knex = require('knex');
var queries = require('../queries')

router.get('/', function(req, res, next) {
  var message = req.flash('message');
  var logout = req.flash('logout');
  res.render('login', { title: 'Log In', messages: message, logout: logout });
});