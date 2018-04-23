
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('results').del()
    .then(function () {
      // Inserts seed entries
      return knex('results').insert([
        {
          "patient_id": 1,
          "doctor_id": 1,
          "ranges_id": 1,
          "results": 74,
          "date": "3/14/2018"
        },
        {
          "patient_id": 1,
          "doctor_id": 1,
          "ranges_id": 2,
          "results": 27,
          "date": "3/14/2018"
        },
        {
          "patient_id": 1,
          "doctor_id": 1,
          "ranges_id": 3,
          "results": 65,
          "date": "3/14/2018"
        },
        {
          "patient_id": 1,
          "doctor_id": 1,
          "ranges_id": 4,
          "results": 49,
          "date": "3/14/2018"
        },
        {
          "patient_id": 1,
          "doctor_id": 1,
          "ranges_id": 5,
          "results": 40,
          "date": "3/14/2018"
        },
        {
          "patient_id": 1,
          "doctor_id": 1,
          "ranges_id": 6,
          "results": 88,
          "date": "3/14/2018"
        },
        {
          "patient_id": 1,
          "doctor_id": 1,
          "ranges_id": 7,
          "results": 17,
          "date": "3/14/2018"
        },
        {
          "patient_id": 1,
          "doctor_id": 1,
          "ranges_id": 8,
          "results": 40,
          "date": "3/14/2018"
        },
        {
          "patient_id": 1,
          "doctor_id": 1,
          "ranges_id": 9,
          "results": 18,
          "date": "3/14/2018"
        },
        {
          "patient_id": 1,
          "doctor_id": 1,
          "ranges_id": 10,
          "results": 65,
          "date": "3/14/2018"
        },
        {
          "patient_id": 2,
          "doctor_id": 1,
          "ranges_id": 1,
          "results": 64,
          "date": "3/13/2018"
        },
        {
          "patient_id": 2,
          "doctor_id": 1,
          "ranges_id": 2,
          "results": 24,
          "date": "3/13/2018"
        },
        {
          "patient_id": 2,
          "doctor_id": 1,
          "ranges_id": 3,
          "results": 72,
          "date": "3/13/2018"
        },
        {
          "patient_id": 2,
          "doctor_id": 1,
          "ranges_id": 4,
          "results": 84,
          "date": "3/13/2018"
        },
        {
          "patient_id": 2,
          "doctor_id": 1,
          "ranges_id": 5,
          "results": 47,
          "date": "3/13/2018"
        },
        {
          "patient_id": 2,
          "doctor_id": 1,
          "ranges_id": 6,
          "results": 16,
          "date": "3/13/2018"
        },
        {
          "patient_id": 2,
          "doctor_id": 1,
          "ranges_id": 7,
          "results": 27,
          "date": "3/13/2018"
        },
        {
          "patient_id": 2,
          "doctor_id": 1,
          "ranges_id": 8,
          "results": 42,
          "date": "3/13/2018"
        },
        {
          "patient_id": 2,
          "doctor_id": 1,
          "ranges_id": 9,
          "results": 90,
          "date": "3/13/2018"
        },
        {
          "patient_id": 2,
          "doctor_id": 1,
          "ranges_id": 10,
          "results": 84,
          "date": "3/13/2018"
        },
        {
          "patient_id": 3,
          "doctor_id": 1,
          "ranges_id": 1,
          "results": 76,
          "date": "3/12/2018"
        },
        {
          "patient_id": 3,
          "doctor_id": 1,
          "ranges_id": 2,
          "results": 32,
          "date": "3/12/2018"
        },
        {
          "patient_id": 3,
          "doctor_id": 1,
          "ranges_id": 3,
          "results": 68,
          "date": "3/12/2018"
        },
        {
          "patient_id": 3,
          "doctor_id": 1,
          "ranges_id": 4,
          "results": 47,
          "date": "3/12/2018"
        },
        {
          "patient_id": 3,
          "doctor_id": 1,
          "ranges_id": 5,
          "results": 39,
          "date": "3/12/2018"
        },
        {
          "patient_id": 3,
          "doctor_id": 1,
          "ranges_id": 6,
          "results": 86,
          "date": "3/12/2018"
        },
        {
          "patient_id": 3,
          "doctor_id": 1,
          "ranges_id": 7,
          "results": 12,
          "date": "3/12/2018"
        },
        {
          "patient_id": 3,
          "doctor_id": 1,
          "ranges_id": 8,
          "results": 45,
          "date": "3/12/2018"
        },
        {
          "patient_id": 3,
          "doctor_id": 1,
          "ranges_id": 9,
          "results": 21,
          "date": "3/12/2018"
        },
        {
          "patient_id": 3,
          "doctor_id": 1,
          "ranges_id": 10,
          "results": 66,
          "date": "3/12/2018"
        },
        {
          "patient_id": 4,
          "doctor_id": 1,
          "ranges_id": 1,
          "results": 47,
          "date": "3/11/2018"
        },
        {
          "patient_id": 4,
          "doctor_id": 1,
          "ranges_id": 2,
          "results": 34,
          "date": "3/11/2018"
        },
        {
          "patient_id": 4,
          "doctor_id": 1,
          "ranges_id": 3,
          "results": 60,
          "date": "3/11/2018"
        },
        {
          "patient_id": 4,
          "doctor_id": 1,
          "ranges_id": 4,
          "results": 87,
          "date": "3/11/2018"
        },
        {
          "patient_id": 4,
          "doctor_id": 1,
          "ranges_id": 5,
          "results": 62,
          "date": "3/11/2018"
        },
        {
          "patient_id": 4,
          "doctor_id": 1,
          "ranges_id": 6,
          "results": 87,
          "date": "3/11/2018"
        },
        {
          "patient_id": 4,
          "doctor_id": 1,
          "ranges_id": 7,
          "results": 19,
          "date": "3/11/2018"
        },
        {
          "patient_id": 4,
          "doctor_id": 1,
          "ranges_id": 8,
          "results": 45,
          "date": "3/11/2018"
        },
        {
          "patient_id": 4,
          "doctor_id": 1,
          "ranges_id": 9,
          "results": 54,
          "date": "3/11/2018"
        },
        {
          "patient_id": 4,
          "doctor_id": 1,
          "ranges_id": 10,
          "results": 76,
          "date": "3/11/2018"
        },
        {
          "patient_id": 5,
          "doctor_id": 1,
          "ranges_id": 1,
          "results": 18,
          "date": "3/10/2018"
        },
        {
          "patient_id": 5,
          "doctor_id": 1,
          "ranges_id": 2,
          "results": 28,
          "date": "3/10/2018"
        },
        {
          "patient_id": 5,
          "doctor_id": 1,
          "ranges_id": 3,
          "results": 68,
          "date": "3/10/2018"
        },
        {
          "patient_id": 5,
          "doctor_id": 1,
          "ranges_id": 4,
          "results": 48,
          "date": "3/10/2018"
        },
        {
          "patient_id": 5,
          "doctor_id": 1,
          "ranges_id": 5,
          "results": 48,
          "date": "3/10/2018"
        },
        {
          "patient_id": 5,
          "doctor_id": 1,
          "ranges_id": 6,
          "results": 88,
          "date": "3/10/2018"
        },
        {
          "patient_id": 5,
          "doctor_id": 1,
          "ranges_id": 7,
          "results": 18,
          "date": "3/10/2018"
        },
        {
          "patient_id": 5,
          "doctor_id": 1,
          "ranges_id": 8,
          "results": 48,
          "date": "3/10/2018"
        },
        {
          "patient_id": 5,
          "doctor_id": 1,
          "ranges_id": 9,
          "results": 18,
          "date": "3/10/2018"
        },
        {
          "patient_id": 5,
          "doctor_id": 1,
          "ranges_id": 10,
          "results": 68,
          "date": "3/10/2018"
        },
        {
          "patient_id": 1,
          "doctor_id": 1,
          "ranges_id": 1,
          "results": 74,
          "date": "9/14/2017"
        },
        {
          "patient_id": 1,
          "doctor_id": 1,
          "ranges_id": 2,
          "results": 27,
          "date": "9/14/2017"
        },
        {
          "patient_id": 1,
          "doctor_id": 1,
          "ranges_id": 3,
          "results": 65,
          "date": "9/14/2017"
        },
        {
          "patient_id": 1,
          "doctor_id": 1,
          "ranges_id": 4,
          "results": 49,
          "date": "9/14/2017"
        },
        {
          "patient_id": 1,
          "doctor_id": 1,
          "ranges_id": 5,
          "results": 40,
          "date": "9/14/2017"
        },
        {
          "patient_id": 1,
          "doctor_id": 1,
          "ranges_id": 6,
          "results": 88,
          "date": "9/14/2017"
        },
        {
          "patient_id": 1,
          "doctor_id": 1,
          "ranges_id": 7,
          "results": 17,
          "date": "9/14/2017"
        },
        {
          "patient_id": 1,
          "doctor_id": 1,
          "ranges_id": 8,
          "results": 40,
          "date": "9/14/2017"
        },
        {
          "patient_id": 1,
          "doctor_id": 1,
          "ranges_id": 9,
          "results": 18,
          "date": "9/14/2017"
        },
        {
          "patient_id": 1,
          "doctor_id": 1,
          "ranges_id": 10,
          "results": 65,
          "date": "9/14/2017"
        },
        {
          "patient_id": 2,
          "doctor_id": 1,
          "ranges_id": 1,
          "results": 64,
          "date": "9/13/2017"
        },
        {
          "patient_id": 2,
          "doctor_id": 1,
          "ranges_id": 2,
          "results": 24,
          "date": "9/13/2017"
        },
        {
          "patient_id": 2,
          "doctor_id": 1,
          "ranges_id": 3,
          "results": 72,
          "date": "9/13/2017"
        },
        {
          "patient_id": 2,
          "doctor_id": 1,
          "ranges_id": 4,
          "results": 84,
          "date": "9/13/2017"
        },
        {
          "patient_id": 2,
          "doctor_id": 1,
          "ranges_id": 5,
          "results": 47,
          "date": "9/13/2017"
        },
        {
          "patient_id": 2,
          "doctor_id": 1,
          "ranges_id": 6,
          "results": 16,
          "date": "9/13/2017"
        },
        {
          "patient_id": 2,
          "doctor_id": 1,
          "ranges_id": 7,
          "results": 27,
          "date": "9/13/2017"
        },
        {
          "patient_id": 2,
          "doctor_id": 1,
          "ranges_id": 8,
          "results": 42,
          "date": "9/13/2017"
        },
        {
          "patient_id": 2,
          "doctor_id": 1,
          "ranges_id": 9,
          "results": 90,
          "date": "9/13/2017"
        },
        {
          "patient_id": 2,
          "doctor_id": 1,
          "ranges_id": 10,
          "results": 84,
          "date": "9/13/2017"
        },
        {
          "patient_id": 3,
          "doctor_id": 1,
          "ranges_id": 1,
          "results": 76,
          "date": "9/12/2017"
        },
        {
          "patient_id": 3,
          "doctor_id": 1,
          "ranges_id": 2,
          "results": 32,
          "date": "9/12/2017"
        },
        {
          "patient_id": 3,
          "doctor_id": 1,
          "ranges_id": 3,
          "results": 68,
          "date": "9/12/2017"
        },
        {
          "patient_id": 3,
          "doctor_id": 1,
          "ranges_id": 4,
          "results": 47,
          "date": "9/12/2017"
        },
        {
          "patient_id": 3,
          "doctor_id": 1,
          "ranges_id": 5,
          "results": 39,
          "date": "9/12/2017"
        },
        {
          "patient_id": 3,
          "doctor_id": 1,
          "ranges_id": 6,
          "results": 86,
          "date": "9/12/2017"
        },
        {
          "patient_id": 3,
          "doctor_id": 1,
          "ranges_id": 7,
          "results": 12,
          "date": "9/12/2017"
        },
        {
          "patient_id": 3,
          "doctor_id": 1,
          "ranges_id": 8,
          "results": 45,
          "date": "9/12/2017"
        },
        {
          "patient_id": 3,
          "doctor_id": 1,
          "ranges_id": 9,
          "results": 21,
          "date": "9/12/2017"
        },
        {
          "patient_id": 3,
          "doctor_id": 1,
          "ranges_id": 10,
          "results": 66,
          "date": "9/12/2017"
        },
        {
          "patient_id": 4,
          "doctor_id": 1,
          "ranges_id": 1,
          "results": 47,
          "date": "9/11/2017"
        },
        {
          "patient_id": 4,
          "doctor_id": 1,
          "ranges_id": 2,
          "results": 34,
          "date": "9/11/2017"
        },
        {
          "patient_id": 4,
          "doctor_id": 1,
          "ranges_id": 3,
          "results": 60,
          "date": "9/11/2017"
        },
        {
          "patient_id": 4,
          "doctor_id": 1,
          "ranges_id": 4,
          "results": 87,
          "date": "9/11/2017"
        },
        {
          "patient_id": 4,
          "doctor_id": 1,
          "ranges_id": 5,
          "results": 62,
          "date": "9/11/2017"
        },
        {
          "patient_id": 4,
          "doctor_id": 1,
          "ranges_id": 6,
          "results": 87,
          "date": "9/11/2017"
        },
        {
          "patient_id": 4,
          "doctor_id": 1,
          "ranges_id": 7,
          "results": 19,
          "date": "9/11/2017"
        },
        {
          "patient_id": 4,
          "doctor_id": 1,
          "ranges_id": 8,
          "results": 45,
          "date": "9/11/2017"
        },
        {
          "patient_id": 4,
          "doctor_id": 1,
          "ranges_id": 9,
          "results": 54,
          "date": "9/11/2017"
        },
        {
          "patient_id": 4,
          "doctor_id": 1,
          "ranges_id": 10,
          "results": 76,
          "date": "9/11/2017"
        },
        {
          "patient_id": 5,
          "doctor_id": 1,
          "ranges_id": 1,
          "results": 18,
          "date": "9/10/2017"
        },
        {
          "patient_id": 5,
          "doctor_id": 1,
          "ranges_id": 2,
          "results": 28,
          "date": "9/10/2017"
        },
        {
          "patient_id": 5,
          "doctor_id": 1,
          "ranges_id": 3,
          "results": 68,
          "date": "9/10/2017"
        },
        {
          "patient_id": 5,
          "doctor_id": 1,
          "ranges_id": 4,
          "results": 48,
          "date": "9/10/2017"
        },
        {
          "patient_id": 5,
          "doctor_id": 1,
          "ranges_id": 5,
          "results": 48,
          "date": "9/10/2017"
        },
        {
          "patient_id": 5,
          "doctor_id": 1,
          "ranges_id": 6,
          "results": 88,
          "date": "9/10/2017"
        },
        {
          "patient_id": 5,
          "doctor_id": 1,
          "ranges_id": 7,
          "results": 18,
          "date": "9/10/2017"
        },
        {
          "patient_id": 5,
          "doctor_id": 1,
          "ranges_id": 8,
          "results": 48,
          "date": "9/10/2017"
        },
        {
          "patient_id": 5,
          "doctor_id": 1,
          "ranges_id": 9,
          "results": 18,
          "date": "9/10/2017"
        },
        {
          "patient_id": 5,
          "doctor_id": 1,
          "ranges_id": 10,
          "results": 68,
          "date": "9/10/2017"
        },
        {
          "patient_id": 1,
          "doctor_id": 1,
          "ranges_id": 1,
          "results": 74,
          "date": "6/14/2017"
        },
        {
          "patient_id": 1,
          "doctor_id": 1,
          "ranges_id": 2,
          "results": 27,
          "date": "6/14/2017"
        },
        {
          "patient_id": 1,
          "doctor_id": 1,
          "ranges_id": 3,
          "results": 65,
          "date": "6/14/2017"
        },
        {
          "patient_id": 1,
          "doctor_id": 1,
          "ranges_id": 4,
          "results": 49,
          "date": "6/14/2017"
        },
        {
          "patient_id": 1,
          "doctor_id": 1,
          "ranges_id": 5,
          "results": 40,
          "date": "6/14/2017"
        },
        {
          "patient_id": 1,
          "doctor_id": 1,
          "ranges_id": 6,
          "results": 88,
          "date": "6/14/2017"
        },
        {
          "patient_id": 1,
          "doctor_id": 1,
          "ranges_id": 7,
          "results": 17,
          "date": "6/14/2017"
        },
        {
          "patient_id": 1,
          "doctor_id": 1,
          "ranges_id": 8,
          "results": 40,
          "date": "6/14/2017"
        },
        {
          "patient_id": 1,
          "doctor_id": 1,
          "ranges_id": 9,
          "results": 18,
          "date": "6/14/2017"
        },
        {
          "patient_id": 1,
          "doctor_id": 1,
          "ranges_id": 10,
          "results": 65,
          "date": "6/14/2017"
        },
        {
          "patient_id": 2,
          "doctor_id": 1,
          "ranges_id": 1,
          "results": 64,
          "date": "6/13/2017"
        },
        {
          "patient_id": 2,
          "doctor_id": 1,
          "ranges_id": 2,
          "results": 24,
          "date": "6/13/2017"
        },
        {
          "patient_id": 2,
          "doctor_id": 1,
          "ranges_id": 3,
          "results": 72,
          "date": "6/13/2017"
        },
        {
          "patient_id": 2,
          "doctor_id": 1,
          "ranges_id": 4,
          "results": 84,
          "date": "6/13/2017"
        },
        {
          "patient_id": 2,
          "doctor_id": 1,
          "ranges_id": 5,
          "results": 47,
          "date": "6/13/2017"
        },
        {
          "patient_id": 2,
          "doctor_id": 1,
          "ranges_id": 6,
          "results": 16,
          "date": "6/13/2017"
        },
        {
          "patient_id": 2,
          "doctor_id": 1,
          "ranges_id": 7,
          "results": 27,
          "date": "6/13/2017"
        },
        {
          "patient_id": 2,
          "doctor_id": 1,
          "ranges_id": 8,
          "results": 42,
          "date": "6/13/2017"
        },
        {
          "patient_id": 2,
          "doctor_id": 1,
          "ranges_id": 9,
          "results": 90,
          "date": "6/13/2017"
        },
        {
          "patient_id": 2,
          "doctor_id": 1,
          "ranges_id": 10,
          "results": 84,
          "date": "6/13/2017"
        },
        {
          "patient_id": 3,
          "doctor_id": 1,
          "ranges_id": 1,
          "results": 76,
          "date": "6/12/2017"
        },
        {
          "patient_id": 3,
          "doctor_id": 1,
          "ranges_id": 2,
          "results": 32,
          "date": "6/12/2017"
        },
        {
          "patient_id": 3,
          "doctor_id": 1,
          "ranges_id": 3,
          "results": 68,
          "date": "6/12/2017"
        },
        {
          "patient_id": 3,
          "doctor_id": 1,
          "ranges_id": 4,
          "results": 47,
          "date": "6/12/2017"
        },
        {
          "patient_id": 3,
          "doctor_id": 1,
          "ranges_id": 5,
          "results": 39,
          "date": "6/12/2017"
        },
        {
          "patient_id": 3,
          "doctor_id": 1,
          "ranges_id": 6,
          "results": 86,
          "date": "6/12/2017"
        },
        {
          "patient_id": 3,
          "doctor_id": 1,
          "ranges_id": 7,
          "results": 12,
          "date": "6/12/2017"
        },
        {
          "patient_id": 3,
          "doctor_id": 1,
          "ranges_id": 8,
          "results": 45,
          "date": "6/12/2017"
        },
        {
          "patient_id": 3,
          "doctor_id": 1,
          "ranges_id": 9,
          "results": 21,
          "date": "6/12/2017"
        },
        {
          "patient_id": 3,
          "doctor_id": 1,
          "ranges_id": 10,
          "results": 66,
          "date": "6/12/2017"
        },
        {
          "patient_id": 4,
          "doctor_id": 1,
          "ranges_id": 1,
          "results": 47,
          "date": "6/11/2017"
        },
        {
          "patient_id": 4,
          "doctor_id": 1,
          "ranges_id": 2,
          "results": 34,
          "date": "6/11/2017"
        },
        {
          "patient_id": 4,
          "doctor_id": 1,
          "ranges_id": 3,
          "results": 60,
          "date": "6/11/2017"
        },
        {
          "patient_id": 4,
          "doctor_id": 1,
          "ranges_id": 4,
          "results": 87,
          "date": "6/11/2017"
        },
        {
          "patient_id": 4,
          "doctor_id": 1,
          "ranges_id": 5,
          "results": 62,
          "date": "6/11/2017"
        },
        {
          "patient_id": 4,
          "doctor_id": 1,
          "ranges_id": 6,
          "results": 87,
          "date": "6/11/2017"
        },
        {
          "patient_id": 4,
          "doctor_id": 1,
          "ranges_id": 7,
          "results": 19,
          "date": "6/11/2017"
        },
        {
          "patient_id": 4,
          "doctor_id": 1,
          "ranges_id": 8,
          "results": 45,
          "date": "6/11/2017"
        },
        {
          "patient_id": 4,
          "doctor_id": 1,
          "ranges_id": 9,
          "results": 54,
          "date": "6/11/2017"
        },
        {
          "patient_id": 4,
          "doctor_id": 1,
          "ranges_id": 10,
          "results": 76,
          "date": "6/11/2017"
        },
        {
          "patient_id": 5,
          "doctor_id": 1,
          "ranges_id": 1,
          "results": 18,
          "date": "6/10/2017"
        },
        {
          "patient_id": 5,
          "doctor_id": 1,
          "ranges_id": 2,
          "results": 28,
          "date": "6/10/2017"
        },
        {
          "patient_id": 5,
          "doctor_id": 1,
          "ranges_id": 3,
          "results": 68,
          "date": "6/10/2017"
        },
        {
          "patient_id": 5,
          "doctor_id": 1,
          "ranges_id": 4,
          "results": 48,
          "date": "6/10/2017"
        },
        {
          "patient_id": 5,
          "doctor_id": 1,
          "ranges_id": 5,
          "results": 48,
          "date": "6/10/2017"
        },
        {
          "patient_id": 5,
          "doctor_id": 1,
          "ranges_id": 6,
          "results": 88,
          "date": "6/10/2017"
        },
        {
          "patient_id": 5,
          "doctor_id": 1,
          "ranges_id": 7,
          "results": 18,
          "date": "6/10/2017"
        },
        {
          "patient_id": 5,
          "doctor_id": 1,
          "ranges_id": 8,
          "results": 48,
          "date": "6/10/2017"
        },
        {
          "patient_id": 5,
          "doctor_id": 1,
          "ranges_id": 9,
          "results": 18,
          "date": "6/10/2017"
        },
        {
          "patient_id": 5,
          "doctor_id": 1,
          "ranges_id": 10,
          "results": 68,
          "date": "6/10/2017"
        },
        {
          "patient_id": 1,
          "doctor_id": 1,
          "ranges_id": 1,
          "results": 74,
          "date": "3/14/2017"
        },
        {
          "patient_id": 1,
          "doctor_id": 1,
          "ranges_id": 2,
          "results": 27,
          "date": "3/14/2017"
        },
        {
          "patient_id": 1,
          "doctor_id": 1,
          "ranges_id": 3,
          "results": 65,
          "date": "3/14/2017"
        },
        {
          "patient_id": 1,
          "doctor_id": 1,
          "ranges_id": 4,
          "results": 49,
          "date": "3/14/2017"
        },
        {
          "patient_id": 1,
          "doctor_id": 1,
          "ranges_id": 5,
          "results": 40,
          "date": "3/14/2017"
        },
        {
          "patient_id": 1,
          "doctor_id": 1,
          "ranges_id": 6,
          "results": 88,
          "date": "3/14/2017"
        },
        {
          "patient_id": 1,
          "doctor_id": 1,
          "ranges_id": 7,
          "results": 17,
          "date": "3/14/2017"
        },
        {
          "patient_id": 1,
          "doctor_id": 1,
          "ranges_id": 8,
          "results": 40,
          "date": "3/14/2017"
        },
        {
          "patient_id": 1,
          "doctor_id": 1,
          "ranges_id": 9,
          "results": 18,
          "date": "3/14/2017"
        },
        {
          "patient_id": 1,
          "doctor_id": 1,
          "ranges_id": 10,
          "results": 65,
          "date": "3/14/2017"
        },
        {
          "patient_id": 2,
          "doctor_id": 1,
          "ranges_id": 1,
          "results": 64,
          "date": "3/13/2017"
        },
        {
          "patient_id": 2,
          "doctor_id": 1,
          "ranges_id": 2,
          "results": 24,
          "date": "3/13/2017"
        },
        {
          "patient_id": 2,
          "doctor_id": 1,
          "ranges_id": 3,
          "results": 72,
          "date": "3/13/2017"
        },
        {
          "patient_id": 2,
          "doctor_id": 1,
          "ranges_id": 4,
          "results": 84,
          "date": "3/13/2017"
        },
        {
          "patient_id": 2,
          "doctor_id": 1,
          "ranges_id": 5,
          "results": 47,
          "date": "3/13/2017"
        },
        {
          "patient_id": 2,
          "doctor_id": 1,
          "ranges_id": 6,
          "results": 16,
          "date": "3/13/2017"
        },
        {
          "patient_id": 2,
          "doctor_id": 1,
          "ranges_id": 7,
          "results": 27,
          "date": "3/13/2017"
        },
        {
          "patient_id": 2,
          "doctor_id": 1,
          "ranges_id": 8,
          "results": 42,
          "date": "3/13/2017"
        },
        {
          "patient_id": 2,
          "doctor_id": 1,
          "ranges_id": 9,
          "results": 90,
          "date": "3/13/2017"
        },
        {
          "patient_id": 2,
          "doctor_id": 1,
          "ranges_id": 10,
          "results": 84,
          "date": "3/13/2017"
        },
        {
          "patient_id": 3,
          "doctor_id": 1,
          "ranges_id": 1,
          "results": 76,
          "date": "3/12/2017"
        },
        {
          "patient_id": 3,
          "doctor_id": 1,
          "ranges_id": 2,
          "results": 32,
          "date": "3/12/2017"
        },
        {
          "patient_id": 3,
          "doctor_id": 1,
          "ranges_id": 3,
          "results": 68,
          "date": "3/12/2017"
        },
        {
          "patient_id": 3,
          "doctor_id": 1,
          "ranges_id": 4,
          "results": 47,
          "date": "3/12/2017"
        },
        {
          "patient_id": 3,
          "doctor_id": 1,
          "ranges_id": 5,
          "results": 39,
          "date": "3/12/2017"
        },
        {
          "patient_id": 3,
          "doctor_id": 1,
          "ranges_id": 6,
          "results": 86,
          "date": "3/12/2017"
        },
        {
          "patient_id": 3,
          "doctor_id": 1,
          "ranges_id": 7,
          "results": 12,
          "date": "3/12/2017"
        },
        {
          "patient_id": 3,
          "doctor_id": 1,
          "ranges_id": 8,
          "results": 45,
          "date": "3/12/2017"
        },
        {
          "patient_id": 3,
          "doctor_id": 1,
          "ranges_id": 9,
          "results": 21,
          "date": "3/12/2017"
        },
        {
          "patient_id": 3,
          "doctor_id": 1,
          "ranges_id": 10,
          "results": 66,
          "date": "3/12/2017"
        },
        {
          "patient_id": 4,
          "doctor_id": 1,
          "ranges_id": 1,
          "results": 47,
          "date": "3/11/2017"
        },
        {
          "patient_id": 4,
          "doctor_id": 1,
          "ranges_id": 2,
          "results": 34,
          "date": "3/11/2017"
        },
        {
          "patient_id": 4,
          "doctor_id": 1,
          "ranges_id": 3,
          "results": 60,
          "date": "3/11/2017"
        },
        {
          "patient_id": 4,
          "doctor_id": 1,
          "ranges_id": 4,
          "results": 87,
          "date": "3/11/2017"
        },
        {
          "patient_id": 4,
          "doctor_id": 1,
          "ranges_id": 5,
          "results": 62,
          "date": "3/11/2017"
        },
        {
          "patient_id": 4,
          "doctor_id": 1,
          "ranges_id": 6,
          "results": 87,
          "date": "3/11/2017"
        },
        {
          "patient_id": 4,
          "doctor_id": 1,
          "ranges_id": 7,
          "results": 19,
          "date": "3/11/2017"
        },
        {
          "patient_id": 4,
          "doctor_id": 1,
          "ranges_id": 8,
          "results": 45,
          "date": "3/11/2017"
        },
        {
          "patient_id": 4,
          "doctor_id": 1,
          "ranges_id": 9,
          "results": 54,
          "date": "3/11/2017"
        },
        {
          "patient_id": 4,
          "doctor_id": 1,
          "ranges_id": 10,
          "results": 76,
          "date": "3/11/2017"
        },
        {
          "patient_id": 5,
          "doctor_id": 1,
          "ranges_id": 1,
          "results": 18,
          "date": "3/10/2017"
        },
        {
          "patient_id": 5,
          "doctor_id": 1,
          "ranges_id": 2,
          "results": 28,
          "date": "3/10/2017"
        },
        {
          "patient_id": 5,
          "doctor_id": 1,
          "ranges_id": 3,
          "results": 68,
          "date": "3/10/2017"
        },
        {
          "patient_id": 5,
          "doctor_id": 1,
          "ranges_id": 4,
          "results": 48,
          "date": "3/10/2017"
        },
        {
          "patient_id": 5,
          "doctor_id": 1,
          "ranges_id": 5,
          "results": 48,
          "date": "3/10/2017"
        },
        {
          "patient_id": 5,
          "doctor_id": 1,
          "ranges_id": 6,
          "results": 88,
          "date": "3/10/2017"
        },
        {
          "patient_id": 5,
          "doctor_id": 1,
          "ranges_id": 7,
          "results": 18,
          "date": "3/10/2017"
        },
        {
          "patient_id": 5,
          "doctor_id": 1,
          "ranges_id": 8,
          "results": 48,
          "date": "3/10/2017"
        },
        {
          "patient_id": 5,
          "doctor_id": 1,
          "ranges_id": 9,
          "results": 18,
          "date": "3/10/2017"
        },
        {
          "patient_id": 5,
          "doctor_id": 1,
          "ranges_id": 10,
          "results": 68,
          "date": "3/10/2017"
        }
      ])
  });
};
