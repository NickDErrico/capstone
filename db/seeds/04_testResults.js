
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('results').del()
    .then(function () {
      // Inserts seed entries
      return knex('results').insert([
        {
          "patient_id": 2,
          "doctor_id": 1,
          "ranges_id": 5,
          "results": 5,
          "date": "2016-01-15T02:22:52 +07:00"
        },
        {
          "patient_id": 1,
          "doctor_id": 1,
          "ranges_id": 3,
          "results": 94,
          "date": "2015-04-28T08:30:04 +07:00"
        },
        {
          "patient_id": 1,
          "doctor_id": 1,
          "ranges_id": 5,
          "results": 87,
          "date": "2017-05-26T04:03:31 +07:00"
        },
        {
          "patient_id": 4,
          "doctor_id": 2,
          "ranges_id": 3,
          "results": 97,
          "date": "2014-12-27T10:16:09 +07:00"
        },
        {
          "patient_id": 3,
          "doctor_id": 1,
          "ranges_id": 7,
          "results": 88,
          "date": "2018-01-10T05:01:01 +07:00"
        },
        {
          "patient_id": 4,
          "doctor_id": 2,
          "ranges_id": 7,
          "results": 73,
          "date": "2018-04-14T08:29:23 +07:00"
        },
        {
          "patient_id": 5,
          "doctor_id": 2,
          "ranges_id": 2,
          "results": 87,
          "date": "2014-11-01T10:11:56 +07:00"
        },
        {
          "patient_id": 2,
          "doctor_id": 1,
          "ranges_id": 4,
          "results": 69,
          "date": "2015-05-21T07:18:47 +07:00"
        },
        {
          "patient_id": 2,
          "doctor_id": 1,
          "ranges_id": 9,
          "results": 61,
          "date": "2014-02-25T09:32:56 +07:00"
        },
        {
          "patient_id": 5,
          "doctor_id": 2,
          "ranges_id": 10,
          "results": 27,
          "date": "2015-02-17T04:12:11 +07:00"
        },
        {
          "patient_id": 4,
          "doctor_id": 2,
          "ranges_id": 3,
          "results": 81,
          "date": "2017-04-30T11:13:21 +07:00"
        },
        {
          "patient_id": 2,
          "doctor_id": 1,
          "ranges_id": 5,
          "results": 5,
          "date": "2015-10-27T11:05:07 +07:00"
        },
        {
          "patient_id": 2,
          "doctor_id": 1,
          "ranges_id": 7,
          "results": 83,
          "date": "2017-08-31T09:04:37 +07:00"
        },
        {
          "patient_id": 3,
          "doctor_id": 1,
          "ranges_id": 4,
          "results": 52,
          "date": "2017-10-02T11:08:44 +07:00"
        },
        {
          "patient_id": 4,
          "doctor_id": 2,
          "ranges_id": 9,
          "results": 37,
          "date": "2014-05-28T10:53:34 +07:00"
        },
        {
          "patient_id": 3,
          "doctor_id": 1,
          "ranges_id": 4,
          "results": 70,
          "date": "2015-12-02T09:04:45 +07:00"
        },
        {
          "patient_id": 3,
          "doctor_id": 1,
          "ranges_id": 9,
          "results": 8,
          "date": "2017-09-12T05:47:57 +07:00"
        },
        {
          "patient_id": 3,
          "doctor_id": 1,
          "ranges_id": 8,
          "results": 54,
          "date": "2017-07-24T07:44:12 +07:00"
        },
        {
          "patient_id": 2,
          "doctor_id": 1,
          "ranges_id": 1,
          "results": 99,
          "date": "2017-10-09T12:44:51 +07:00"
        },
        {
          "patient_id": 5,
          "doctor_id": 2,
          "ranges_id": 9,
          "results": 91,
          "date": "2016-02-15T05:03:39 +07:00"
        },
        {
          "patient_id": 4,
          "doctor_id": 2,
          "ranges_id": 10,
          "results": 100,
          "date": "2014-11-23T11:21:47 +07:00"
        },
        {
          "patient_id": 4,
          "doctor_id": 2,
          "ranges_id": 3,
          "results": 97,
          "date": "2017-12-08T12:45:10 +07:00"
        },
        {
          "patient_id": 5,
          "doctor_id": 2,
          "ranges_id": 8,
          "results": 67,
          "date": "2015-12-11T11:33:40 +07:00"
        },
        {
          "patient_id": 5,
          "doctor_id": 2,
          "ranges_id": 7,
          "results": 6,
          "date": "2015-03-17T08:48:28 +07:00"
        },
        {
          "patient_id": 1,
          "doctor_id": 1,
          "ranges_id": 4,
          "results": 17,
          "date": "2018-04-03T11:53:00 +07:00"
        },
        {
          "patient_id": 2,
          "doctor_id": 1,
          "ranges_id": 5,
          "results": 42,
          "date": "2016-05-11T11:07:51 +07:00"
        },
        {
          "patient_id": 4,
          "doctor_id": 2,
          "ranges_id": 3,
          "results": 55,
          "date": "2016-04-13T07:37:36 +07:00"
        },
        {
          "patient_id": 1,
          "doctor_id": 1,
          "ranges_id": 8,
          "results": 11,
          "date": "2014-02-10T03:16:47 +07:00"
        },
        {
          "patient_id": 5,
          "doctor_id": 2,
          "ranges_id": 9,
          "results": 64,
          "date": "2018-02-21T06:50:27 +07:00"
        },
        {
          "patient_id": 5,
          "doctor_id": 2,
          "ranges_id": 10,
          "results": 79,
          "date": "2017-08-26T06:50:08 +07:00"
        },
        {
          "patient_id": 2,
          "doctor_id": 1,
          "ranges_id": 1,
          "results": 2,
          "date": "2017-06-05T01:59:11 +07:00"
        },
        {
          "patient_id": 3,
          "doctor_id": 1,
          "ranges_id": 1,
          "results": 73,
          "date": "2017-01-23T02:05:04 +07:00"
        },
        {
          "patient_id": 3,
          "doctor_id": 1,
          "ranges_id": 6,
          "results": 18,
          "date": "2017-09-06T09:08:51 +07:00"
        },
        {
          "patient_id": 3,
          "doctor_id": 1,
          "ranges_id": 7,
          "results": 42,
          "date": "2017-10-31T02:54:53 +07:00"
        },
        {
          "patient_id": 1,
          "doctor_id": 1,
          "ranges_id": 2,
          "results": 59,
          "date": "2014-10-02T02:49:16 +07:00"
        },
        {
          "patient_id": 3,
          "doctor_id": 1,
          "ranges_id": 2,
          "results": 68,
          "date": "2014-06-07T07:13:14 +07:00"
        },
        {
          "patient_id": 2,
          "doctor_id": 1,
          "ranges_id": 2,
          "results": 59,
          "date": "2017-07-24T08:20:47 +07:00"
        },
        {
          "patient_id": 2,
          "doctor_id": 1,
          "ranges_id": 5,
          "results": 84,
          "date": "2016-01-13T07:49:53 +07:00"
        },
        {
          "patient_id": 4,
          "doctor_id": 2,
          "ranges_id": 2,
          "results": 68,
          "date": "2018-01-30T10:18:49 +07:00"
        },
        {
          "patient_id": 3,
          "doctor_id": 1,
          "ranges_id": 9,
          "results": 91,
          "date": "2014-04-07T12:24:07 +07:00"
        },
        {
          "patient_id": 3,
          "doctor_id": 1,
          "ranges_id": 5,
          "results": 10,
          "date": "2016-09-07T08:06:33 +07:00"
        },
        {
          "patient_id": 1,
          "doctor_id": 1,
          "ranges_id": 1,
          "results": 90,
          "date": "2014-11-06T05:31:54 +07:00"
        },
        {
          "patient_id": 1,
          "doctor_id": 1,
          "ranges_id": 10,
          "results": 9,
          "date": "2017-08-08T06:40:15 +07:00"
        },
        {
          "patient_id": 4,
          "doctor_id": 2,
          "ranges_id": 7,
          "results": 28,
          "date": "2014-03-21T04:31:25 +07:00"
        },
        {
          "patient_id": 4,
          "doctor_id": 2,
          "ranges_id": 5,
          "results": 32,
          "date": "2015-03-17T03:10:40 +07:00"
        },
        {
          "patient_id": 3,
          "doctor_id": 1,
          "ranges_id": 10,
          "results": 72,
          "date": "2016-01-19T07:55:06 +07:00"
        },
        {
          "patient_id": 1,
          "doctor_id": 1,
          "ranges_id": 1,
          "results": 16,
          "date": "2015-06-14T05:04:01 +07:00"
        },
        {
          "patient_id": 4,
          "doctor_id": 2,
          "ranges_id": 3,
          "results": 64,
          "date": "2017-03-13T07:57:56 +07:00"
        },
        {
          "patient_id": 1,
          "doctor_id": 1,
          "ranges_id": 4,
          "results": 99,
          "date": "2015-01-30T08:06:38 +07:00"
        },
        {
          "patient_id": 2,
          "doctor_id": 1,
          "ranges_id": 4,
          "results": 98,
          "date": "2017-05-12T08:38:38 +07:00"
        },
        {
          "patient_id": 5,
          "doctor_id": 2,
          "ranges_id": 10,
          "results": 11,
          "date": "2016-07-20T12:10:12 +07:00"
        },
        {
          "patient_id": 4,
          "doctor_id": 2,
          "ranges_id": 2,
          "results": 13,
          "date": "2014-07-09T12:45:37 +07:00"
        },
        {
          "patient_id": 1,
          "doctor_id": 1,
          "ranges_id": 7,
          "results": 49,
          "date": "2015-08-29T11:45:04 +07:00"
        },
        {
          "patient_id": 5,
          "doctor_id": 2,
          "ranges_id": 8,
          "results": 34,
          "date": "2014-02-26T04:11:10 +07:00"
        },
        {
          "patient_id": 2,
          "doctor_id": 1,
          "ranges_id": 8,
          "results": 73,
          "date": "2017-09-19T12:14:23 +07:00"
        },
        {
          "patient_id": 1,
          "doctor_id": 1,
          "ranges_id": 10,
          "results": 62,
          "date": "2017-11-24T12:29:00 +07:00"
        },
        {
          "patient_id": 2,
          "doctor_id": 1,
          "ranges_id": 1,
          "results": 58,
          "date": "2015-02-03T07:23:25 +07:00"
        },
        {
          "patient_id": 1,
          "doctor_id": 1,
          "ranges_id": 3,
          "results": 14,
          "date": "2017-04-19T08:30:24 +07:00"
        },
        {
          "patient_id": 4,
          "doctor_id": 2,
          "ranges_id": 3,
          "results": 36,
          "date": "2016-06-11T06:38:34 +07:00"
        },
        {
          "patient_id": 4,
          "doctor_id": 2,
          "ranges_id": 7,
          "results": 13,
          "date": "2015-10-15T05:05:27 +07:00"
        },
        {
          "patient_id": 3,
          "doctor_id": 1,
          "ranges_id": 9,
          "results": 44,
          "date": "2015-01-30T05:56:28 +07:00"
        },
        {
          "patient_id": 1,
          "doctor_id": 1,
          "ranges_id": 1,
          "results": 1,
          "date": "2017-09-28T11:47:16 +07:00"
        },
        {
          "patient_id": 5,
          "doctor_id": 2,
          "ranges_id": 1,
          "results": 85,
          "date": "2014-01-04T06:43:41 +07:00"
        },
        {
          "patient_id": 2,
          "doctor_id": 1,
          "ranges_id": 8,
          "results": 41,
          "date": "2017-10-01T12:13:32 +07:00"
        },
        {
          "patient_id": 2,
          "doctor_id": 1,
          "ranges_id": 10,
          "results": 81,
          "date": "2016-02-19T06:32:51 +07:00"
        },
        {
          "patient_id": 4,
          "doctor_id": 2,
          "ranges_id": 2,
          "results": 15,
          "date": "2014-09-22T05:12:45 +07:00"
        },
        {
          "patient_id": 4,
          "doctor_id": 2,
          "ranges_id": 5,
          "results": 75,
          "date": "2014-03-31T08:09:08 +07:00"
        },
        {
          "patient_id": 2,
          "doctor_id": 1,
          "ranges_id": 4,
          "results": 4,
          "date": "2014-01-11T05:10:13 +07:00"
        },
        {
          "patient_id": 2,
          "doctor_id": 1,
          "ranges_id": 8,
          "results": 96,
          "date": "2014-07-06T02:03:45 +07:00"
        },
        {
          "patient_id": 2,
          "doctor_id": 1,
          "ranges_id": 7,
          "results": 41,
          "date": "2014-03-29T08:00:56 +07:00"
        },
        {
          "patient_id": 5,
          "doctor_id": 2,
          "ranges_id": 5,
          "results": 77,
          "date": "2017-09-29T06:41:06 +07:00"
        },
        {
          "patient_id": 3,
          "doctor_id": 1,
          "ranges_id": 3,
          "results": 10,
          "date": "2015-05-25T11:33:22 +07:00"
        },
        {
          "patient_id": 2,
          "doctor_id": 1,
          "ranges_id": 4,
          "results": 53,
          "date": "2018-02-17T09:52:14 +07:00"
        },
        {
          "patient_id": 3,
          "doctor_id": 1,
          "ranges_id": 2,
          "results": 52,
          "date": "2017-05-25T10:50:26 +07:00"
        },
        {
          "patient_id": 1,
          "doctor_id": 1,
          "ranges_id": 3,
          "results": 22,
          "date": "2014-08-23T12:27:20 +07:00"
        },
        {
          "patient_id": 4,
          "doctor_id": 2,
          "ranges_id": 3,
          "results": 16,
          "date": "2015-03-30T07:31:21 +07:00"
        },
        {
          "patient_id": 4,
          "doctor_id": 2,
          "ranges_id": 10,
          "results": 65,
          "date": "2017-01-25T06:28:12 +07:00"
        },
        {
          "patient_id": 5,
          "doctor_id": 2,
          "ranges_id": 7,
          "results": 71,
          "date": "2017-05-18T12:10:28 +07:00"
        },
        {
          "patient_id": 3,
          "doctor_id": 1,
          "ranges_id": 8,
          "results": 35,
          "date": "2014-12-15T07:29:46 +07:00"
        },
        {
          "patient_id": 2,
          "doctor_id": 1,
          "ranges_id": 4,
          "results": 72,
          "date": "2017-10-02T07:30:01 +07:00"
        },
        {
          "patient_id": 1,
          "doctor_id": 1,
          "ranges_id": 1,
          "results": 52,
          "date": "2014-10-18T07:31:52 +07:00"
        },
        {
          "patient_id": 4,
          "doctor_id": 2,
          "ranges_id": 7,
          "results": 62,
          "date": "2018-03-26T01:54:02 +07:00"
        },
        {
          "patient_id": 5,
          "doctor_id": 2,
          "ranges_id": 10,
          "results": 87,
          "date": "2014-04-27T08:53:08 +07:00"
        },
        {
          "patient_id": 5,
          "doctor_id": 2,
          "ranges_id": 3,
          "results": 9,
          "date": "2015-05-05T09:26:21 +07:00"
        },
        {
          "patient_id": 5,
          "doctor_id": 2,
          "ranges_id": 6,
          "results": 58,
          "date": "2014-11-30T11:29:56 +07:00"
        },
        {
          "patient_id": 5,
          "doctor_id": 2,
          "ranges_id": 3,
          "results": 59,
          "date": "2014-03-19T06:07:57 +07:00"
        },
        {
          "patient_id": 3,
          "doctor_id": 1,
          "ranges_id": 1,
          "results": 68,
          "date": "2015-06-22T12:11:09 +07:00"
        },
        {
          "patient_id": 3,
          "doctor_id": 1,
          "ranges_id": 9,
          "results": 31,
          "date": "2015-12-24T10:56:18 +07:00"
        },
        {
          "patient_id": 1,
          "doctor_id": 1,
          "ranges_id": 4,
          "results": 79,
          "date": "2015-09-03T07:57:45 +07:00"
        },
        {
          "patient_id": 3,
          "doctor_id": 1,
          "ranges_id": 3,
          "results": 25,
          "date": "2014-07-31T05:55:42 +07:00"
        },
        {
          "patient_id": 2,
          "doctor_id": 1,
          "ranges_id": 1,
          "results": 10,
          "date": "2014-12-04T09:27:21 +07:00"
        },
        {
          "patient_id": 5,
          "doctor_id": 2,
          "ranges_id": 2,
          "results": 60,
          "date": "2015-03-10T01:09:25 +07:00"
        },
        {
          "patient_id": 4,
          "doctor_id": 2,
          "ranges_id": 5,
          "results": 17,
          "date": "2017-09-05T04:36:57 +07:00"
        },
        {
          "patient_id": 5,
          "doctor_id": 2,
          "ranges_id": 9,
          "results": 96,
          "date": "2016-10-30T02:44:11 +07:00"
        },
        {
          "patient_id": 5,
          "doctor_id": 2,
          "ranges_id": 5,
          "results": 37,
          "date": "2018-01-14T08:30:39 +07:00"
        },
        {
          "patient_id": 1,
          "doctor_id": 1,
          "ranges_id": 5,
          "results": 43,
          "date": "2014-08-07T07:42:29 +07:00"
        },
        {
          "patient_id": 5,
          "doctor_id": 2,
          "ranges_id": 8,
          "results": 47,
          "date": "2014-05-16T02:32:52 +07:00"
        },
        {
          "patient_id": 1,
          "doctor_id": 1,
          "ranges_id": 8,
          "results": 81,
          "date": "2016-08-25T08:04:02 +07:00"
        },
        {
          "patient_id": 3,
          "doctor_id": 1,
          "ranges_id": 5,
          "results": 43,
          "date": "2017-03-26T03:58:56 +07:00"
        },
        {
          "patient_id": 5,
          "doctor_id": 2,
          "ranges_id": 5,
          "results": 94,
          "date": "2015-08-21T10:52:59 +07:00"
        },
        {
          "patient_id": 4,
          "doctor_id": 2,
          "ranges_id": 8,
          "results": 92,
          "date": "2015-03-17T10:02:05 +07:00"
        },
        {
          "patient_id": 4,
          "doctor_id": 2,
          "ranges_id": 3,
          "results": 83,
          "date": "2014-12-18T10:39:14 +07:00"
        },
        {
          "patient_id": 2,
          "doctor_id": 1,
          "ranges_id": 8,
          "results": 3,
          "date": "2014-09-06T01:07:56 +07:00"
        },
        {
          "patient_id": 4,
          "doctor_id": 2,
          "ranges_id": 8,
          "results": 54,
          "date": "2015-10-20T12:53:05 +07:00"
        },
        {
          "patient_id": 3,
          "doctor_id": 1,
          "ranges_id": 9,
          "results": 80,
          "date": "2015-11-15T05:47:48 +07:00"
        },
        {
          "patient_id": 5,
          "doctor_id": 2,
          "ranges_id": 6,
          "results": 96,
          "date": "2014-04-29T04:03:03 +07:00"
        },
        {
          "patient_id": 4,
          "doctor_id": 2,
          "ranges_id": 7,
          "results": 45,
          "date": "2016-04-05T11:52:22 +07:00"
        },
        {
          "patient_id": 4,
          "doctor_id": 2,
          "ranges_id": 2,
          "results": 61,
          "date": "2018-02-28T06:11:41 +07:00"
        },
        {
          "patient_id": 5,
          "doctor_id": 2,
          "ranges_id": 3,
          "results": 8,
          "date": "2017-03-18T01:08:51 +07:00"
        },
        {
          "patient_id": 3,
          "doctor_id": 1,
          "ranges_id": 9,
          "results": 97,
          "date": "2015-02-13T12:56:24 +07:00"
        },
        {
          "patient_id": 1,
          "doctor_id": 1,
          "ranges_id": 7,
          "results": 35,
          "date": "2017-08-02T12:35:54 +07:00"
        },
        {
          "patient_id": 2,
          "doctor_id": 1,
          "ranges_id": 4,
          "results": 38,
          "date": "2016-07-09T11:16:22 +07:00"
        },
        {
          "patient_id": 2,
          "doctor_id": 1,
          "ranges_id": 4,
          "results": 82,
          "date": "2014-03-13T05:13:40 +07:00"
        },
        {
          "patient_id": 2,
          "doctor_id": 1,
          "ranges_id": 5,
          "results": 3,
          "date": "2016-03-16T05:42:20 +07:00"
        },
        {
          "patient_id": 1,
          "doctor_id": 1,
          "ranges_id": 2,
          "results": 9,
          "date": "2017-04-15T01:39:37 +07:00"
        },
        {
          "patient_id": 4,
          "doctor_id": 2,
          "ranges_id": 9,
          "results": 78,
          "date": "2017-03-01T09:45:16 +07:00"
        },
        {
          "patient_id": 3,
          "doctor_id": 1,
          "ranges_id": 8,
          "results": 17,
          "date": "2016-03-06T10:22:35 +07:00"
        },
        {
          "patient_id": 5,
          "doctor_id": 2,
          "ranges_id": 8,
          "results": 76,
          "date": "2016-06-23T09:44:08 +07:00"
        },
        {
          "patient_id": 4,
          "doctor_id": 2,
          "ranges_id": 4,
          "results": 27,
          "date": "2017-06-01T10:56:31 +07:00"
        },
        {
          "patient_id": 2,
          "doctor_id": 1,
          "ranges_id": 4,
          "results": 65,
          "date": "2014-02-04T01:27:43 +07:00"
        },
        {
          "patient_id": 2,
          "doctor_id": 1,
          "ranges_id": 6,
          "results": 33,
          "date": "2015-06-11T05:25:24 +07:00"
        },
        {
          "patient_id": 5,
          "doctor_id": 2,
          "ranges_id": 6,
          "results": 2,
          "date": "2017-08-03T11:19:19 +07:00"
        },
        {
          "patient_id": 4,
          "doctor_id": 2,
          "ranges_id": 9,
          "results": 27,
          "date": "2017-10-22T07:38:17 +07:00"
        },
        {
          "patient_id": 2,
          "doctor_id": 1,
          "ranges_id": 7,
          "results": 1,
          "date": "2016-09-05T07:03:46 +07:00"
        },
        {
          "patient_id": 2,
          "doctor_id": 1,
          "ranges_id": 8,
          "results": 87,
          "date": "2017-06-22T11:10:51 +07:00"
        },
        {
          "patient_id": 2,
          "doctor_id": 1,
          "ranges_id": 3,
          "results": 14,
          "date": "2015-07-10T04:08:39 +07:00"
        },
        {
          "patient_id": 5,
          "doctor_id": 2,
          "ranges_id": 4,
          "results": 84,
          "date": "2014-02-26T01:54:07 +07:00"
        },
        {
          "patient_id": 5,
          "doctor_id": 2,
          "ranges_id": 8,
          "results": 18,
          "date": "2017-11-29T02:12:04 +07:00"
        },
        {
          "patient_id": 4,
          "doctor_id": 2,
          "ranges_id": 9,
          "results": 94,
          "date": "2014-10-01T06:21:09 +07:00"
        },
        {
          "patient_id": 4,
          "doctor_id": 2,
          "ranges_id": 6,
          "results": 4,
          "date": "2016-10-23T07:56:13 +07:00"
        },
        {
          "patient_id": 2,
          "doctor_id": 1,
          "ranges_id": 8,
          "results": 17,
          "date": "2016-11-26T12:47:27 +07:00"
        },
        {
          "patient_id": 2,
          "doctor_id": 1,
          "ranges_id": 5,
          "results": 11,
          "date": "2016-07-25T08:27:28 +07:00"
        },
        {
          "patient_id": 4,
          "doctor_id": 2,
          "ranges_id": 9,
          "results": 70,
          "date": "2015-12-30T10:07:05 +07:00"
        },
        {
          "patient_id": 2,
          "doctor_id": 1,
          "ranges_id": 8,
          "results": 32,
          "date": "2017-07-07T01:45:42 +07:00"
        },
        {
          "patient_id": 3,
          "doctor_id": 1,
          "ranges_id": 10,
          "results": 49,
          "date": "2014-11-18T06:26:43 +07:00"
        },
        {
          "patient_id": 3,
          "doctor_id": 1,
          "ranges_id": 10,
          "results": 25,
          "date": "2018-02-11T11:27:55 +07:00"
        },
        {
          "patient_id": 4,
          "doctor_id": 2,
          "ranges_id": 1,
          "results": 45,
          "date": "2014-07-29T02:18:09 +07:00"
        },
        {
          "patient_id": 2,
          "doctor_id": 1,
          "ranges_id": 8,
          "results": 82,
          "date": "2015-06-04T04:07:51 +07:00"
        },
        {
          "patient_id": 3,
          "doctor_id": 1,
          "ranges_id": 3,
          "results": 92,
          "date": "2017-08-17T04:28:53 +07:00"
        },
        {
          "patient_id": 4,
          "doctor_id": 2,
          "ranges_id": 3,
          "results": 75,
          "date": "2014-07-24T04:33:45 +07:00"
        },
        {
          "patient_id": 1,
          "doctor_id": 1,
          "ranges_id": 8,
          "results": 52,
          "date": "2015-12-20T10:13:30 +07:00"
        },
        {
          "patient_id": 5,
          "doctor_id": 2,
          "ranges_id": 5,
          "results": 8,
          "date": "2017-06-16T08:34:52 +07:00"
        },
        {
          "patient_id": 1,
          "doctor_id": 1,
          "ranges_id": 10,
          "results": 44,
          "date": "2016-04-11T08:30:51 +07:00"
        },
        {
          "patient_id": 4,
          "doctor_id": 2,
          "ranges_id": 6,
          "results": 89,
          "date": "2015-10-23T09:06:46 +07:00"
        },
        {
          "patient_id": 4,
          "doctor_id": 2,
          "ranges_id": 8,
          "results": 20,
          "date": "2017-11-16T04:36:15 +07:00"
        },
        {
          "patient_id": 1,
          "doctor_id": 1,
          "ranges_id": 9,
          "results": 36,
          "date": "2016-04-18T10:59:38 +07:00"
        },
        {
          "patient_id": 1,
          "doctor_id": 1,
          "ranges_id": 5,
          "results": 46,
          "date": "2017-01-14T03:11:01 +07:00"
        },
        {
          "patient_id": 1,
          "doctor_id": 1,
          "ranges_id": 7,
          "results": 85,
          "date": "2017-11-10T01:51:45 +07:00"
        },
        {
          "patient_id": 5,
          "doctor_id": 2,
          "ranges_id": 9,
          "results": 47,
          "date": "2015-04-14T06:04:00 +07:00"
        },
        {
          "patient_id": 3,
          "doctor_id": 1,
          "ranges_id": 6,
          "results": 35,
          "date": "2017-07-01T01:08:28 +07:00"
        },
        {
          "patient_id": 1,
          "doctor_id": 1,
          "ranges_id": 2,
          "results": 30,
          "date": "2017-02-15T06:56:39 +07:00"
        },
        {
          "patient_id": 4,
          "doctor_id": 2,
          "ranges_id": 9,
          "results": 36,
          "date": "2016-12-06T05:47:20 +07:00"
        },
        {
          "patient_id": 1,
          "doctor_id": 1,
          "ranges_id": 6,
          "results": 51,
          "date": "2017-04-07T12:26:33 +07:00"
        },
        {
          "patient_id": 5,
          "doctor_id": 2,
          "ranges_id": 1,
          "results": 100,
          "date": "2015-01-12T05:57:42 +07:00"
        },
        {
          "patient_id": 2,
          "doctor_id": 1,
          "ranges_id": 2,
          "results": 44,
          "date": "2016-05-09T05:16:09 +07:00"
        },
        {
          "patient_id": 3,
          "doctor_id": 1,
          "ranges_id": 9,
          "results": 10,
          "date": "2014-08-22T11:38:11 +07:00"
        },
        {
          "patient_id": 1,
          "doctor_id": 1,
          "ranges_id": 10,
          "results": 47,
          "date": "2014-04-15T01:11:05 +07:00"
        },
        {
          "patient_id": 5,
          "doctor_id": 2,
          "ranges_id": 5,
          "results": 16,
          "date": "2016-03-05T05:47:41 +07:00"
        },
        {
          "patient_id": 2,
          "doctor_id": 1,
          "ranges_id": 3,
          "results": 36,
          "date": "2017-12-05T05:13:28 +07:00"
        },
        {
          "patient_id": 4,
          "doctor_id": 2,
          "ranges_id": 5,
          "results": 38,
          "date": "2016-09-27T07:55:11 +07:00"
        },
        {
          "patient_id": 5,
          "doctor_id": 2,
          "ranges_id": 8,
          "results": 87,
          "date": "2017-07-03T10:25:05 +07:00"
        },
        {
          "patient_id": 4,
          "doctor_id": 2,
          "ranges_id": 3,
          "results": 49,
          "date": "2017-08-04T12:50:13 +07:00"
        },
        {
          "patient_id": 2,
          "doctor_id": 1,
          "ranges_id": 9,
          "results": 2,
          "date": "2014-02-22T09:30:59 +07:00"
        },
        {
          "patient_id": 2,
          "doctor_id": 1,
          "ranges_id": 4,
          "results": 90,
          "date": "2014-09-30T09:50:29 +07:00"
        },
        {
          "patient_id": 1,
          "doctor_id": 1,
          "ranges_id": 7,
          "results": 53,
          "date": "2018-02-13T09:53:35 +07:00"
        },
        {
          "patient_id": 4,
          "doctor_id": 2,
          "ranges_id": 1,
          "results": 75,
          "date": "2016-05-17T08:44:03 +07:00"
        },
        {
          "patient_id": 4,
          "doctor_id": 2,
          "ranges_id": 5,
          "results": 5,
          "date": "2015-02-10T01:49:12 +07:00"
        },
        {
          "patient_id": 3,
          "doctor_id": 1,
          "ranges_id": 10,
          "results": 75,
          "date": "2016-12-20T02:39:38 +07:00"
        },
        {
          "patient_id": 5,
          "doctor_id": 2,
          "ranges_id": 10,
          "results": 70,
          "date": "2014-10-24T05:31:28 +07:00"
        },
        {
          "patient_id": 3,
          "doctor_id": 1,
          "ranges_id": 6,
          "results": 63,
          "date": "2014-10-30T06:51:40 +07:00"
        },
        {
          "patient_id": 2,
          "doctor_id": 1,
          "ranges_id": 3,
          "results": 8,
          "date": "2015-05-05T09:44:53 +07:00"
        },
        {
          "patient_id": 3,
          "doctor_id": 1,
          "ranges_id": 6,
          "results": 2,
          "date": "2014-12-20T03:46:43 +07:00"
        },
        {
          "patient_id": 1,
          "doctor_id": 1,
          "ranges_id": 8,
          "results": 73,
          "date": "2018-03-25T03:54:58 +07:00"
        },
        {
          "patient_id": 2,
          "doctor_id": 1,
          "ranges_id": 5,
          "results": 84,
          "date": "2015-09-03T08:20:11 +07:00"
        },
        {
          "patient_id": 3,
          "doctor_id": 1,
          "ranges_id": 10,
          "results": 46,
          "date": "2017-09-05T04:02:41 +07:00"
        },
        {
          "patient_id": 1,
          "doctor_id": 1,
          "ranges_id": 4,
          "results": 3,
          "date": "2017-03-09T07:10:56 +07:00"
        },
        {
          "patient_id": 5,
          "doctor_id": 2,
          "ranges_id": 1,
          "results": 15,
          "date": "2014-10-21T10:36:29 +07:00"
        },
        {
          "patient_id": 1,
          "doctor_id": 1,
          "ranges_id": 9,
          "results": 9,
          "date": "2016-04-04T08:41:08 +07:00"
        },
        {
          "patient_id": 3,
          "doctor_id": 1,
          "ranges_id": 3,
          "results": 44,
          "date": "2018-03-24T03:31:05 +07:00"
        },
        {
          "patient_id": 5,
          "doctor_id": 2,
          "ranges_id": 2,
          "results": 65,
          "date": "2014-03-02T09:43:21 +07:00"
        },
        {
          "patient_id": 2,
          "doctor_id": 1,
          "ranges_id": 5,
          "results": 99,
          "date": "2017-11-04T08:26:13 +07:00"
        },
        {
          "patient_id": 3,
          "doctor_id": 1,
          "ranges_id": 4,
          "results": 62,
          "date": "2015-01-08T12:06:50 +07:00"
        },
        {
          "patient_id": 4,
          "doctor_id": 2,
          "ranges_id": 9,
          "results": 40,
          "date": "2015-07-30T12:48:29 +07:00"
        },
        {
          "patient_id": 3,
          "doctor_id": 1,
          "ranges_id": 9,
          "results": 10,
          "date": "2017-06-18T01:57:19 +07:00"
        },
        {
          "patient_id": 3,
          "doctor_id": 1,
          "ranges_id": 5,
          "results": 86,
          "date": "2017-11-16T03:04:50 +07:00"
        },
        {
          "patient_id": 2,
          "doctor_id": 1,
          "ranges_id": 4,
          "results": 21,
          "date": "2016-01-19T01:49:09 +07:00"
        },
        {
          "patient_id": 1,
          "doctor_id": 1,
          "ranges_id": 10,
          "results": 28,
          "date": "2015-07-27T01:57:19 +07:00"
        },
        {
          "patient_id": 5,
          "doctor_id": 2,
          "ranges_id": 4,
          "results": 22,
          "date": "2015-08-20T04:38:09 +07:00"
        },
        {
          "patient_id": 1,
          "doctor_id": 1,
          "ranges_id": 3,
          "results": 5,
          "date": "2015-04-18T11:36:27 +07:00"
        },
        {
          "patient_id": 3,
          "doctor_id": 1,
          "ranges_id": 4,
          "results": 3,
          "date": "2015-06-05T12:36:27 +07:00"
        },
        {
          "patient_id": 3,
          "doctor_id": 1,
          "ranges_id": 7,
          "results": 54,
          "date": "2017-10-22T02:13:46 +07:00"
        },
        {
          "patient_id": 2,
          "doctor_id": 1,
          "ranges_id": 7,
          "results": 62,
          "date": "2017-06-04T03:11:30 +07:00"
        },
        {
          "patient_id": 4,
          "doctor_id": 2,
          "ranges_id": 10,
          "results": 78,
          "date": "2018-03-26T03:29:42 +07:00"
        },
        {
          "patient_id": 4,
          "doctor_id": 2,
          "ranges_id": 8,
          "results": 32,
          "date": "2015-11-26T08:25:39 +07:00"
        },
        {
          "patient_id": 1,
          "doctor_id": 1,
          "ranges_id": 3,
          "results": 41,
          "date": "2014-05-25T03:26:27 +07:00"
        },
        {
          "patient_id": 5,
          "doctor_id": 2,
          "ranges_id": 2,
          "results": 14,
          "date": "2016-09-06T11:35:06 +07:00"
        },
        {
          "patient_id": 3,
          "doctor_id": 1,
          "ranges_id": 10,
          "results": 39,
          "date": "2017-02-02T05:40:46 +07:00"
        },
        {
          "patient_id": 3,
          "doctor_id": 1,
          "ranges_id": 4,
          "results": 14,
          "date": "2015-04-29T04:22:59 +07:00"
        },
        {
          "patient_id": 4,
          "doctor_id": 2,
          "ranges_id": 4,
          "results": 74,
          "date": "2017-02-06T02:58:36 +07:00"
        },
        {
          "patient_id": 1,
          "doctor_id": 1,
          "ranges_id": 10,
          "results": 64,
          "date": "2015-06-19T10:11:38 +07:00"
        }
      ])
  });
};
