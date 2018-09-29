import app from '../../app';
import request from 'supertest';
import truncate from '../../test/truncate';
import createUser from '../../test/factories/user';

describe('login', () => {
  beforeEach(async () => {
    await truncate();
  });

  it('is successful', async done => {
    const password = 'password';
    const user = await createUser({ password });

    request(app)
      .post('/graphql')
      .send({
        query: `
          mutation {
            login(username: "${user.userName}", password: "${password}")
          }
        `
      })
      .end((err, res) => {
        expect(res.body).toEqual({
          data: {
            login: true
          }
        });

        done();
      });
  });
});
