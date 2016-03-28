var seeder = require('knex-csv-seeder').seeder.seed;

exports.seed = seeder({
  table: 'authors',
  file: './src/server/db/csv-data/authors.csv'
});