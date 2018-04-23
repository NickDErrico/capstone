exports.up = function(knex, Promise) {
  return knex.schema.createTable('notes', (table) => {
    table.increments();
    table.integer('doctor_id').references('id').inTable('doctors');
    table.integer('patient_id');
    table.text('detail');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('notes');
};
