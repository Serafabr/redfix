const { reqSuccess, reqSuccessWithFile } = require('./reqs');
const got = require('got');

describe('Task tests', () => {

  const url = 'http://localhost:3001/api';
  
  test('Insert task', async () => {
    const response = await got.post(url, { json: reqSuccess, responseType: 'json' });
    expect(response.body.data.insertTask).toMatchObject({ id: expect.any(Number) });
  });

  test('Insert task with file upload', async () => {
    const response = await got.post(url, { body: reqSuccessWithFile, responseType: 'json' });
    expect(response.body.data.insertTask).toMatchObject({ id: expect.any(Number) });
  });

});
