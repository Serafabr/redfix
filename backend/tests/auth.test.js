const got = require('got');

describe('Authentication tests', () => {

  const loginURL = 'http://localhost:3001/login';
  const logoutURL = 'http://localhost:3001/logout';

  test('Login success', async () => {
    const response = await got.post(
      loginURL,
      {
        json: {
          username: 'hzlopes',
          password: '123456',
        },
      }
    );
    expect(response.statusCode).toBe(200);
  });

  test('Login fail', async () => {
    const response = await got.post(
      loginURL,
      {
        json: {
          username: 'hzlopes',
          password: 'abcdef',
        },
        throwHttpErrors: false,
      }
    );
    expect(response.statusCode).toBe(401);
  });

  test('Logout success', async () => {
    const response = await got.get(
      logoutURL,
      {
        throwHttpErrors: false,
      }
    );
    expect(response.statusCode).toBe(401);
  });

});
