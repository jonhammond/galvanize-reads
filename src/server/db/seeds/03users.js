
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('users').del(),

    // Inserts seed entries
    knex('users').insert({
      given_name: 'test',
      family_name: 'test',
      username: 'test',
      admin: false,
      email: 'test@test.com',
      password: '$2a$10$tH0jQASs3fM8yDOBDki5N.eze6aMGUeT5voOxAre2euQMUvI75l7K'}),
    knex('users').insert({
      given_name: 'admin1',
      family_name: 'admin1',
      username: 'admin1',
      admin: true,
      email: 'admin1@admin1.com',
      password: '$2a$10$tH0jQASs3fM8yDOBDki5N.eze6aMGUeT5voOxAre2euQMUvI75l7K'})
  );
};
