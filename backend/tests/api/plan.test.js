const got = require('got');

describe('Asset tests', () => {

  const url = 'http://localhost:3001/api';
  let bundleId;
  let planId;
  let assetId = 102;

  test('Insert plan', async () => {
    const reqBody = {
      query: `mutation (
        $attributes: PlanInput!
      ){
        tested: insertPlan(
          input: {
            attributes: $attributes
          }
        ) {
          id
        }
      }`,
      variables: {
        attributes: {
          name: "Plano de Manutenção de Exemplo",
          description: "Descrição detalhada dos serviços incluídos no plano",
          periodicityId: 1,
          dateStart: null,
        },
      }
    };
    const response = await got.post(url, { json: reqBody, responseType: 'json' });
    planId = response.body.data.tested.id;
    expect(response.body.data.tested).toMatchObject({ id: expect.any(Number) });
  });

  test('Modify plan', async () => {
    const reqBody = {
      query: `mutation (
        $attributes: PlanInput!
      ){
        tested: modifyPlan(
          input: {
            attributes: $attributes
          }
        ) {
          id
        }
      }`,
      variables: {
        attributes: {
          planId: planId,
          name: "Plano de Manutenção de Exemplo após atualização",
          description: "Descrição detalhada dos serviços incluídos no plano",
          periodicityId: 2,
          dateStart: null,
        },
      }
    };
    const response = await got.post(url, { json: reqBody, responseType: 'json' });
    expect(response.body.data.tested).toMatchObject({ id: expect.any(Number) });
  });

  test('Insert bundle', async () => {
    const reqBody = {
      query: `mutation (
        $name: String!,
        $description: String!
      ){
        tested: insertBundle(
          input: {
            name: $name,
            description: $description
          }
        ) {
          id
        }
      }`,
      variables: {
        name: "Grupo de ativos X",
        description: "Descrição do grupo de ativos",
      },
    };
    const response = await got.post(url, { json: reqBody, responseType: 'json' });
    bundleId = response.body.data.tested.id;
    expect(response.body.data.tested).toMatchObject({ id: expect.any(Number) });
  });

  test('Modify bundle', async () => {
    const reqBody = {
      query: `mutation (
        $bundleId: Int!,
        $name: String!,
        $description: String!
      ){
        tested: modifyBundle(
          input: {
            bundleId: $bundleId,
            name: $name,
            description: $description
          }
        ) {
          id
        }
      }`,
      variables: {
        bundleId: bundleId,
        name: "Grupo de ativos X editado",
        description: "Descrição do grupo de ativos após edição",
      },
    };
    const response = await got.post(url, { json: reqBody, responseType: 'json' });
    bundleId = response.body.data.tested.id;
    expect(response.body.data.tested).toMatchObject({ id: expect.any(Number) });
  });

  test('Insert bundle asset', async () => {
    const reqBody = {
      query: `mutation (
        $bundleId: Int!,
        $assetId: Int!
      ){
        tested: insertBundleAsset(
          input: {
            bundleId: $bundleId,
            assetId: $assetId
          }
        ) {
          id
        }
      }`,
      variables: { bundleId, assetId, },
    };
    const response = await got.post(url, { json: reqBody, responseType: 'json' });
    expect(response.body.data.tested).toMatchObject({ id: expect.any(Number) });
  });

  test('Insert bundle plan', async () => {
    const reqBody = {
      query: `mutation (
        $planId: Int!,
        $bundleId: Int!
      ){
        tested: insertBundlePlan(
          input: {
            planId: $planId,
            bundleId: $bundleId
          }
        ) {
          id
        }
      }`,
      variables: { planId, bundleId },
    };
    const response = await got.post(url, { json: reqBody, responseType: 'json' });
    planId = response.body.data.tested.id;
    expect(response.body.data.tested).toMatchObject({ id: expect.any(Number) });
  });

  test('Remove bundle asset', async () => {
    const reqBody = {
      query: `mutation (
        $assetId: Int!,
        $bundleId: Int!
      ){
        tested: removeBundleAsset(
          input: {
            assetId: $assetId,
            bundleId: $bundleId
          }
        ) {
          id
        }
      }`,
      variables: { bundleId, assetId, },
    };
    const response = await got.post(url, { json: reqBody, responseType: 'json' });
    planId = response.body.data.tested.id;
    expect(response.body.data.tested).toMatchObject({ id: expect.any(Number) });
  });

});
