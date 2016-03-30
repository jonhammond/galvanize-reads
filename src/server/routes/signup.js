var express = require('express');
var router = express.Router();
var passport = require('../db/lib/auth');
var helpers = require('../db/lib/helpers');
var knex = require('../db/knex.js');

// Route to GET signup page when the /signup endpoint is hit
router.get('/', function(req, res, next) {
  var error = req.flash('regError');
  res.render('signup', { title: 'Sign Up Now!', error: error});
});

//route to POST a new user to the database
  router.post('/', function(req, res, next) {
    var firstName = req.body.given_name;
    var lastName = req.body.family_name;
    var userEmail = req.body.email;
    var userPassword = req.body.password;
    var userName = req.body.username;
    // check if email is unique
    knex('users').where('email', userEmail)
    .then(function(data) {
      // if email is not unique, send an error
      if (data.length) {
        // req.flash('regError', {status: 'danger', value: 'Email has been taken, try another email.'});
        return res.redirect('/signup');
      } else {
          // else insert email and password
          hashedPassword = helpers.hashing(userPassword);
          knex('users').insert({
          given_name: firstName,
          family_name: lastName,
          username: userName,
          email: userEmail,
          password: hashedPassword
      }).then(function(data) {
          req.flash('message', {status: 'success', value: 'Your account has been created successfully!'});
          return res.redirect('/login');
      })
      .catch(function(err) {
          req.flash('message', {status: 'danger', value: 'Something went wrong. Shit. Ask someone about something.'});
          return res.redirect('/login');
        });
    }
    })
    .catch(function(err) {
      return next(err);
    });
  });

module.exports = router