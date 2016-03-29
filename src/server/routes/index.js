var express = require('express');
var router = express.Router();
var pg = require('pg');
var knex = require('knex');
var queries = require('../queries')

// Route to GET and display the index page
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Galvanize Reads' });
});

// Route to GET ALL AUTHORS and display when the /authors endpoint is hit
router.get('/authors', function(req, res, next) {
  queries.getAuthors().select()
  .then(function(authors) {
    res.render('authors', { title: 'Authors', authors: authors });
  })
});

// Route to GET ALL BOOKS and display when the /books endpoint is hit
router.get('/books', function(req, res, next) {
  queries.getBooks()
  .then(function(books) {
    res.render('books', { title: 'Books', books: books });
  })
});

// Route to GET A SINGLE BOOK and display when the /books/:id endpoint is hit
router.get('/books/:id', function(req, res, next) {
  // queries.doJoin(req.params.id)
  // .then(function(stuff) {
  //   console.log("stuff:",stuff);
  //   res.render('singlebook', { title: 'Books', stuff: stuff});
  // })
  queries.getBook(req.params.id)
  .then(function(book) {
    console.log("book:",book);
    res.render('singlebook', { title: 'Books', book: book });
  })
});

// Route to GET and display the ADD NEW BOOK page when the /new endpoint is hit
router.get('/new', function(req, res, next) {
  res.render('newbook', { title: 'Add New Book' });
});

// Route to GET and display the ADD NEW AUTHOR page when the /newauth endpoint is hit
router.get('/newauth', function(req, res, next) {
  res.render('newauth', { title: 'Add New Author' });
});

// Route to GET and display the EDIT BOOK page when the /edit/:id endpoint is hit
router.get('/edit/:id', function(req, res, next) {
  queries.getBook(req.params.id)
  .then(function(book) {
    res.render('editbook', { title: 'Edit Book', book: book });
  })
});

// Route to GET and display the edit author page when the /editauth/:id endpoint is hit
router.get('/editauth/:id', function(req, res, next) {
  queries.getAuthor(req.params.id)
  .then(function(author) {
    res.render('editauth', { title: 'Edit Author', author: author });
  })
});

// Route to POST a NEW BOOK to the DB
router.post('/new', function(req, res, next) {
  queries.getBooks().insert({
    title: req.body.title,
    genre: req.body.genre,
    description: req.body.description,
    cover_url: req.body.coverUrl
  })
  .then(function() {
    res.redirect('/books');
  })
});

// Route to POST BOOK EDITS to the DB
router.post('/edit/:id', function(req, res, next) {
  queries.getBook(req.params.id).update({
    title: req.body.title,
    genre: req.body.genre,
    description: req.body.description,
    cover_url: req.body.coverUrl
  })
  .then(function() {
    res.redirect('/books');
  })
});

// Route to POST AUTHOR EDITS to the DB
router.post('/editauth/:id', function(req, res, next) {
  queries.getAuthors(req.params.id).update({
    first_name: req.body.firstName,
    last_name: req.body.lastName,
    bio: req.body.bio,
    portrait_url: req.body.portraitUrl
  })
  .then(function() {
    res.redirect('/authors');
  })
});

// Route to POST a DELETED BOOK to the DB
router.post('/books/:id/delete', function(req, res, next) {
  queries.getBook(req.params.id).del()
  .then(function() {
    res.redirect('/books');
  })
});

// Route to POST a DELETED AUTHOR to the DB
router.post('/authors/:id/delete', function(req, res, next) {
  queries.getAuthor(req.params.id).del()
  .then(function() {
    res.redirect('/authors');
  })
});

// Route to POST a NEW AUTHOR to the DB
router.post('/newauth', function(req, res, next) {
  queries.getAuthors().insert({
    first_name: req.body.firstName,
    last_name: req.body.lastName,
    bio: req.body.bio,
    portrait_url: req.body.portraitUrl
  })
  .then(function() {
    res.redirect('/books');
  })
});

// Route to POST a NEW AUTHOR to the DB
router.post('/newauth/:id/delete', function(req, res, next) {
  queries.getAuthors().insert({
    first_name: req.body.firstName,
    last_name: req.body.lastName,
    bio: req.body.bio,
    portrait_url: req.body.portraitUrl
  })
  .then(function() {
    res.redirect('/books');
  })
});


module.exports = router;
