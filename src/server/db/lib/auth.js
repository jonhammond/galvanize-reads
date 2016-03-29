var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var knex = require('../knex.js');
var helpers = require('./helper');

function Users () {
  return knex('users');
}

