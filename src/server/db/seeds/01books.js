var seeder = require('knex-csv-seeder').seeder.seed;

exports.seed = seeder({
  table: 'books',
  file: './src/server/db/csv-data/books.csv'
});