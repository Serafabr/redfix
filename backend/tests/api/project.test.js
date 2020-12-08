const got = require('got');

describe('Project tests', () => {

  const url = 'http://localhost:3001/api';
  let projectId;

  test('Insert project', async () => {
    const reqBody = {
      query: `mutation (
        $name: String!
      ){
        tested: insertProject(input: {attributes: {
          name: $name
        }}) {
          id
        }
      }`,
      variables: {
        name: "Projeto para testes" + Math.random().toString(),
      },
    };
    const response = await got.post(url, { json: reqBody, responseType: 'json' });
    projectId = response.body.data.tested.id;
    expect(response.body.data.tested).toMatchObject({ id: expect.any(Number) });
  });

  test('Modify project', async () => {
    const reqBody = {
      query: `mutation (
        $projectId: Int!,
        $name: String!
      ){
        tested: modifyProject(input: {attributes: {
          projectId: $projectId,
          name: $name
        }}) {
          id
        }
      }`,
      variables: {
        projectId: projectId,
        name: "Novo nome para o projeto" + Math.random().toString(),
      },
    };
    const response = await got.post(url, { json: reqBody, responseType: 'json' });
    expect(response.body.data.tested).toMatchObject({ id: expect.any(Number) });
  });

  test('Activate project', async () => {
    const reqBody = {
      query: `mutation (
        $projectId: Int!,
      ){
        tested: activateProject(input: {
          projectId: $projectId
        }) {
          id
        }
      }`,
      variables: { projectId },
    };
    const response = await got.post(url, { json: reqBody, responseType: 'json' });
    expect(response.body.data.tested).toMatchObject({ id: expect.any(Number) });
  });

  test('Add task to project', async () => {
    const reqBody = {
      query: `mutation (
        $taskId: Int!,
        $projectId: Int!
      ){
        tested: addTaskToProject(input: {
          taskId: $taskId,
          projectId: $projectId
        }) {
          id
        }
      }`,
      variables: {
        taskId: 1,
        projectId: projectId,
      },
    };
    const response = await got.post(url, { json: reqBody, responseType: 'json' });
    expect(response.body.data.tested).toMatchObject({ id: expect.any(Number) });
  });

  test('Remove task from project', async () => {
    const reqBody = {
      query: `mutation (
        $taskId: Int!
      ){
        tested: removeTaskFromProject(input: {
          taskId: $taskId
        }) {
          id
        }
      }`,
      variables: {
        taskId: 1
      },
    };
    const response = await got.post(url, { json: reqBody, responseType: 'json' });
    expect(response.body.data.tested).toMatchObject({ id: expect.any(Number) });
  });

  test('Deactivate project', async () => {
    const reqBody = {
      query: `mutation (
        $projectId: Int!,
      ){
        tested: deactivateProject(input: {
          projectId: $projectId
        }) {
          id
        }
      }`,
      variables: { projectId },
    };
    const response = await got.post(url, { json: reqBody, responseType: 'json' });
    expect(response.body.data.tested).toMatchObject({ id: expect.any(Number) });
  });

  test('Remove project', async () => {
    const reqBody = {
      query: `mutation (
        $projectId: Int!,
      ){
        tested: removeProject(input: {
          projectId: $projectId
        }) {
          id
        }
      }`,
      variables: { projectId },
    };
    const response = await got.post(url, { json: reqBody, responseType: 'json' });
    expect(response.body.data.tested).toMatchObject({ id: expect.any(Number) });
  });

});
