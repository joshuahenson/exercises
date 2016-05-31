/* eslint-disable */

import mocha from 'mocha';
import app from '../server';
import chai from 'chai';
import request from 'supertest';
import mongoose from 'mongoose';
import Poll from '../models/poll';

const expect = chai.expect;

function connectDB(done) {
  if (mongoose.connection.name !== 'poll-test') {
    return done();
  }

  mongoose.connect((process.env.MONGO_URL || 'mongodb://localhost:27017/poll-test'), function (err) {
    if (err) return done(err);
    done();
  });
}

function dropDB(done) {
  if (mongoose.connection.name !== 'poll-test') {
    return done();
  }

  mongoose.connection.db.dropDatabase(function (err) {
    mongoose.connection.close(done);
  });
}

describe('GET /api/getPolls', function () {

  beforeEach('connect and add two poll entries', function (done) {

    connectDB(function () {
      var poll1 = new Poll({name: 'Xander', title: 'Best Parent', options: [{ option: 'Mom' }, { option: 'Dad' }]});
      var poll2 = new Poll({name: 'Emily', title: 'My Poll', options: [{ option: 'one' }, { option: 'two' }]});

      Poll.create([poll1, poll2], function (err, saved) {
        done();
      });
    });
  });

  afterEach(function (done) {
    dropDB(done);
  });

  it('Should correctly give number of Polls', function (done) {

    request(app)
      .get('/api/getPolls')
      .set('Accept', 'application/json')
      .end(function (err, res) {
        Poll.find().exec(function (err, polls) {
          expect(polls.length).to.equal(res.body.polls.length);
          done();
        });
      });
  });
});

describe('GET /api/getPoll', function () {

  beforeEach('connect and add one Poll entry', function(done){

    connectDB(function () {
      var poll = new Poll({ name: 'Foo', title: 'bar', slug: 'bar', cuid: 'f34gb2bh24b24b2',
      options: [{ option: 'one', votes: 0 }, { option: 'two', votes: 1 }] });

      poll.save(function (err, saved) {
        done();
      });
    });
  });

  afterEach(function (done) {
    dropDB(done);
  });

  it('Should send correct data when queried against a title', function (done) {

    request(app)
      .get('/api/getPoll?slug=bar-f34gb2bh24b24b2')
      .set('Accept', 'application/json')
      .end(function (err, res) {
        Poll.findOne({ cuid: 'f34gb2bh24b24b2' }).exec(function (err, poll) {
          expect(poll.name).to.equal('Foo');
          done();
        });
      });
  });

});
//**************************************************************************

describe('POST /api/addPoll', function () {

  beforeEach('connect and add a poll', function (done) {

    connectDB(function () {
      done();
    });
  });

  afterEach(function (done) {
    dropDB(done);
  });

  it('Should send correctly add a poll', function (done) {

    request(app)
      .post('/api/addPoll')
      .send({ poll: { name: 'Foo', title: 'bar', options: [{ option: 'one' }, { option: 'two' }] } })
      .set('Accept', 'application/json')
      .end(function (err, res) {
        Poll.findOne({ title: 'bar' }).exec(function (err, poll) {
          expect(poll.name).to.equal('Foo');
          done();
        });
      });
  });

});

//**************************************************************************
describe('POST /api/deletePoll', function () {
  var pollId;

  beforeEach('connect and add one Poll entry', function(done){

    connectDB(function () {
      var poll = new Poll({ name: 'Foo', title: 'bar', slug: 'bar', cuid: 'f34gb2bh24b24b2',
      options: [{ option: 'one', votes: 0 }, { option: 'two', votes: 1 }] });

      poll.save(function (err, saved) {
        pollId = saved._id;
        done();
      });
    });
  });

  afterEach(function (done) {
    dropDB(done);
  });

  it('Should connect and delete a poll', function (done) {

    // Check if poll is saved in DB
    Poll.findById(pollId).exec(function (err, poll) {
      expect(poll.name).to.equal('Foo')
    });

    request(app)
      .post('/api/deletePoll')
      .send({ pollId: pollId})
      .set('Accept', 'application/json')
      .end(function () {

        // Check if poll is removed from DB
        Poll.findById(pollId).exec(function (err, poll) {
          expect(poll).to.equal(null);
          done();
        });
      });
  })
});
