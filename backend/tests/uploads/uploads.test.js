const got = require('got');
const fs = require('fs');
const FormData = require('form-data');

describe('Uploads tests', () => {

  const url = 'http://localhost:3001/api';
  
  test('Insert task files', async () => {
    let form = new FormData();
    form.append('operations', JSON.stringify({
      query: "mutation ($filesMetadata: [FileMetadatumInput]!, $taskId: Int!) {  tested: insertTaskFiles(    input: { taskId: $taskId, filesMetadata: $filesMetadata }   ) {    id  }}",
      variables: {
        taskId: 1,
        files: [null],
        filesMetadata: [{
          filename: "file_from_test.txt",
          uuid: "aaaaaaaa-5e90-4c5e-8699-78aca9b3" + (Math.random()*1000000000).toString().substr(0,4),
          size: 50
        }]
      }
    }));
    form.append('map', JSON.stringify({0: ["variables.files.0"]}));
    form.append('0', fs.createReadStream(__dirname + '/_test.txt'));
    const response = await got.post(url, { body: form, responseType: 'json' });
    expect(response.body.data.tested).toMatchObject({ id: expect.any(Number) });
  });

  // TODO: add query and image file
  // test('Upload image', async () => {
  //   let form = new FormData();
  //   form.append('operations', JSON.stringify({
  //     query: "",
  //     variables: {
  //       image: [null],
  //     }
  //   }));
  //   form.append('map', JSON.stringify({0: ["variables.image.0"]}));
  //   form.append('0', fs.createReadStream(__dirname + '/image.png'));
  //   const response = await got.post(url, { body: form, responseType: 'json' });
  //   expect(response.body.data.tested).toMatchObject({ id: expect.any(Number) });
  // });


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
