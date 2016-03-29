
exports.up = function(knex, Promise) {
  return knex.schema.createTable('authors_books', function(table) {
    table.increments();
    table.integer('author_id').references('authors.id');
    table.integer('book_id').references('books.id');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('authors_books')
};