const got = require('got');

describe('Firm tests', () => {

  const url = 'http://localhost:3001/api';
  let firmId;
  
  test('Insert firm', async () => {
    const reqBody = {
      query: `mutation (
        $name: String!,
        $nameRs: String,
        $cnpj: String!
      ){
        tested: insertFirm(input: {
          name: $name,
          nameRs: $nameRs,
          cnpj: $cnpj
        }) {
          id
        }
      }`,
      variables: {
        cnpj: "12345678901234",
        name: "Empresa Ltda.",
      },
    };
    const response = await got.post(url, { json: reqBody, responseType: 'json' });
    firmId = response.body.data.tested.id;
    expect(response.body.data.tested).toMatchObject({ id: expect.any(Number) });
  });

  test('Modify firm', async () => {
    const reqBody = {
      query: `mutation (
        $firmId: Int!,
        $name: String!,
        $nameRs: String,
        $cnpj: String!
      ){
        tested: modifyFirm(input: {
          firmId: $firmId,
          name: $name,
          nameRs: $nameRs,
          cnpj: $cnpj
        }) {
          id
        }
      }`,
      variables: {
        firmId: firmId,
        cnpj: "12345678901234",
        name: "Novo nome da Empresa Ltda.",
      },
    };
    const response = await got.post(url, { json: reqBody, responseType: 'json' });
    expect(response.body.data.tested).toMatchObject({ id: expect.any(Number) });
  });

});
