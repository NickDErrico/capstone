
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
        },
        {
          "doctor_id": 1,
          "patient_id": 1,
          "ranges_id": 7,
          "results": 65,
          "date": "2015-07-20T02:50:53 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 2,
          "ranges_id": 5,
          "results": 23,
          "date": "2015-10-23T02:29:55 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 3,
          "ranges_id": 4,
          "results": 97,
          "date": "2016-07-28T12:44:46 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 2,
          "ranges_id": 7,
          "results": 62,
          "date": "2014-07-03T04:52:45 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 2,
          "ranges_id": 1,
          "results": 68,
          "date": "2014-02-16T10:41:42 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 2,
          "ranges_id": 3,
          "results": 86,
          "date": "2015-06-08T03:52:12 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 3,
          "ranges_id": 8,
          "results": 30,
          "date": "2014-10-31T06:54:38 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 1,
          "ranges_id": 1,
          "results": 23,
          "date": "2014-11-11T06:38:44 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 3,
          "ranges_id": 10,
          "results": 28,
          "date": "2018-02-19T02:02:51 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 1,
          "ranges_id": 2,
          "results": 3,
          "date": "2016-11-25T12:48:19 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 2,
          "ranges_id": 10,
          "results": 53,
          "date": "2014-03-20T01:27:44 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 3,
          "ranges_id": 3,
          "results": 7,
          "date": "2016-05-07T06:44:23 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 1,
          "ranges_id": 10,
          "results": 32,
          "date": "2016-03-31T08:53:31 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 2,
          "ranges_id": 5,
          "results": 23,
          "date": "2016-04-10T03:29:27 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 1,
          "ranges_id": 5,
          "results": 8,
          "date": "2015-10-25T03:50:59 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 2,
          "ranges_id": 1,
          "results": 12,
          "date": "2017-05-05T03:52:40 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 3,
          "ranges_id": 9,
          "results": 71,
          "date": "2015-09-17T08:08:14 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 2,
          "ranges_id": 4,
          "results": 80,
          "date": "2017-06-25T09:14:30 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 2,
          "ranges_id": 3,
          "results": 27,
          "date": "2015-11-07T11:37:23 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 3,
          "ranges_id": 9,
          "results": 38,
          "date": "2015-01-20T12:05:38 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 2,
          "ranges_id": 6,
          "results": 19,
          "date": "2015-12-03T05:32:48 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 3,
          "ranges_id": 9,
          "results": 58,
          "date": "2017-06-20T12:43:17 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 3,
          "ranges_id": 8,
          "results": 35,
          "date": "2014-09-26T12:40:10 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 1,
          "ranges_id": 5,
          "results": 1,
          "date": "2017-10-25T09:02:48 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 3,
          "ranges_id": 6,
          "results": 28,
          "date": "2017-03-24T12:50:06 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 1,
          "ranges_id": 6,
          "results": 32,
          "date": "2015-10-24T05:18:31 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 1,
          "ranges_id": 6,
          "results": 31,
          "date": "2014-10-04T02:40:26 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 3,
          "ranges_id": 1,
          "results": 89,
          "date": "2014-09-16T12:33:53 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 3,
          "ranges_id": 5,
          "results": 7,
          "date": "2015-12-13T10:09:33 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 1,
          "ranges_id": 4,
          "results": 73,
          "date": "2017-01-19T08:50:56 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 1,
          "ranges_id": 2,
          "results": 60,
          "date": "2015-08-11T07:15:23 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 1,
          "ranges_id": 5,
          "results": 39,
          "date": "2015-01-02T10:40:57 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 2,
          "ranges_id": 9,
          "results": 38,
          "date": "2014-09-18T08:46:13 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 3,
          "ranges_id": 3,
          "results": 97,
          "date": "2014-05-08T09:24:53 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 1,
          "ranges_id": 6,
          "results": 88,
          "date": "2017-01-27T10:00:19 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 3,
          "ranges_id": 4,
          "results": 82,
          "date": "2014-12-04T05:17:16 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 1,
          "ranges_id": 2,
          "results": 100,
          "date": "2014-11-02T10:26:35 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 3,
          "ranges_id": 7,
          "results": 82,
          "date": "2016-01-30T12:03:41 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 3,
          "ranges_id": 10,
          "results": 30,
          "date": "2015-03-07T12:11:24 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 1,
          "ranges_id": 1,
          "results": 87,
          "date": "2014-06-24T07:27:11 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 2,
          "ranges_id": 5,
          "results": 3,
          "date": "2016-05-27T09:25:50 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 1,
          "ranges_id": 10,
          "results": 97,
          "date": "2016-12-08T11:21:53 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 1,
          "ranges_id": 6,
          "results": 25,
          "date": "2014-02-10T11:55:08 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 1,
          "ranges_id": 8,
          "results": 92,
          "date": "2017-07-12T12:00:05 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 2,
          "ranges_id": 3,
          "results": 60,
          "date": "2018-03-25T10:28:25 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 2,
          "ranges_id": 10,
          "results": 32,
          "date": "2017-01-07T02:09:05 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 2,
          "ranges_id": 2,
          "results": 71,
          "date": "2014-03-29T03:43:28 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 1,
          "ranges_id": 1,
          "results": 93,
          "date": "2015-12-29T11:18:49 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 3,
          "ranges_id": 10,
          "results": 93,
          "date": "2018-01-20T06:26:38 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 1,
          "ranges_id": 10,
          "results": 27,
          "date": "2016-05-12T02:57:08 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 3,
          "ranges_id": 1,
          "results": 69,
          "date": "2015-09-19T09:12:08 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 3,
          "ranges_id": 5,
          "results": 44,
          "date": "2018-03-31T01:36:29 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 1,
          "ranges_id": 7,
          "results": 82,
          "date": "2017-09-16T03:45:36 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 2,
          "ranges_id": 6,
          "results": 35,
          "date": "2017-08-15T10:40:17 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 2,
          "ranges_id": 7,
          "results": 30,
          "date": "2018-01-29T04:38:11 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 2,
          "ranges_id": 7,
          "results": 1,
          "date": "2017-12-12T07:12:09 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 1,
          "ranges_id": 3,
          "results": 21,
          "date": "2017-03-13T03:39:28 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 2,
          "ranges_id": 9,
          "results": 54,
          "date": "2014-07-14T03:35:30 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 3,
          "ranges_id": 5,
          "results": 57,
          "date": "2014-10-26T11:16:08 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 1,
          "ranges_id": 6,
          "results": 76,
          "date": "2017-11-06T09:09:33 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 3,
          "ranges_id": 9,
          "results": 73,
          "date": "2016-01-10T10:09:55 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 1,
          "ranges_id": 9,
          "results": 6,
          "date": "2014-09-23T09:03:47 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 2,
          "ranges_id": 10,
          "results": 78,
          "date": "2014-02-22T05:38:45 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 2,
          "ranges_id": 5,
          "results": 25,
          "date": "2015-08-25T10:34:29 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 1,
          "ranges_id": 2,
          "results": 78,
          "date": "2015-11-08T06:12:51 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 3,
          "ranges_id": 4,
          "results": 86,
          "date": "2016-10-10T11:43:32 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 3,
          "ranges_id": 10,
          "results": 80,
          "date": "2017-01-02T01:09:04 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 1,
          "ranges_id": 4,
          "results": 94,
          "date": "2018-04-28T07:55:17 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 3,
          "ranges_id": 1,
          "results": 100,
          "date": "2015-01-04T09:44:29 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 2,
          "ranges_id": 6,
          "results": 29,
          "date": "2014-04-17T05:28:14 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 2,
          "ranges_id": 10,
          "results": 80,
          "date": "2015-07-13T06:46:30 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 3,
          "ranges_id": 1,
          "results": 35,
          "date": "2017-02-18T10:59:43 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 2,
          "ranges_id": 7,
          "results": 94,
          "date": "2017-10-11T04:52:57 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 1,
          "ranges_id": 5,
          "results": 16,
          "date": "2015-08-19T12:55:13 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 3,
          "ranges_id": 3,
          "results": 64,
          "date": "2017-04-14T08:53:50 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 2,
          "ranges_id": 10,
          "results": 77,
          "date": "2016-07-15T04:12:58 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 1,
          "ranges_id": 10,
          "results": 56,
          "date": "2015-03-03T09:22:28 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 2,
          "ranges_id": 1,
          "results": 1,
          "date": "2015-11-26T10:19:18 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 1,
          "ranges_id": 2,
          "results": 64,
          "date": "2017-04-16T01:45:00 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 1,
          "ranges_id": 7,
          "results": 41,
          "date": "2017-05-25T03:01:10 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 3,
          "ranges_id": 2,
          "results": 47,
          "date": "2014-04-26T05:39:24 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 1,
          "ranges_id": 9,
          "results": 10,
          "date": "2017-03-19T04:58:56 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 1,
          "ranges_id": 1,
          "results": 57,
          "date": "2015-06-06T08:59:55 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 3,
          "ranges_id": 1,
          "results": 2,
          "date": "2015-07-23T07:40:36 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 2,
          "ranges_id": 4,
          "results": 97,
          "date": "2016-11-17T06:58:55 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 1,
          "ranges_id": 8,
          "results": 73,
          "date": "2017-11-15T07:11:05 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 1,
          "ranges_id": 7,
          "results": 60,
          "date": "2015-07-24T01:07:54 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 1,
          "ranges_id": 9,
          "results": 83,
          "date": "2016-10-26T06:03:03 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 3,
          "ranges_id": 10,
          "results": 34,
          "date": "2015-11-18T03:33:11 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 3,
          "ranges_id": 7,
          "results": 85,
          "date": "2016-03-30T10:58:28 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 2,
          "ranges_id": 7,
          "results": 58,
          "date": "2015-04-28T09:44:46 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 1,
          "ranges_id": 1,
          "results": 35,
          "date": "2017-11-20T05:36:26 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 3,
          "ranges_id": 10,
          "results": 30,
          "date": "2014-01-21T04:53:36 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 1,
          "ranges_id": 3,
          "results": 87,
          "date": "2016-06-23T04:53:27 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 3,
          "ranges_id": 7,
          "results": 20,
          "date": "2015-05-20T06:16:47 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 1,
          "ranges_id": 8,
          "results": 35,
          "date": "2018-04-19T05:14:36 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 2,
          "ranges_id": 2,
          "results": 83,
          "date": "2016-03-08T09:51:12 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 3,
          "ranges_id": 8,
          "results": 30,
          "date": "2017-04-07T09:37:46 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 1,
          "ranges_id": 4,
          "results": 96,
          "date": "2018-03-30T09:42:11 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 3,
          "ranges_id": 8,
          "results": 71,
          "date": "2014-03-22T01:35:06 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 2,
          "ranges_id": 1,
          "results": 99,
          "date": "2016-06-04T01:42:06 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 1,
          "ranges_id": 2,
          "results": 20,
          "date": "2017-02-18T06:07:10 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 1,
          "ranges_id": 10,
          "results": 3,
          "date": "2017-06-09T10:30:27 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 1,
          "ranges_id": 5,
          "results": 92,
          "date": "2015-06-08T10:25:56 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 2,
          "ranges_id": 6,
          "results": 72,
          "date": "2015-11-30T06:26:06 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 3,
          "ranges_id": 2,
          "results": 41,
          "date": "2014-09-09T03:05:48 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 2,
          "ranges_id": 10,
          "results": 20,
          "date": "2015-05-29T04:17:58 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 1,
          "ranges_id": 8,
          "results": 100,
          "date": "2015-09-03T02:08:25 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 1,
          "ranges_id": 2,
          "results": 38,
          "date": "2014-11-20T03:04:16 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 3,
          "ranges_id": 4,
          "results": 11,
          "date": "2015-08-15T12:15:15 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 2,
          "ranges_id": 8,
          "results": 31,
          "date": "2014-04-01T09:45:07 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 3,
          "ranges_id": 8,
          "results": 5,
          "date": "2014-10-11T11:43:53 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 2,
          "ranges_id": 5,
          "results": 20,
          "date": "2014-09-14T02:10:45 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 3,
          "ranges_id": 10,
          "results": 96,
          "date": "2018-01-25T02:28:50 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 2,
          "ranges_id": 7,
          "results": 4,
          "date": "2018-05-17T05:20:51 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 2,
          "ranges_id": 6,
          "results": 94,
          "date": "2016-10-17T10:02:51 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 1,
          "ranges_id": 10,
          "results": 43,
          "date": "2014-11-15T04:42:23 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 3,
          "ranges_id": 10,
          "results": 55,
          "date": "2017-10-29T07:40:25 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 2,
          "ranges_id": 2,
          "results": 60,
          "date": "2018-05-19T10:07:18 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 1,
          "ranges_id": 10,
          "results": 69,
          "date": "2014-08-27T08:18:56 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 2,
          "ranges_id": 8,
          "results": 6,
          "date": "2015-08-04T11:44:53 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 3,
          "ranges_id": 5,
          "results": 4,
          "date": "2017-10-30T12:08:45 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 3,
          "ranges_id": 5,
          "results": 69,
          "date": "2014-01-05T08:50:37 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 1,
          "ranges_id": 4,
          "results": 65,
          "date": "2017-08-22T09:22:07 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 3,
          "ranges_id": 8,
          "results": 27,
          "date": "2015-10-24T12:25:31 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 1,
          "ranges_id": 9,
          "results": 49,
          "date": "2017-05-02T06:35:19 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 3,
          "ranges_id": 9,
          "results": 13,
          "date": "2018-02-11T11:31:24 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 3,
          "ranges_id": 6,
          "results": 41,
          "date": "2015-04-12T07:19:06 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 1,
          "ranges_id": 4,
          "results": 24,
          "date": "2014-07-14T05:10:33 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 2,
          "ranges_id": 5,
          "results": 51,
          "date": "2014-03-27T03:39:34 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 3,
          "ranges_id": 7,
          "results": 13,
          "date": "2018-02-16T09:32:10 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 2,
          "ranges_id": 5,
          "results": 90,
          "date": "2016-02-29T04:58:11 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 3,
          "ranges_id": 4,
          "results": 30,
          "date": "2015-03-21T08:46:20 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 1,
          "ranges_id": 8,
          "results": 21,
          "date": "2018-03-11T03:41:18 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 1,
          "ranges_id": 1,
          "results": 44,
          "date": "2016-01-03T04:57:14 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 2,
          "ranges_id": 8,
          "results": 7,
          "date": "2018-01-16T01:00:48 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 1,
          "ranges_id": 8,
          "results": 60,
          "date": "2018-01-30T06:04:08 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 3,
          "ranges_id": 1,
          "results": 93,
          "date": "2015-08-24T01:20:34 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 2,
          "ranges_id": 10,
          "results": 35,
          "date": "2016-03-05T04:22:55 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 3,
          "ranges_id": 3,
          "results": 99,
          "date": "2017-04-11T11:49:28 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 1,
          "ranges_id": 2,
          "results": 33,
          "date": "2016-12-28T08:04:57 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 1,
          "ranges_id": 2,
          "results": 61,
          "date": "2014-12-18T01:03:10 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 3,
          "ranges_id": 10,
          "results": 45,
          "date": "2014-10-02T09:00:10 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 1,
          "ranges_id": 9,
          "results": 1,
          "date": "2015-08-19T11:33:28 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 1,
          "ranges_id": 8,
          "results": 53,
          "date": "2015-10-27T10:39:18 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 1,
          "ranges_id": 2,
          "results": 47,
          "date": "2015-02-04T02:33:46 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 1,
          "ranges_id": 2,
          "results": 34,
          "date": "2016-02-15T07:09:21 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 2,
          "ranges_id": 9,
          "results": 76,
          "date": "2014-09-12T06:50:54 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 1,
          "ranges_id": 10,
          "results": 3,
          "date": "2015-03-21T03:03:23 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 3,
          "ranges_id": 3,
          "results": 5,
          "date": "2017-04-18T06:02:33 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 3,
          "ranges_id": 7,
          "results": 65,
          "date": "2016-08-18T06:37:16 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 1,
          "ranges_id": 10,
          "results": 33,
          "date": "2015-12-16T11:57:56 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 3,
          "ranges_id": 2,
          "results": 40,
          "date": "2014-10-15T01:04:16 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 2,
          "ranges_id": 3,
          "results": 99,
          "date": "2014-04-08T01:23:29 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 3,
          "ranges_id": 10,
          "results": 77,
          "date": "2017-06-12T05:39:08 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 2,
          "ranges_id": 4,
          "results": 73,
          "date": "2015-02-08T02:34:59 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 2,
          "ranges_id": 1,
          "results": 98,
          "date": "2014-12-10T02:29:57 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 3,
          "ranges_id": 8,
          "results": 2,
          "date": "2018-02-04T04:45:00 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 2,
          "ranges_id": 3,
          "results": 22,
          "date": "2018-03-04T01:25:33 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 3,
          "ranges_id": 7,
          "results": 93,
          "date": "2014-09-14T08:12:42 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 1,
          "ranges_id": 9,
          "results": 88,
          "date": "2017-04-22T06:20:40 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 1,
          "ranges_id": 9,
          "results": 2,
          "date": "2017-05-05T12:22:01 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 1,
          "ranges_id": 7,
          "results": 58,
          "date": "2014-03-28T03:45:31 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 2,
          "ranges_id": 1,
          "results": 78,
          "date": "2015-12-05T12:18:20 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 2,
          "ranges_id": 1,
          "results": 29,
          "date": "2016-05-23T12:55:15 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 3,
          "ranges_id": 1,
          "results": 40,
          "date": "2015-08-26T07:51:50 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 3,
          "ranges_id": 2,
          "results": 82,
          "date": "2015-05-03T04:38:43 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 2,
          "ranges_id": 7,
          "results": 81,
          "date": "2018-03-15T11:57:55 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 3,
          "ranges_id": 1,
          "results": 5,
          "date": "2014-05-22T11:52:39 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 1,
          "ranges_id": 7,
          "results": 66,
          "date": "2017-11-19T04:44:58 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 1,
          "ranges_id": 3,
          "results": 91,
          "date": "2014-05-19T03:54:30 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 2,
          "ranges_id": 2,
          "results": 93,
          "date": "2016-07-18T08:18:43 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 2,
          "ranges_id": 6,
          "results": 57,
          "date": "2014-11-27T07:08:21 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 2,
          "ranges_id": 5,
          "results": 2,
          "date": "2017-06-22T12:15:07 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 2,
          "ranges_id": 1,
          "results": 49,
          "date": "2018-04-16T04:59:46 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 2,
          "ranges_id": 6,
          "results": 40,
          "date": "2016-01-24T04:17:02 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 3,
          "ranges_id": 4,
          "results": 5,
          "date": "2018-03-08T01:27:57 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 2,
          "ranges_id": 10,
          "results": 30,
          "date": "2014-04-03T02:01:26 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 1,
          "ranges_id": 4,
          "results": 78,
          "date": "2016-09-27T12:34:13 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 1,
          "ranges_id": 6,
          "results": 93,
          "date": "2018-04-30T12:07:53 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 3,
          "ranges_id": 3,
          "results": 80,
          "date": "2014-01-19T04:50:52 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 1,
          "ranges_id": 2,
          "results": 43,
          "date": "2015-12-03T05:20:20 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 1,
          "ranges_id": 10,
          "results": 37,
          "date": "2014-11-17T05:29:59 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 1,
          "ranges_id": 7,
          "results": 68,
          "date": "2016-04-19T06:22:12 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 2,
          "ranges_id": 7,
          "results": 26,
          "date": "2014-12-19T03:16:48 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 3,
          "ranges_id": 3,
          "results": 89,
          "date": "2014-08-05T03:42:56 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 2,
          "ranges_id": 4,
          "results": 5,
          "date": "2017-10-08T03:22:52 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 2,
          "ranges_id": 5,
          "results": 13,
          "date": "2016-12-20T08:21:03 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 1,
          "ranges_id": 9,
          "results": 16,
          "date": "2014-02-25T07:45:54 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 1,
          "ranges_id": 6,
          "results": 87,
          "date": "2014-11-28T11:27:34 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 2,
          "ranges_id": 5,
          "results": 66,
          "date": "2014-01-09T11:07:56 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 3,
          "ranges_id": 8,
          "results": 98,
          "date": "2015-04-22T02:07:01 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 2,
          "ranges_id": 4,
          "results": 25,
          "date": "2017-06-03T11:17:03 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 3,
          "ranges_id": 9,
          "results": 10,
          "date": "2017-09-28T11:29:56 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 2,
          "ranges_id": 4,
          "results": 73,
          "date": "2017-12-07T03:19:44 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 3,
          "ranges_id": 10,
          "results": 9,
          "date": "2018-02-14T03:21:06 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 3,
          "ranges_id": 8,
          "results": 89,
          "date": "2016-12-18T07:11:25 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 3,
          "ranges_id": 1,
          "results": 28,
          "date": "2015-09-02T06:28:03 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 2,
          "ranges_id": 10,
          "results": 6,
          "date": "2014-04-23T08:55:01 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 2,
          "ranges_id": 4,
          "results": 77,
          "date": "2017-01-23T11:37:15 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 2,
          "ranges_id": 10,
          "results": 71,
          "date": "2017-06-04T09:21:22 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 1,
          "ranges_id": 5,
          "results": 73,
          "date": "2014-02-03T01:02:29 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 3,
          "ranges_id": 9,
          "results": 87,
          "date": "2017-08-13T12:55:42 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 3,
          "ranges_id": 3,
          "results": 7,
          "date": "2016-10-09T11:59:59 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 3,
          "ranges_id": 7,
          "results": 50,
          "date": "2017-08-20T09:28:07 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 1,
          "ranges_id": 5,
          "results": 88,
          "date": "2015-02-14T01:05:19 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 1,
          "ranges_id": 10,
          "results": 16,
          "date": "2016-06-27T01:18:26 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 1,
          "ranges_id": 7,
          "results": 41,
          "date": "2016-06-30T02:44:35 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 1,
          "ranges_id": 7,
          "results": 81,
          "date": "2014-04-05T09:03:58 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 3,
          "ranges_id": 6,
          "results": 49,
          "date": "2017-01-07T02:17:53 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 1,
          "ranges_id": 5,
          "results": 28,
          "date": "2015-06-02T08:45:55 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 3,
          "ranges_id": 5,
          "results": 68,
          "date": "2017-09-17T03:02:04 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 2,
          "ranges_id": 2,
          "results": 70,
          "date": "2018-04-29T07:34:57 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 1,
          "ranges_id": 7,
          "results": 65,
          "date": "2015-02-11T06:21:43 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 1,
          "ranges_id": 1,
          "results": 37,
          "date": "2015-01-03T02:58:21 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 3,
          "ranges_id": 8,
          "results": 2,
          "date": "2015-04-20T10:48:19 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 1,
          "ranges_id": 3,
          "results": 74,
          "date": "2014-10-16T10:36:04 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 3,
          "ranges_id": 10,
          "results": 36,
          "date": "2016-03-19T07:16:04 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 3,
          "ranges_id": 5,
          "results": 54,
          "date": "2018-03-06T08:54:17 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 1,
          "ranges_id": 10,
          "results": 69,
          "date": "2015-01-22T06:17:17 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 1,
          "ranges_id": 3,
          "results": 43,
          "date": "2018-01-01T02:16:27 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 3,
          "ranges_id": 5,
          "results": 49,
          "date": "2016-09-12T03:33:55 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 1,
          "ranges_id": 4,
          "results": 39,
          "date": "2015-06-21T01:42:08 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 1,
          "ranges_id": 5,
          "results": 98,
          "date": "2018-02-10T03:38:02 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 2,
          "ranges_id": 7,
          "results": 69,
          "date": "2015-04-14T08:28:40 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 3,
          "ranges_id": 7,
          "results": 38,
          "date": "2017-04-05T02:37:40 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 3,
          "ranges_id": 5,
          "results": 52,
          "date": "2016-09-27T04:09:24 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 2,
          "ranges_id": 9,
          "results": 63,
          "date": "2016-05-20T12:33:34 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 2,
          "ranges_id": 10,
          "results": 24,
          "date": "2014-04-11T11:41:59 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 1,
          "ranges_id": 6,
          "results": 27,
          "date": "2018-02-17T11:00:02 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 1,
          "ranges_id": 9,
          "results": 99,
          "date": "2016-04-11T05:16:21 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 2,
          "ranges_id": 5,
          "results": 20,
          "date": "2014-01-29T05:40:29 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 1,
          "ranges_id": 7,
          "results": 49,
          "date": "2017-11-30T07:12:10 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 3,
          "ranges_id": 3,
          "results": 85,
          "date": "2015-02-09T09:11:49 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 3,
          "ranges_id": 4,
          "results": 43,
          "date": "2017-04-20T02:17:43 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 1,
          "ranges_id": 2,
          "results": 93,
          "date": "2014-04-12T11:23:31 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 2,
          "ranges_id": 5,
          "results": 95,
          "date": "2015-11-11T06:27:39 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 2,
          "ranges_id": 3,
          "results": 61,
          "date": "2015-10-04T06:37:50 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 3,
          "ranges_id": 4,
          "results": 31,
          "date": "2017-07-31T09:54:05 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 1,
          "ranges_id": 5,
          "results": 30,
          "date": "2014-12-17T01:37:16 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 1,
          "ranges_id": 8,
          "results": 21,
          "date": "2017-01-23T12:20:28 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 2,
          "ranges_id": 4,
          "results": 95,
          "date": "2017-03-12T04:53:17 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 2,
          "ranges_id": 7,
          "results": 41,
          "date": "2014-05-07T01:20:44 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 1,
          "ranges_id": 4,
          "results": 80,
          "date": "2014-12-05T10:32:49 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 1,
          "ranges_id": 5,
          "results": 56,
          "date": "2016-07-02T11:04:09 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 3,
          "ranges_id": 3,
          "results": 69,
          "date": "2015-04-05T11:05:55 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 2,
          "ranges_id": 7,
          "results": 91,
          "date": "2017-12-21T05:29:27 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 1,
          "ranges_id": 8,
          "results": 41,
          "date": "2015-06-14T10:37:57 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 1,
          "ranges_id": 9,
          "results": 97,
          "date": "2015-11-27T11:20:19 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 1,
          "ranges_id": 3,
          "results": 14,
          "date": "2015-12-12T05:19:23 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 3,
          "ranges_id": 7,
          "results": 89,
          "date": "2018-02-09T12:27:20 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 3,
          "ranges_id": 8,
          "results": 77,
          "date": "2016-12-08T08:56:22 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 1,
          "ranges_id": 4,
          "results": 41,
          "date": "2016-10-05T07:31:45 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 2,
          "ranges_id": 7,
          "results": 30,
          "date": "2017-03-15T02:18:07 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 2,
          "ranges_id": 7,
          "results": 39,
          "date": "2018-05-20T12:47:52 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 1,
          "ranges_id": 8,
          "results": 6,
          "date": "2017-11-21T07:46:57 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 3,
          "ranges_id": 6,
          "results": 73,
          "date": "2017-03-06T12:53:18 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 3,
          "ranges_id": 2,
          "results": 7,
          "date": "2014-12-17T09:59:08 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 3,
          "ranges_id": 5,
          "results": 52,
          "date": "2018-04-16T06:21:49 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 3,
          "ranges_id": 3,
          "results": 59,
          "date": "2017-08-08T07:48:37 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 2,
          "ranges_id": 4,
          "results": 48,
          "date": "2017-10-26T10:01:44 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 2,
          "ranges_id": 3,
          "results": 28,
          "date": "2017-09-11T09:01:07 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 2,
          "ranges_id": 7,
          "results": 5,
          "date": "2015-08-30T12:41:11 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 1,
          "ranges_id": 2,
          "results": 94,
          "date": "2015-12-13T10:55:33 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 2,
          "ranges_id": 2,
          "results": 16,
          "date": "2014-06-26T04:10:06 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 2,
          "ranges_id": 4,
          "results": 93,
          "date": "2015-04-20T12:31:19 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 2,
          "ranges_id": 6,
          "results": 49,
          "date": "2018-01-05T02:24:57 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 3,
          "ranges_id": 4,
          "results": 38,
          "date": "2016-12-18T07:25:13 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 1,
          "ranges_id": 5,
          "results": 25,
          "date": "2014-04-02T07:39:41 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 3,
          "ranges_id": 6,
          "results": 26,
          "date": "2015-06-11T04:22:12 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 2,
          "ranges_id": 3,
          "results": 2,
          "date": "2014-02-22T02:14:39 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 2,
          "ranges_id": 1,
          "results": 41,
          "date": "2014-01-03T02:36:47 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 2,
          "ranges_id": 10,
          "results": 73,
          "date": "2015-07-12T06:43:45 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 2,
          "ranges_id": 1,
          "results": 15,
          "date": "2016-09-01T06:58:37 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 1,
          "ranges_id": 9,
          "results": 49,
          "date": "2014-08-25T04:14:55 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 2,
          "ranges_id": 6,
          "results": 31,
          "date": "2017-06-24T10:50:19 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 1,
          "ranges_id": 7,
          "results": 88,
          "date": "2017-10-09T07:23:26 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 3,
          "ranges_id": 1,
          "results": 6,
          "date": "2017-01-09T05:54:10 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 1,
          "ranges_id": 9,
          "results": 34,
          "date": "2017-01-21T12:11:49 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 2,
          "ranges_id": 10,
          "results": 55,
          "date": "2014-08-29T05:54:17 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 3,
          "ranges_id": 4,
          "results": 29,
          "date": "2015-04-28T01:20:21 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 3,
          "ranges_id": 7,
          "results": 75,
          "date": "2016-09-11T01:04:57 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 3,
          "ranges_id": 2,
          "results": 78,
          "date": "2016-05-06T09:13:33 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 3,
          "ranges_id": 1,
          "results": 29,
          "date": "2015-11-29T03:47:37 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 3,
          "ranges_id": 4,
          "results": 8,
          "date": "2018-01-06T12:26:05 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 1,
          "ranges_id": 10,
          "results": 91,
          "date": "2015-06-20T12:12:20 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 3,
          "ranges_id": 10,
          "results": 26,
          "date": "2015-02-26T03:28:19 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 3,
          "ranges_id": 5,
          "results": 84,
          "date": "2016-10-11T12:04:11 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 1,
          "ranges_id": 6,
          "results": 7,
          "date": "2018-03-09T01:23:58 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 1,
          "ranges_id": 6,
          "results": 18,
          "date": "2015-12-23T12:16:01 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 2,
          "ranges_id": 1,
          "results": 62,
          "date": "2017-04-12T06:26:32 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 1,
          "ranges_id": 6,
          "results": 38,
          "date": "2014-03-23T03:10:06 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 1,
          "ranges_id": 4,
          "results": 36,
          "date": "2015-05-05T03:24:07 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 1,
          "ranges_id": 7,
          "results": 22,
          "date": "2014-07-15T07:16:46 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 1,
          "ranges_id": 6,
          "results": 57,
          "date": "2014-10-07T02:48:14 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 3,
          "ranges_id": 10,
          "results": 56,
          "date": "2015-12-04T03:53:55 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 3,
          "ranges_id": 7,
          "results": 37,
          "date": "2015-01-01T08:25:03 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 2,
          "ranges_id": 9,
          "results": 38,
          "date": "2017-03-13T02:35:43 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 1,
          "ranges_id": 3,
          "results": 100,
          "date": "2014-03-22T01:16:10 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 1,
          "ranges_id": 9,
          "results": 92,
          "date": "2014-11-24T01:08:01 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 3,
          "ranges_id": 8,
          "results": 43,
          "date": "2016-07-13T10:35:00 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 1,
          "ranges_id": 10,
          "results": 72,
          "date": "2014-01-19T07:08:16 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 1,
          "ranges_id": 9,
          "results": 91,
          "date": "2017-07-04T09:11:19 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 3,
          "ranges_id": 10,
          "results": 80,
          "date": "2014-08-20T02:10:30 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 1,
          "ranges_id": 8,
          "results": 41,
          "date": "2017-12-07T04:23:20 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 1,
          "ranges_id": 9,
          "results": 84,
          "date": "2014-03-12T04:34:34 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 1,
          "ranges_id": 5,
          "results": 39,
          "date": "2018-01-18T05:57:20 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 1,
          "ranges_id": 2,
          "results": 57,
          "date": "2014-03-31T11:18:26 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 3,
          "ranges_id": 2,
          "results": 68,
          "date": "2017-05-25T07:18:32 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 1,
          "ranges_id": 9,
          "results": 90,
          "date": "2016-07-11T05:57:32 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 3,
          "ranges_id": 7,
          "results": 37,
          "date": "2016-06-11T08:18:44 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 2,
          "ranges_id": 1,
          "results": 89,
          "date": "2016-01-04T09:40:47 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 3,
          "ranges_id": 10,
          "results": 29,
          "date": "2014-06-15T04:48:12 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 3,
          "ranges_id": 8,
          "results": 75,
          "date": "2014-01-31T05:33:44 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 2,
          "ranges_id": 8,
          "results": 49,
          "date": "2016-09-16T07:49:22 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 3,
          "ranges_id": 4,
          "results": 30,
          "date": "2015-11-04T01:15:46 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 2,
          "ranges_id": 2,
          "results": 18,
          "date": "2017-01-18T09:33:53 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 1,
          "ranges_id": 9,
          "results": 92,
          "date": "2017-08-24T12:29:20 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 1,
          "ranges_id": 10,
          "results": 63,
          "date": "2014-02-07T02:00:48 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 3,
          "ranges_id": 3,
          "results": 97,
          "date": "2017-05-20T08:13:29 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 1,
          "ranges_id": 4,
          "results": 25,
          "date": "2014-03-27T10:28:36 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 3,
          "ranges_id": 7,
          "results": 89,
          "date": "2016-07-17T08:35:06 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 1,
          "ranges_id": 8,
          "results": 50,
          "date": "2016-04-29T10:51:14 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 1,
          "ranges_id": 5,
          "results": 13,
          "date": "2017-04-04T06:26:23 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 1,
          "ranges_id": 2,
          "results": 21,
          "date": "2015-05-17T05:36:30 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 1,
          "ranges_id": 10,
          "results": 61,
          "date": "2018-03-06T02:24:54 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 3,
          "ranges_id": 2,
          "results": 4,
          "date": "2018-01-14T07:49:02 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 3,
          "ranges_id": 5,
          "results": 27,
          "date": "2014-11-02T09:49:20 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 1,
          "ranges_id": 5,
          "results": 96,
          "date": "2014-11-19T09:27:50 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 3,
          "ranges_id": 5,
          "results": 81,
          "date": "2015-01-01T09:02:27 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 3,
          "ranges_id": 5,
          "results": 93,
          "date": "2015-09-23T09:30:53 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 1,
          "ranges_id": 10,
          "results": 100,
          "date": "2017-07-15T07:19:10 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 3,
          "ranges_id": 5,
          "results": 23,
          "date": "2016-12-29T04:52:57 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 3,
          "ranges_id": 2,
          "results": 40,
          "date": "2018-03-14T09:22:36 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 3,
          "ranges_id": 10,
          "results": 28,
          "date": "2017-04-14T12:07:27 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 2,
          "ranges_id": 2,
          "results": 26,
          "date": "2016-09-17T09:39:30 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 3,
          "ranges_id": 5,
          "results": 93,
          "date": "2015-10-08T11:56:02 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 2,
          "ranges_id": 10,
          "results": 56,
          "date": "2016-06-02T09:59:58 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 1,
          "ranges_id": 5,
          "results": 2,
          "date": "2017-05-03T04:55:52 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 3,
          "ranges_id": 1,
          "results": 39,
          "date": "2017-05-25T10:11:21 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 1,
          "ranges_id": 10,
          "results": 64,
          "date": "2017-07-08T04:17:43 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 1,
          "ranges_id": 4,
          "results": 35,
          "date": "2014-12-30T08:28:55 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 3,
          "ranges_id": 3,
          "results": 27,
          "date": "2015-02-01T05:21:52 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 3,
          "ranges_id": 5,
          "results": 15,
          "date": "2015-12-12T12:17:49 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 1,
          "ranges_id": 7,
          "results": 9,
          "date": "2014-02-04T09:11:59 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 3,
          "ranges_id": 10,
          "results": 38,
          "date": "2014-01-06T03:01:23 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 2,
          "ranges_id": 8,
          "results": 12,
          "date": "2015-12-15T10:06:05 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 1,
          "ranges_id": 8,
          "results": 85,
          "date": "2015-08-26T05:42:34 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 3,
          "ranges_id": 10,
          "results": 14,
          "date": "2017-03-17T09:55:54 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 2,
          "ranges_id": 6,
          "results": 57,
          "date": "2017-06-17T09:07:09 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 1,
          "ranges_id": 4,
          "results": 8,
          "date": "2015-05-18T11:48:10 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 1,
          "ranges_id": 4,
          "results": 43,
          "date": "2014-09-16T12:14:59 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 1,
          "ranges_id": 10,
          "results": 88,
          "date": "2014-05-19T10:17:24 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 3,
          "ranges_id": 1,
          "results": 11,
          "date": "2017-11-10T12:28:26 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 3,
          "ranges_id": 1,
          "results": 89,
          "date": "2018-04-30T04:53:35 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 3,
          "ranges_id": 5,
          "results": 18,
          "date": "2017-11-07T02:48:33 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 2,
          "ranges_id": 2,
          "results": 21,
          "date": "2016-12-15T01:56:49 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 1,
          "ranges_id": 2,
          "results": 97,
          "date": "2017-04-12T07:26:40 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 3,
          "ranges_id": 6,
          "results": 20,
          "date": "2015-10-04T07:27:42 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 3,
          "ranges_id": 4,
          "results": 10,
          "date": "2014-06-04T04:42:59 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 3,
          "ranges_id": 1,
          "results": 75,
          "date": "2016-07-11T03:47:51 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 3,
          "ranges_id": 8,
          "results": 80,
          "date": "2015-12-23T07:43:49 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 2,
          "ranges_id": 7,
          "results": 14,
          "date": "2016-11-14T02:09:39 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 1,
          "ranges_id": 6,
          "results": 12,
          "date": "2017-08-24T08:38:32 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 1,
          "ranges_id": 6,
          "results": 34,
          "date": "2017-01-09T12:33:55 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 1,
          "ranges_id": 6,
          "results": 20,
          "date": "2017-06-28T05:55:59 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 3,
          "ranges_id": 6,
          "results": 80,
          "date": "2014-08-25T08:39:31 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 3,
          "ranges_id": 4,
          "results": 100,
          "date": "2015-04-05T12:56:15 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 2,
          "ranges_id": 9,
          "results": 63,
          "date": "2015-05-31T12:53:59 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 2,
          "ranges_id": 6,
          "results": 42,
          "date": "2017-01-04T12:37:55 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 1,
          "ranges_id": 5,
          "results": 92,
          "date": "2016-01-25T07:29:01 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 2,
          "ranges_id": 2,
          "results": 69,
          "date": "2017-07-29T04:58:11 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 2,
          "ranges_id": 6,
          "results": 91,
          "date": "2017-04-12T09:34:57 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 2,
          "ranges_id": 8,
          "results": 10,
          "date": "2016-12-02T09:30:28 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 3,
          "ranges_id": 4,
          "results": 90,
          "date": "2016-10-04T09:21:00 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 1,
          "ranges_id": 5,
          "results": 16,
          "date": "2014-09-13T08:56:01 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 2,
          "ranges_id": 10,
          "results": 71,
          "date": "2014-09-14T04:45:31 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 3,
          "ranges_id": 7,
          "results": 33,
          "date": "2015-04-21T09:14:28 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 2,
          "ranges_id": 10,
          "results": 36,
          "date": "2018-04-28T03:39:52 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 3,
          "ranges_id": 8,
          "results": 29,
          "date": "2017-05-29T08:35:41 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 2,
          "ranges_id": 3,
          "results": 60,
          "date": "2014-06-18T11:00:06 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 3,
          "ranges_id": 5,
          "results": 18,
          "date": "2018-04-20T07:14:49 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 1,
          "ranges_id": 4,
          "results": 100,
          "date": "2017-09-21T04:38:31 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 1,
          "ranges_id": 4,
          "results": 6,
          "date": "2015-12-11T06:39:33 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 2,
          "ranges_id": 1,
          "results": 88,
          "date": "2017-08-01T05:29:56 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 3,
          "ranges_id": 1,
          "results": 28,
          "date": "2016-01-15T04:15:46 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 1,
          "ranges_id": 2,
          "results": 8,
          "date": "2015-03-06T04:11:46 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 2,
          "ranges_id": 1,
          "results": 50,
          "date": "2014-05-24T07:10:00 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 2,
          "ranges_id": 7,
          "results": 32,
          "date": "2017-08-22T10:18:01 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 3,
          "ranges_id": 9,
          "results": 95,
          "date": "2016-06-20T08:40:12 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 1,
          "ranges_id": 6,
          "results": 25,
          "date": "2018-02-06T02:20:50 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 3,
          "ranges_id": 2,
          "results": 95,
          "date": "2015-02-05T11:27:29 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 3,
          "ranges_id": 1,
          "results": 10,
          "date": "2016-07-17T03:32:12 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 3,
          "ranges_id": 8,
          "results": 18,
          "date": "2015-10-20T05:11:46 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 3,
          "ranges_id": 5,
          "results": 97,
          "date": "2016-04-25T10:57:22 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 3,
          "ranges_id": 3,
          "results": 89,
          "date": "2014-06-26T02:59:19 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 2,
          "ranges_id": 10,
          "results": 90,
          "date": "2018-01-12T03:44:59 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 3,
          "ranges_id": 9,
          "results": 12,
          "date": "2017-04-12T09:00:30 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 2,
          "ranges_id": 10,
          "results": 45,
          "date": "2016-01-27T06:20:27 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 2,
          "ranges_id": 3,
          "results": 18,
          "date": "2015-01-02T04:03:15 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 1,
          "ranges_id": 10,
          "results": 25,
          "date": "2017-06-13T12:50:35 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 3,
          "ranges_id": 4,
          "results": 37,
          "date": "2014-01-12T05:42:23 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 3,
          "ranges_id": 10,
          "results": 89,
          "date": "2017-05-16T07:24:32 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 3,
          "ranges_id": 4,
          "results": 45,
          "date": "2017-11-02T06:19:15 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 3,
          "ranges_id": 4,
          "results": 63,
          "date": "2017-06-07T05:00:12 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 2,
          "ranges_id": 7,
          "results": 75,
          "date": "2016-04-30T04:33:17 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 2,
          "ranges_id": 9,
          "results": 11,
          "date": "2017-09-30T07:06:43 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 1,
          "ranges_id": 6,
          "results": 65,
          "date": "2017-09-29T01:39:48 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 2,
          "ranges_id": 7,
          "results": 44,
          "date": "2014-08-16T04:44:53 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 2,
          "ranges_id": 8,
          "results": 90,
          "date": "2016-07-19T04:49:33 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 1,
          "ranges_id": 5,
          "results": 32,
          "date": "2015-08-25T12:07:58 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 3,
          "ranges_id": 7,
          "results": 65,
          "date": "2014-06-26T04:40:22 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 2,
          "ranges_id": 6,
          "results": 22,
          "date": "2014-06-06T10:52:34 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 2,
          "ranges_id": 8,
          "results": 27,
          "date": "2017-03-30T07:22:14 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 2,
          "ranges_id": 1,
          "results": 56,
          "date": "2015-11-30T12:09:00 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 1,
          "ranges_id": 2,
          "results": 77,
          "date": "2016-07-29T08:47:11 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 1,
          "ranges_id": 6,
          "results": 24,
          "date": "2017-03-21T03:45:18 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 1,
          "ranges_id": 6,
          "results": 54,
          "date": "2016-05-28T04:33:20 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 1,
          "ranges_id": 4,
          "results": 58,
          "date": "2014-10-16T04:50:15 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 2,
          "ranges_id": 1,
          "results": 43,
          "date": "2016-10-30T12:38:07 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 1,
          "ranges_id": 3,
          "results": 22,
          "date": "2014-06-11T03:05:30 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 2,
          "ranges_id": 5,
          "results": 57,
          "date": "2015-11-14T11:49:56 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 2,
          "ranges_id": 1,
          "results": 56,
          "date": "2015-05-02T12:02:25 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 1,
          "ranges_id": 6,
          "results": 47,
          "date": "2018-04-27T05:11:19 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 3,
          "ranges_id": 10,
          "results": 49,
          "date": "2016-12-16T05:06:14 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 2,
          "ranges_id": 3,
          "results": 78,
          "date": "2017-03-19T02:15:35 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 2,
          "ranges_id": 10,
          "results": 22,
          "date": "2018-05-04T02:30:54 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 3,
          "ranges_id": 1,
          "results": 15,
          "date": "2017-05-08T06:13:26 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 2,
          "ranges_id": 4,
          "results": 73,
          "date": "2015-06-18T05:22:21 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 3,
          "ranges_id": 3,
          "results": 6,
          "date": "2014-06-20T01:02:44 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 3,
          "ranges_id": 1,
          "results": 55,
          "date": "2016-02-21T12:18:03 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 1,
          "ranges_id": 2,
          "results": 34,
          "date": "2014-04-04T12:40:31 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 2,
          "ranges_id": 8,
          "results": 85,
          "date": "2014-01-06T07:59:00 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 1,
          "ranges_id": 10,
          "results": 57,
          "date": "2015-08-18T11:36:32 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 3,
          "ranges_id": 4,
          "results": 51,
          "date": "2017-08-23T12:10:06 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 1,
          "ranges_id": 9,
          "results": 67,
          "date": "2014-02-24T11:31:08 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 3,
          "ranges_id": 6,
          "results": 95,
          "date": "2017-10-09T12:24:19 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 1,
          "ranges_id": 6,
          "results": 37,
          "date": "2018-05-20T07:19:43 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 3,
          "ranges_id": 2,
          "results": 44,
          "date": "2014-03-17T09:54:08 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 3,
          "ranges_id": 10,
          "results": 43,
          "date": "2015-06-11T10:28:47 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 2,
          "ranges_id": 9,
          "results": 48,
          "date": "2017-05-20T04:47:08 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 1,
          "ranges_id": 6,
          "results": 99,
          "date": "2016-05-19T03:19:53 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 2,
          "ranges_id": 9,
          "results": 4,
          "date": "2018-03-23T12:50:07 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 3,
          "ranges_id": 1,
          "results": 72,
          "date": "2015-03-28T11:54:58 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 3,
          "ranges_id": 9,
          "results": 42,
          "date": "2016-11-26T04:15:51 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 2,
          "ranges_id": 3,
          "results": 75,
          "date": "2015-01-21T02:27:02 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 3,
          "ranges_id": 3,
          "results": 80,
          "date": "2016-06-22T12:05:38 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 1,
          "ranges_id": 9,
          "results": 8,
          "date": "2018-05-14T06:52:13 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 3,
          "ranges_id": 9,
          "results": 66,
          "date": "2014-01-26T01:34:07 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 3,
          "ranges_id": 9,
          "results": 50,
          "date": "2017-08-02T05:49:53 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 2,
          "ranges_id": 4,
          "results": 26,
          "date": "2018-02-06T12:31:04 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 3,
          "ranges_id": 2,
          "results": 48,
          "date": "2015-02-12T03:31:58 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 3,
          "ranges_id": 8,
          "results": 58,
          "date": "2015-12-16T03:45:11 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 3,
          "ranges_id": 7,
          "results": 80,
          "date": "2017-01-18T11:01:19 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 1,
          "ranges_id": 1,
          "results": 93,
          "date": "2014-08-22T01:13:55 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 2,
          "ranges_id": 3,
          "results": 30,
          "date": "2015-03-01T02:33:27 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 3,
          "ranges_id": 7,
          "results": 39,
          "date": "2016-03-30T07:04:04 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 1,
          "ranges_id": 1,
          "results": 37,
          "date": "2015-06-10T02:29:41 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 3,
          "ranges_id": 1,
          "results": 20,
          "date": "2017-07-15T11:44:39 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 2,
          "ranges_id": 8,
          "results": 85,
          "date": "2015-11-13T06:09:24 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 1,
          "ranges_id": 8,
          "results": 83,
          "date": "2015-01-23T06:03:09 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 3,
          "ranges_id": 9,
          "results": 52,
          "date": "2017-05-13T02:17:03 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 3,
          "ranges_id": 3,
          "results": 24,
          "date": "2016-12-30T06:16:54 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 3,
          "ranges_id": 6,
          "results": 43,
          "date": "2017-06-08T07:29:05 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 1,
          "ranges_id": 3,
          "results": 68,
          "date": "2016-01-23T01:50:07 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 2,
          "ranges_id": 5,
          "results": 89,
          "date": "2017-01-22T03:45:13 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 3,
          "ranges_id": 2,
          "results": 46,
          "date": "2016-12-27T10:04:34 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 3,
          "ranges_id": 8,
          "results": 18,
          "date": "2018-04-01T09:10:34 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 1,
          "ranges_id": 2,
          "results": 32,
          "date": "2015-07-16T10:45:00 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 2,
          "ranges_id": 8,
          "results": 28,
          "date": "2015-02-28T02:55:19 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 1,
          "ranges_id": 3,
          "results": 8,
          "date": "2014-12-24T09:36:03 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 2,
          "ranges_id": 7,
          "results": 67,
          "date": "2014-11-09T02:11:38 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 2,
          "ranges_id": 1,
          "results": 71,
          "date": "2017-12-23T06:20:32 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 2,
          "ranges_id": 1,
          "results": 1,
          "date": "2014-06-14T06:07:34 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 1,
          "ranges_id": 3,
          "results": 11,
          "date": "2015-11-23T10:09:41 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 3,
          "ranges_id": 1,
          "results": 58,
          "date": "2016-11-26T11:51:10 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 1,
          "ranges_id": 1,
          "results": 54,
          "date": "2014-10-08T06:03:14 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 3,
          "ranges_id": 8,
          "results": 60,
          "date": "2017-07-25T10:08:04 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 1,
          "ranges_id": 2,
          "results": 65,
          "date": "2018-04-26T09:25:42 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 1,
          "ranges_id": 6,
          "results": 63,
          "date": "2015-11-29T10:13:56 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 3,
          "ranges_id": 2,
          "results": 82,
          "date": "2014-05-21T06:12:28 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 2,
          "ranges_id": 6,
          "results": 63,
          "date": "2014-04-02T03:25:20 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 1,
          "ranges_id": 5,
          "results": 89,
          "date": "2014-08-27T02:45:43 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 3,
          "ranges_id": 9,
          "results": 55,
          "date": "2016-12-11T08:57:06 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 1,
          "ranges_id": 8,
          "results": 45,
          "date": "2015-03-15T05:37:45 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 2,
          "ranges_id": 2,
          "results": 86,
          "date": "2015-07-27T11:40:08 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 3,
          "ranges_id": 10,
          "results": 56,
          "date": "2015-06-16T07:19:51 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 3,
          "ranges_id": 1,
          "results": 69,
          "date": "2015-09-05T10:50:56 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 2,
          "ranges_id": 10,
          "results": 90,
          "date": "2016-01-16T04:31:40 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 2,
          "ranges_id": 7,
          "results": 35,
          "date": "2018-04-03T08:05:05 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 1,
          "ranges_id": 6,
          "results": 33,
          "date": "2017-11-05T07:17:47 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 1,
          "ranges_id": 9,
          "results": 31,
          "date": "2015-11-24T02:47:16 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 1,
          "ranges_id": 5,
          "results": 49,
          "date": "2014-05-29T12:56:42 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 2,
          "ranges_id": 9,
          "results": 93,
          "date": "2015-10-03T03:37:22 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 2,
          "ranges_id": 10,
          "results": 91,
          "date": "2015-02-22T04:04:25 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 3,
          "ranges_id": 3,
          "results": 88,
          "date": "2014-02-07T09:17:05 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 2,
          "ranges_id": 2,
          "results": 52,
          "date": "2014-09-28T04:28:28 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 3,
          "ranges_id": 3,
          "results": 90,
          "date": "2016-09-29T06:04:23 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 2,
          "ranges_id": 7,
          "results": 6,
          "date": "2018-04-28T09:52:59 +07:00"
        },
        {
          "doctor_id": 1,
          "patient_id": 1,
          "ranges_id": 3,
          "results": 12,
          "date": "2018-02-17T10:36:21 +07:00"
        }
      ])
  });
};
