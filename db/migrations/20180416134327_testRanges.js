exports.up = function(knex, Promise) {
  return knex.schema.createTable('testRanges', (table) => {
    table.increments();
    table.string('name').notNullable();
    table.integer('low').notNullable();
    table.integer('high').notNullable();
    table.string('unit').notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('testRanges');
};
