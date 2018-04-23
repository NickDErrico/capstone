exports.up = function(knex, Promise) {
  return knex.schema.createTable('results', (table) => {
    table.increments();
    table.integer('patient_id').references('id').inTable('patients');
    table.integer('doctor_id').references('id').inTable('doctors');
    table.integer('ranges_id').references('id').inTable('ranges');
    table.float('results');
    table.string('date').notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('results');
};
