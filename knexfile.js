module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/galvanize_reads',
    migrations: {
      directory: './src/server/db/migrations'
    },
    seeds: {
      directory: './src/server/db/seeds'
    }
  },

  production: {
    client: 'pg',
    connection: 'postgres://'
  }
};
