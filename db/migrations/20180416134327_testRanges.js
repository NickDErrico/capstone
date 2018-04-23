exports.up = function(knex, Promise) {
  return knex.schema.createTable('ranges', (table) => {
    table.increments();
    table.string('name').notNullable();
    table.integer('low').notNullable();
    table.integer('high').notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('ranges');
};
