import app from '../../app';
import request from 'supertest';
import truncate from '../../test/truncate';

describe('signup', () => {
  beforeEach(async () => {
    await truncate();
  });

  it('is successful', done => {
    request(app)
      .post('/graphql')
      .send({
        query: `
          mutation {
            signup(username: "username1", password: "password")
          }
      `
      })
      .end((err, res) => {
        if (err) {
          return done(err);
        }

        expect(res.body).toEqual({
          data: {
            signup: true
          }
        });

        done();
      });
  });
});
