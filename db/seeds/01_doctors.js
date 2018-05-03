
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('doctors').del()
    .then(function () {
      // Inserts seed entries
      return knex('doctors').insert([
        {
          first_name: "Maester",
          last_name: "Luwin",
          email: "luwin@maester.com",
          password: "a",
          pin: "12345"
      },
        {
          first_name: "Grand Maester",
          last_name: "Pycelle",
          email: "pycelle@maester.com",
          password: "b",
          pin: "56789"
        },
      ]);
    });
};
