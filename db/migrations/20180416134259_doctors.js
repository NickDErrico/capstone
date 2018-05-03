exports.up = function(knex, Promise) {
  return knex.schema.createTable('doctors', (table) => {
    table.increments();
    table.string('first_name').notNullable();
    table.string('last_name').notNullable();
    table.string('email').notNullable();
    table.string('password').notNullable();
    table.integer('pin').notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('doctors');
};
