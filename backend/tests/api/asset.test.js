const got = require('got');

describe('Asset tests', () => {

  const url = 'http://localhost:3001/api';
  let tagId;
  
  test('Insert asset', async () => {
    const reqBody = {
      query: `mutation (
        $attributes: AssetInput!
      ){
        tested: insertAsset(
          input: {
            attributes: $attributes
          }
        ) {
          id
        }
      }`,
      variables: {
        attributes: {
          assetSf: "ELET-ET-001" + Math.random().toString(),
          name: "Estação Transformadora n. 1",
          assetCategoryId: 2,
          locationId: 4000
        },
      }
    };
    const response = await got.post(url, { json: reqBody, responseType: 'json' });
    expect(response.body.data.tested).toMatchObject({ id: expect.any(Number) });
  });

  test('Modify asset', async () => {
  const reqBody = {
    query: `mutation (
      $attributes: AssetInput!
    ){
      tested: modifyAsset(
        input: {
          attributes: $attributes
        }
      ) {
        id
      }
    }`,
    variables: {
      attributes: {
        assetId: 1,
        assetSf: "CASF-000-000",
        name: "CASF - sistema de endereçamento",
        assetCategoryId: 1,
        locationId: 1
      }
    },
  };
    const response = await got.post(url, { json: reqBody, responseType: 'json' });
    expect(response.body.data.tested).toMatchObject({ id: expect.any(Number) });
  });

  test('Insert tag', async () => {
    const reqBody = {
      query: `mutation (
        $tagText: String!
      ){
        tested: insertTag(
          input: {
            tagText: $tagText
          }
        ) {
          id
        }
      }`,
      variables: { tagText: "Nova tag" },
    };
    const response = await got.post(url, { json: reqBody, responseType: 'json' });
    tagId = response.body.data.tested.id;
    expect(response.body.data.tested).toMatchObject({ id: expect.any(Number) });
  });

  test('Modify tag', async () => {
    const reqBody = {
      query: `mutation (
        $tagId: Int!,
        $tagText: String!
      ){
        tested: modifyTag(
          input: {
            tagId: $tagId
            tagText: $tagText
          }
        ) {
          id
        }
      }`,
      variables: {
        tagId: tagId,
        tagText: "Uma tag modificada",
      },
    };
    const response = await got.post(url, { json: reqBody, responseType: 'json' });
    expect(response.body.data.tested).toMatchObject({ id: expect.any(Number) });
  });

  test('Insert asset tag', async () => {
    const reqBody = {
      query: `mutation (
        $tagId: Int!,
        $assetId: Int!
      ){
        tested: insertAssetTag(
          input: {
            tagId: $tagId
            assetId: $assetId
          }
        ) {
          id
        }
      }`,
      variables: {
        assetId: 1,
        tagId: tagId,
      },
    };
    const response = await got.post(url, { json: reqBody, responseType: 'json' });
    expect(response.body.data.tested).toMatchObject({ id: expect.any(Number) });
  });

  test('Remove asset tag', async () => {
    const reqBody = {
      query: `mutation (
        $tagId: Int!,
        $assetId: Int!
      ){
        tested: removeAssetTag(
          input: {
            tagId: $tagId
            assetId: $assetId
          }
        ) {
          id
        }
      }`,
      variables: {
        assetId: 1,
        tagId: tagId,
      },
    };
    const response = await got.post(url, { json: reqBody, responseType: 'json' });
    expect(response.body.data.tested).toMatchObject({ id: expect.any(Number) });
  });

  test('Remove tag', async () => {
    const reqBody = {
      query: `mutation (
        $tagId: Int!
      ){
        tested: removeTag(
          input: {
            tagId: $tagId
          }
        ) {
          id
        }
      }`,
      variables: {
        tagId: tagId,
      },
    };
    const response = await got.post(url, { json: reqBody, responseType: 'json' });
    expect(response.body.data.tested).toMatchObject({ id: expect.any(Number) });
  });

  test('Insert asset child', async () => {
    const reqBody = {
      query: `mutation (
        $childId: Int!,
        $assetId: Int!
      ){
        tested: insertAssetChild(
          input: {
            childId: $childId
            assetId: $assetId
          }
        ) {
          id
        }
      }`,
      variables: {
        assetId: 104,
        childId: 105
      },
    };
    const response = await got.post(url, { json: reqBody, responseType: 'json' });
    expect(response.body.data.tested).toMatchObject({ id: expect.any(Number) });
  });

  test('Insert asset parent', async () => {
    const reqBody = {
      query: `mutation (
        $parentId: Int!,
        $assetId: Int!
      ){
        tested: insertAssetParent(
          input: {
            parentId: $parentId
            assetId: $assetId
          }
        ) {
          id
        }
      }`,
      variables: {
        assetId: 110,
        parentId: 109
      },
    };
    const response = await got.post(url, { json: reqBody, responseType: 'json' });
    expect(response.body.data.tested).toMatchObject({ id: expect.any(Number) });
  });

  test('Remove asset child', async () => {
    const reqBody = {
      query: `mutation (
        $childId: Int!,
        $assetId: Int!
      ){
        tested: removeAssetChild(
          input: {
            childId: $childId
            assetId: $assetId
          }
        ) {
          id
        }
      }`,
      variables: {
        assetId: 104,
        childId: 105
      },
    };
    const response = await got.post(url, { json: reqBody, responseType: 'json' });
    expect(response.body.data.tested).toMatchObject({ id: expect.any(Number) });
  });

  test('Remove asset parent', async () => {
    const reqBody = {
      query: `mutation (
        $parentId: Int!,
        $assetId: Int!
      ){
        tested: removeAssetParent(
          input: {
            parentId: $parentId
            assetId: $assetId
          }
        ) {
          id
        }
      }`,
      variables: {
        assetId: 110,
        parentId: 109
      },
    };
    const response = await got.post(url, { json: reqBody, responseType: 'json' });
    expect(response.body.data.tested).toMatchObject({ id: expect.any(Number) });
  });

});
