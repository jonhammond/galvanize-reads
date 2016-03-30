var bcrypt = require('bcrypt');

function ensureAuthenticated (req, res, next) {
  // check if user iS authenticated
  if(req.user) {
    // if so --> call next()
    console.log("Woo!", req.user);
    return next();
    // if not --> redirect to login
  } else {
    console.log("Nope");
    return res.redirect('/login');
  }
}


function loginRedirect (req, res, next) {
  // check if user is authenticated
  if(!req.user) {
    // if not --> call next()
    return next();
  } else {
    return res.redirect('/');
    // if so --> redirect to main route
  }
}

// var hashedpassword;

function hashing(password) {
  return bcrypt.hashSync(password, 10);
  // var newPassword;
  // bcrypt.hash(password, 10, function(err, hash) {
  //   newPassword = hash;
  // });
  // return newPassword;
}

function comparePassword (password, hashedPassword) {
  return bcrypt.compareSync(password, hashedPassword);
}

module.exports = {
  loginRedirect: loginRedirect,
  ensureAuthenticated: ensureAuthenticated,
  hashing: hashing,
  comparePassword: comparePassword
};