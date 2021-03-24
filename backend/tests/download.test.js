const got = require('got');

describe('Download and static routes tests', () => {

  const downloadURL = `http://localhost:3001/download?uuid=de741848-5e90-4c5e-8699-78aca9b37aba&filename=test.txt`;
  const staticURL = 'http://localhost:3001/images/test.jpeg';

  test('Download', async () => {
    const response = await got.get(downloadURL);
    expect(response.statusCode).toBe(200);
  });

  test('Static files', async () => {
    const response = await got.get(staticURL);
    expect(response.statusCode).toBe(200);
  });

});
