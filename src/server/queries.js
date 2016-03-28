var knex = require('./db/knex');

function Books() {
  return knex('books');
}

function Authors() {
  return knex('authors');
}

module.exports = {
  getBooks: function() {
    // get ALL BOOKS
    return Books().select();
  }
};