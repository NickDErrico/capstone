
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('patients').del()
    .then(function () {
      // Inserts seed entries
      return knex('patients').insert([
        {
          doctor_id: 1,
          first_name: "John",
          last_name: "Snow",
          email: "thetrueheir@ironthrone.com",
          password: "ghost",
          height: 72,
          weight: 185,
          eye_color: "Brown",
          hair_color: "Black",
          sex: "male"
        },
        {
          doctor_id: 1,
          first_name: "Brienne",
          last_name: "Tarth",
          email: "brienne@tarth.land",
          password: "StarkProtector1",
          height: 78,
          weight: 207,
          eye_color: "Brown",
          hair_color: "Blonde",
          sex: "female"
        },
        {
          doctor_id: 1,
          first_name: "Sandor",
          last_name: "Clegane",
          email: "thehound@wandering.com",
          password: "oUtOkIlLmYbRoThEr",
          height: 80,
          weight: 275,
          eye_color: "Brown",
          hair_color: "Brown",
          sex: "male"
        },
        {
          doctor_id: 2,
          first_name: "Tyrion",
          last_name: "Lannister",
          email: "theimp@followingtherealqueen.com",
          password: "TakeThatDad",
          height: 48,
          weight: 92,
          eye_color: "blue",
          hair_color: "Brown",
          sex: "male"
        },
        {
          doctor_id: 2,
          first_name: "Arya",
          last_name: "Stark",
          email: "theneedle@assassinstark.com",
          password: "swordOfVengeance",
          height: 54,
          weight: 85,
          eye_color: "blue",
          hair_color: "Brown",
          sex: "female"
        }
      ]);
    });
};
