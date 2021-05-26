const got = require('got');
const fs = require('fs');
const FormData = require('form-data');

describe('Uploads tests', () => {

  const url = 'http://localhost:3001/api';

  test('Upload CEB file', async () => {
    let form = new FormData();
    form.append('operations', JSON.stringify({
      variables: {
        cebFile: [null],
      }
    }));
    form.append('map', JSON.stringify({0: ["variables.cebFile.0"]}));
    form.append('0', fs.createReadStream(__dirname + '/ceb.csv'));
    const response = await got.post(url, { body: form, responseType: 'json' });
    expect(response.body).toMatchObject({ cebSuccess: true });
  });

});
