var knex = require('./db/knex');

function Books() {
  return knex('books');
}

function Authors() {
  return knex('authors');
}

function JoinAuthorsBooks() {
  return knex('books').select()
  .innerJoin('authors_books', 'books.id', 'authors_books.book_id')
  .innerJoin('authors', 'authors.id', 'authors_books.author_id')
}

module.exports = {
  getBooks: function() {
    // get ALL BOOKS
    return Books().select();
  },
  getBook: function(id) {
    // get ONE BOOK where id equals the id passed into the function in the route in index.js
    return Books().select().where('id', id);
  },
  getAuthors: function() {
    // get ALL AUTHORS
    return Authors().select();
  },
  getAuthor: function(id) {
    // get ONE AUTHOR
    return Authors().select().where('id', id);
  },
  doJoin: function(bookId) {
    // join AUTHORS and BOOKS tables
    // return Join().select().where('authors.id', id);
    return JoinAuthorsBooks().where('book_id', bookId);
  },
};