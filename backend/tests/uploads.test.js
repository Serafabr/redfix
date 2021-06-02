const got = require('got');
const createReadStream = require('fs').createReadStream;
const join = require('path').join
const FormData = require('form-data');

describe('Uploads tests', () => {

  const url = 'http://localhost:3001/api';

  test('Upload energy csv file', async () => {
    let form = new FormData();
    form.append('operations', JSON.stringify({
      query: 'mutation ($valuesString: String!) { createEnergyBills(input: { valuesString: $valuesString }) { id } }',
      variables: {
        energyCsv: null,
        uploadType: 'energy',
        valuesString: '',
      }
    }));
    form.append('map', JSON.stringify({0: ["variables.energyCsv"]}));
    form.append('0', createReadStream(join(process.cwd(), 'tests', 'energy.csv')));
    const response = await got.post(url, { body: form, responseType: 'json' });
    expect(response.body.data.createEnergyBills).toMatchObject({ id: expect.any(Number) });
  });

});
