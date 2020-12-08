const got = require('got');

describe('Spec tests', () => {

  const url = 'http://localhost:3001/api';
  let specId;
  let priceId;

  test('Insert spec', async () => {
    const reqBody = {
      query: `mutation (
        $specSf: String!,
        $version: String!,
        $name: String!,
        $specCategoryId: Int!,
        $specSubcategoryId: Int!,
        $unit: String!,
        $specCompositionId: Int!
      ){
        tested: insertSpec(input: {attributes: {
          specSf: $specSf,
          version: $version,
          name: $name,
          specCategoryId: $specCategoryId,
          specSubcategoryId: $specSubcategoryId,
          unit: $unit,
          specCompositionId: $specCompositionId
        }}) {
          id
        }
      }`,
      variables: {
        specSf: "SF-99999",
        version: "v" + (Math.floor(Math.random()*10000)).toString(),
        name: "Material novo",
        specCategoryId: 1,
        specSubcategoryId: 1,
        unit: "un",
        specCompositionId: 1,
      },
    };
    const response = await got.post(url, { json: reqBody, responseType: 'json' });
    specId = response.body.data.tested.id;
    expect(response.body.data.tested).toMatchObject({ id: expect.any(Number) });
  });

  test('Modify spec version', async () => {
    const reqBody = {
      query: `mutation (
        $specSf: String!,
        $version: String!,
        $specId: Int!,
        $name: String!,
        $specCategoryId: Int!,
        $specSubcategoryId: Int!,
        $unit: String!,
        $specCompositionId: Int!
      ){
        tested: modifySpecVersion(input: {attributes: {
          specSf: $specSf,
          version: $version,
          specId: $specId,
          name: $name,
          specCategoryId: $specCategoryId,
          specSubcategoryId: $specSubcategoryId,
          unit: $unit,
          specCompositionId: $specCompositionId
        }}) {
          id
        }
      }`,
      variables: {
        // specSf and version: necessary because attributes is of type SPEC
        specSf: "",
        version: "",
        specId: specId,
        name: "Novo nome do material novo",
        specCategoryId: 1,
        specSubcategoryId: 1,
        unit: "un",
        specCompositionId: 1,
      },
    };
    const response = await got.post(url, { json: reqBody, responseType: 'json' });
    expect(response.body.data.tested).toMatchObject({ id: expect.any(Number) });
  });

  test('Insert spec version', async () => {
    const reqBody = {
      query: `mutation (
        $specId: Int!,
        $version: String!
      ){
        tested: insertSpecVersion(input: {
          specId: $specId,
          version: $version
        }) {
          id
        }
      }`,
      variables: {
        specId: specId,
        version: "v" + (Math.floor(Math.random()*10000)).toString(),
      },
    };
    const response = await got.post(url, { json: reqBody, responseType: 'json' });
    expect(response.body.data.tested).toMatchObject({ id: expect.any(Number) });
  });

  test('Insert price', async () => {
    const reqBody = {
      query: `mutation (
        $attributes: PriceInput!
      ){
        tested: insertPrice(input: {
          attributes: $attributes
        }) {
          id
        }
      }`,
      variables: {
        attributes: {
          specId: specId,
          date: '2020-01-31',
          price: 99.99,
          priceSourceTypeId: 1,
          source: 'Contrato XYZ do órgão ABC',
        }
      },
    };
    const response = await got.post(url, { json: reqBody, responseType: 'json' });
    priceId = response.body.data.tested.id;
    expect(response.body.data.tested).toMatchObject({ id: expect.any(Number) });
  });

  test('Modify price', async () => {
    const reqBody = {
      query: `mutation (
        $attributes: PriceInput!
      ){
        tested: modifyPrice(input: {
          attributes: $attributes
        }) {
          id
        }
      }`,
      variables: {
        attributes: {
          priceId: priceId,
          specId: specId,
          date: '2020-01-31',
          price: 100.01,
          priceSourceTypeId: 1,
          source: 'Contrato XYZ do órgão ABC',
        }
      },
    };
    const response = await got.post(url, { json: reqBody, responseType: 'json' });
    expect(response.body.data.tested).toMatchObject({ id: expect.any(Number) });
  });

});
