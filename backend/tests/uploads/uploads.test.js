const got = require('got');
const fs = require('fs');
const FormData = require('form-data');

describe('Uploads tests', () => {

  const url = 'http://localhost:3001/api';
  const uuid = "aaaaaaaa-5e90-4c5e-8699-78aca9b3" + (Math.random()*1000000000).toString().substr(0,4);

  test('Insert task files', async () => {
    let form = new FormData();
    form.append('operations', JSON.stringify({
      query: "mutation ($filesMetadata: [FileInput]!, $taskId: Int!) {  tested: insertTaskFiles(    input: { taskId: $taskId, filesMetadata: $filesMetadata }   ) {    id  }}",
      variables: {
        taskId: 1,
        files: [null],
        filesMetadata: [{
          filename: "file_from_test.txt",
          uuid: uuid,
          size: 50
        }]
      }
    }));
    form.append('map', JSON.stringify({0: ["variables.files.0"]}));
    form.append('0', fs.createReadStream(__dirname + '/_test.txt'));
    const response = await got.post(url, { body: form, responseType: 'json' });
    expect(response.body.data.tested).toMatchObject({ id: expect.any(Number) });
  });

  test('Remove file', async () => {
    const reqBody = {
      query: `mutation (
        $uuid: UUID!
      ){
        tested: removeFile(input: {
          uuid: $uuid
        }) {
          id
        }
      }`,
      variables: { uuid }
    };
    const response = await got.post(url, { json: reqBody, responseType: 'json' });
    expect(response.body.data.tested).toMatchObject({ id: 1 });
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

  test('Modify avatar', async () => {
    let form = new FormData();
    form.append('operations', JSON.stringify({
      query:  `mutation (
        $avatarMetadata: FileInput!
      ){
        tested: modifyAvatar(input: {
          avatarMetadata: $avatarMetadata
        }) {
          id
        }
      }`,
      variables: {
        avatarMetadata: {
          filename: "image_from_test.jpeg",
          uuid: uuid,
          size: 50
        },
        avatar: null,
      }
    }));
    form.append('map', JSON.stringify({0: ["variables.avatar"]}));
    form.append('0', fs.createReadStream(__dirname + '/test.jpeg'));
    const response = await got.post(url, { body: form, responseType: 'json' });
    expect(response.body.data.tested).toMatchObject({ id: expect.any(Number) });
  });

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
