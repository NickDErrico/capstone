
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('testRanges').del()
    .then(function () {
      // Inserts seed entries
      return knex('testRanges').insert([
        {
          name: 'glucose',
          low: 0,
          high: 100,
          unit: "mg/dL"
        },
        {
          name: 'creatinine',
          low: 10,
          high: 54,
          unit: "mg/dL"
        },
        {
          name: 'sodium',
          low: 67,
          high: 102,
          unit: "mg/dL"
        },
        {
          name: 'potassium',
          low: 48,
          high: 65,
          unit: "mg/dL"
        },
        {
          name: 'chloride',
          low: 37,
          high: 44,
          unit: "mg/dL"
        },
        {
          name: 'carbon_dioxide',
          low: 78,
          high: 98,
          unit: "mg/dL"
        },
        {
          name: 'calcium',
          low: 12,
          high: 38,
          unit: "mg/dL"
        },
        {
          name: 'protein',
          low: 12,
          high: 38,
          unit: "mg/dL"
        },
        {
          name: 'cholesterol',
          low: 8,
          high: 28,
          unit: "mg/dL"
        },
        {
          name: 'triglycerides',
          low: 4,
          high: 87,
          unit: "mg/dL"
        },
      ]);
    });
};
