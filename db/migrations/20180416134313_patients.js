exports.up = function(knex, Promise) {
  return knex.schema.createTable('patients', (table) => {
    table.increments();
    table.integer('doctor_id').references('id').inTable('doctors');
    table.string('first_name').notNullable();
    table.string('last_name').notNullable();
    table.string('email').notNullable();
    table.string('password').notNullable();
    table.integer('height');
    table.integer('weight');
    table.string('eye_color');
    table.string('hair_color');
    table.string('sex');
    table.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('patients');
};
