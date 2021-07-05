const got = require('got');
const createReadStream = require('fs').createReadStream;
const join = require('path').join
const FormData = require('form-data');

describe('Uploads tests', () => {

  const url = 'http://localhost:3001/api';

  test('Create energy bills / Upload energy csv file', async () => {
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

  test.skip('Modify avatar / Upload image', async () => {
    let form = new FormData();
    form.append('operations', JSON.stringify({
      query: 'mutation ($imageMetadata: FileInput!) { modifyAvatar(input: { avatarMetadata: $imageMetadata }) { id } }',
      variables: {
        uploadType: 'image',
        image: null,
        imageMetadata: {
          uuid: `ffffffff-ffff-ffff-ffff-${Date.now().toString().substr(0,12)}`,
          filename: 'myfile.jpeg',
          size: 150,
          mimetype: 'jpeg',
        },
      }
    }));
    form.append('map', JSON.stringify({0: ["variables.image"]}));
    form.append('0', createReadStream(join(process.cwd(), 'public', 'images', 'test.jpeg')));
    const response = await got.post(url, { body: form, responseType: 'json' });
    expect(response.body.data.modifyAvatar).toMatchObject({ id: expect.any(Number) });
  });

});
