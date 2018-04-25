
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('notes').del()
    .then(function () {
      // Inserts seed entries
      return knex('notes').insert([
        {
          "doctor_id": 2,
          "patient_id": 4,
          "detail": "You have been responding well to the treatment but I'd still like to schedule a follow-up next week. When Would work best for you?",
          "date": "2014-03-08T09:59:43 +07:00"
        },
        {
          "doctor_id": 2,
          "patient_id": 4,
          "detail": "sit incididunt commodo proident officia mollit ex laboris proident ut tempor dolore labore aliqua ea",
          "date": "2017-08-21T09:40:00 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 1,
          "detail": "You have been responding well to the treatment but I'd still like to schedule a follow-up next week. When Would work best for you?",
          "date": "2015-04-27T12:37:40 +07:00"
        },
        {
          "doctor_id": 2,
          "patient_id": 4,
          "detail": "officia id excepteur duis nulla adipisicing mollit enim officia adipisicing eiusmod aliqua officia commodo dolor",
          "date": "2014-04-13T06:22:09 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": null,
          "detail": "Patient is having adverse reactions to the vicodin. Let's try oxycodone.",
          "date": "2016-12-05T02:46:19 +07:00"
        },
        {
          "doctor_id": 2,
          "patient_id": 4,
          "detail": "laborum id non reprehenderit est aliqua aute cupidatat incididunt nostrud reprehenderit duis amet tempor est",
          "date": "2014-12-04T06:21:53 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": null,
          "detail": "Schedule another appoinment for Friday Jan 8th.",
          "date": "2016-01-04T01:02:21 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 3,
          "detail": "I'd like to schedule an MRI. When are you free?",
          "date": "2016-02-26T06:30:48 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 2,
          "detail": "Your X-Rays have come back, are you free today to go over them?",
          "date": "2015-05-16T11:00:58 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 1,
          "detail": "Don't forget anniversary with the wife tomorrow!",
          "date": "2015-09-02T10:37:17 +07:00"
        }
      ]);
    });
};
