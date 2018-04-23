
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ranges').del()
    .then(function () {
      // Inserts seed entries
      return knex('ranges').insert([
        {
          name: 'glucose',
          low: 0,
          high: 100,
        },
        {
          name: 'creatinine',
          low: 10,
          high: 54,
        },
        {
          name: 'sodium',
          low: 67,
          high: 102,
        },
        {
          name: 'potassium',
          low: 48,
          high: 65,
        },
        {
          name: 'chloride',
          low: 37,
          high: 44,
        },
        {
          name: 'carbon_dioxide',
          low: 78,
          high: 98,
        },
        {
          name: 'calcium',
          low: 12,
          high: 38,
        },
        {
          name: 'protein',
          low: 12,
          high: 38,
        },
        {
          name: 'cholesterol',
          low: 8,
          high: 28,
        },
        {
          name: 'triglycerides',
          low: 4,
          high: 87,
        },
      ]);
    });
};
