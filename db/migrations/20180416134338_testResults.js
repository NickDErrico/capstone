exports.up = function(knex, Promise) {
  return knex.schema.createTable('testResults', (table) => {
    table.increments();
    table.integer('patient_id').references('id').inTable('patients');
    table.string('date').notNullable();
    table.integer('glucose');
    table.integer('creatinine');
    table.integer('sodium');
    table.integer('potassium');
    table.integer('chloride');
    table.integer('carbon_dioxide');
    table.integer('calcium');
    table.integer('protein');
    table.integer('cholesterol');
    table.integer('triglycerides');
    table.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('testResults');
};
