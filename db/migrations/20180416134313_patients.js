exports.up = function(knex, Promise) {
  return knex.schema.createTable('patients', (table) => {
    table.increments();
    table.integer('doctor_id').references('id').inTable('doctors');
    table.string('first_name');
    table.string('last_name');
    table.string('email');
    table.string('password');
    table.integer('height');
    table.integer('weight');
    table.string('eye_color');
    table.string('hair_color');
    table.string('sex');
    table.integer('age');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('patients');
};
