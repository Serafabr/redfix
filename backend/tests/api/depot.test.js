const got = require('got');

describe('Depot tests', () => {

  const url = 'http://localhost:3001/api';
  let depotId;
  let boxId;
  let supplyId;
  
  test('Insert depot', async () => {
    const reqBody = {
      query: `mutation (
        $depotSf: String!,
        $company: String!,
        $description: String!,
        $title: String!,
        $depotCategoryId: Int!
      ){
        tested: insertDepot(input: {attributes: {
          depotSf: $depotSf,
          depotCategoryId: $depotCategoryId,
          company: $company,
          title: $title,
          description: $description
        }}) {
          id
        }
      }`,
      variables: {
        depotSf: "CT" + (Math.floor(Math.random() * 100000)).toString(),
        company: "Empresa Ltda.",
        title: "Manutenção do sistema elétrico",
        depotCategoryId: 2,
        description: "Contratação de empresa especializada para manutenção etc. etc.",
      },
    };
    const response = await got.post(url, { json: reqBody, responseType: 'json' });
    depotId = response.body.data.tested.id;
    expect(response.body.data.tested).toMatchObject({ id: expect.any(Number) });
  });

  test('Modify depot', async () => {
    const reqBody = {
      query: `mutation (
        $depotId: Int!,
        $depotSf: String!,
        $company: String!,
        $description: String!,
        $title: String!,
        $depotCategoryId: Int!
      ){
        tested: modifyDepot(input: {attributes: {
          depotId: $depotId,
          depotSf: $depotSf,
          depotCategoryId: $depotCategoryId,
          company: $company,
          title: $title,
          description: $description
        }}) {
          id
        }
      }`,
      variables: {
        depotId: depotId,
        depotSf: "CT" + (Math.floor(Math.random() * 100000)).toString(),
        company: "Empresa Ltda.",
        title: "Manutenção do sistema elétrico",
        depotCategoryId: 2,
        description: "Contratação de empresa especializada para manutenção etc. etc.",
      },
    };
    const response = await got.post(url, { json: reqBody, responseType: 'json' });
    expect(response.body.data.tested).toMatchObject({ id: expect.any(Number) });
  });

  test('Insert box', async () => {
    const reqBody = {
      query: `mutation (
        $boxSf: String!,
        $depotId: Int!,
        $note: String,
        $boxId: Int
      ){
        tested: insertBox(input: {
          boxSf: $boxSf,
          boxId: $boxId,
          depotId: $depotId,
          note: $note
        }) {
          id
        }
      }`,
      variables: {
        depotId: depotId,
        boxId: null,
        boxSf: '1 TA',
        note: 'Primeiro Termo Aditivo'
      },
    };
    const response = await got.post(url, { json: reqBody, responseType: 'json' });
    boxId = response.body.data.tested.id;
    expect(response.body.data.tested).toMatchObject({ id: expect.any(Number) });
  });

  test('Modify box', async () => {
    const reqBody = {
      query: `mutation (
        $boxId: Int!,
        $boxSf: String!,
        $note: String,
      ){
        tested: modifyBox(input: {
          boxId: $boxId,
          boxSf: $boxSf,
          note: $note
        }) {
          id
        }
      }`,
      variables: {
        boxId: boxId,
        boxSf: '1TA.',
        note: '1º T.A.'
      },
    };
    const response = await got.post(url, { json: reqBody, responseType: 'json' });
    expect(response.body.data.tested).toMatchObject({ id: expect.any(Number) });
  });

  test('Insert supply', async () => {
    const reqBody = {
      query: `mutation (
        $supplySf: String!,
        $boxId: Int!,
        $specId: Int!,
        $qtyInitial: BigFloat!,
        $price: BigFloat!
      ){
        tested: insertSupply(input: {attributes: {
          supplySf: $supplySf,
          boxId: $boxId,
          specId: $specId,
          qtyInitial: $qtyInitial,
          price: $price
        }}) {
          id
        }
      }`,
      variables: {
        supplySf: "A1",
        boxId: boxId,
        specId: 1,
        qtyInitial: 1000,
        price: 11.99,
      },
    };
    const response = await got.post(url, { json: reqBody, responseType: 'json' });
    supplyId = response.body.data.tested.id;
    expect(response.body.data.tested).toMatchObject({ id: expect.any(Number) });
  });
  
  test('Modify supply', async () => {
    const reqBody = {
      query: `mutation (
        $supplyId: Int!,
        $supplySf: String!,
        $boxId: Int!,
        $specId: Int!,
        $qtyInitial: BigFloat!,
        $price: BigFloat!
      ){
        tested: modifySupply(input: {attributes: {
          supplyId: $supplyId,
          supplySf: $supplySf,
          boxId: $boxId,
          specId: $specId,
          qtyInitial: $qtyInitial,
          price: $price
        }}) {
          id
        }
      }`,
      variables: {
        supplyId: supplyId,
        supplySf: 'AA1',
        boxId: boxId,
        specId: 1,
        qtyInitial: 1100,
        price: 12.99,
      },
    };
    const response = await got.post(url, { json: reqBody, responseType: 'json' });
    expect(response.body.data.tested).toMatchObject({ id: expect.any(Number) });
  });
  
  test('Remove supply', async () => {
    const reqBody = {
      query: `mutation (
        $supplyId: Int!
      ){
        tested: removeSupply(input: {
          supplyId: $supplyId
        }) {
          id
        }
      }`,
      variables: {
        supplyId: supplyId,
      },
    };
    const response = await got.post(url, { json: reqBody, responseType: 'json' });
    expect(response.body.data.tested).toMatchObject({ id: expect.any(Number) });
  });
  
  test('Activate box', async () => {
    const reqBody = {
      query: `mutation (
        $boxId: Int!
      ){
        tested: activateBox(input: {
          boxId: $boxId
        }) {
          id
        }
      }`,
      variables: { boxId: boxId },
    };
    const response = await got.post(url, { json: reqBody, responseType: 'json' });
    expect(response.body.data.tested).toMatchObject({ id: expect.any(Number) });
  });

  test('Deactivate box', async () => {
    const reqBody = {
      query: `mutation (
        $boxId: Int!
      ){
        tested: deactivateBox(input: {
          boxId: $boxId
        }) {
          id
        }
      }`,
      variables: { boxId: boxId },
    };
    const response = await got.post(url, { json: reqBody, responseType: 'json' });
    expect(response.body.data.tested).toMatchObject({ id: expect.any(Number) });
  });

});
