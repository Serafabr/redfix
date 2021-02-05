const got = require('got');

describe('Task tests', () => {

  const url = 'http://localhost:3001/api';
  let taskId;
  let taskEventId;
  
  test('Insert task', async () => {
    const reqBody = {
      query: `mutation (
        $title: String!,
        $description: String!,
        $taskCategoryId: Int!,
        $taskPriorityId: Int!,
        $teamId: Int!,
        $assets: [Int!]!
      ){
        tested: insertTask(input: {
          attributes: {
            title: $title,
            description: $description,
            taskCategoryId: $taskCategoryId,
            taskPriorityId: $taskPriorityId,
            teamId: $teamId
          },
          assets: $assets
        }) {
          id
        }
      }`,
      variables: {
        title: "title",
        description: "description",
        taskCategoryId: 1,
        taskPriorityId: 1,
        teamId: 1,
        assets: [102],
      },
    }
    const response = await got.post(url, { json: reqBody, responseType: 'json' });
    taskId = response.body.data.tested.id;
    expect(response.body.data.tested).toMatchObject({ id: expect.any(Number) });
  });

  test('Modify task', async () => {
    const reqBody = {
      query: `mutation (
        $taskId: Int!,
        $title: String!,
        $description: String!,
        $taskCategoryId: Int!,
        $taskPriorityId: Int!,
        $teamId: Int!
      ){
        tested: modifyTask(input: {attributes: {
          taskId: $taskId,
          title: $title,
          description: $description,
          taskCategoryId: $taskCategoryId,
          taskPriorityId: $taskPriorityId,
          teamId: $teamId
        }}) {
          id
        }
      }`,
      variables: {
        taskId: taskId,
        title: "title",
        description: "description",
        taskCategoryId: 1,
        taskPriorityId: 1,
        teamId: 1,
      },
    }
    const response = await got.post(url, { json: reqBody, responseType: 'json' });
    expect(response.body.data.tested).toMatchObject({ id: expect.any(Number) });
  });

  test('Insert task asset', async () => {
    const reqBody = {
      query: `mutation (
        $taskId: Int!,
        $assetId: Int!
      ){
        tested: insertTaskAsset(input: {
          taskId: $taskId,
          assetId: $assetId
        }) {
          id
        }
      }`,
      variables: {
        taskId: taskId,
        assetId: 2222,
      },
    };
    const response = await got.post(url, { json: reqBody, responseType: 'json' });
    expect(response.body.data.tested).toMatchObject({ id: expect.any(Number) });
  });

  test('Remove task asset', async () => {
    const reqBody = {
      query: `mutation (
        $taskId: Int!,
        $assetId: Int!
      ){
        tested: removeTaskAsset(input: {
          taskId: $taskId,
          assetId: $assetId
        }) {
          id
        }
      }`,
      variables: {
        taskId: taskId,
        assetId: 2222,
      },
    };
    const response = await got.post(url, { json: reqBody, responseType: 'json' });
    expect(response.body.data.tested).toMatchObject({ id: expect.any(Number) });
  });

  test('Insert task note', async () => {
    const reqBody = {
      query: `mutation (
        $taskId: Int!,
        $teamId: Int!,
        $note: String
      ){
        tested: insertTaskNote(input: {
          taskId: $taskId,
          teamId: $teamId,
          note: $note
        }) {
          id
        }
      }`,
      variables: {
        taskId: taskId,
        teamId: 1,
        note: "Mensagem para a tarefa.",
      },
    };
    const response = await got.post(url, { json: reqBody, responseType: 'json' });
    taskEventId = response.body.data.tested.id;
    expect(response.body.data.tested).toMatchObject({ id: expect.any(Number) });
  });

  test('Modify task note', async () => {
    const reqBody = {
      query: `mutation (
        $taskEventId: Int!,
        $note: String!
      ){
        tested: modifyTaskNote(input: {
          taskEventId: $taskEventId,
          note: $note
        }) {
          id
        }
      }`,
      variables: {
        taskEventId: taskEventId,
        note: "Mensagem alterada.",
      },
    };
    const response = await got.post(url, { json: reqBody, responseType: 'json' });
    expect(response.body.data.tested).toMatchObject({ id: expect.any(Number) });
  });

  test('Remove task note', async () => {
    const reqBody = {
      query: `mutation (
        $taskEventId: Int!
      ){
        tested: removeTaskNote(input: {
          taskEventId: $taskEventId
        }) {
          id
        }
      }`,
      variables: {
        taskEventId: taskEventId,
      },
    };
    const response = await got.post(url, { json: reqBody, responseType: 'json' });
    expect(response.body.data.tested).toMatchObject({ id: expect.any(Number) });
  });

  test('Move task', async () => {
    const reqBody = {
      query: `mutation (
        $teamId: Int!,
        $taskId: Int!,
        $taskStatusId: Int!
      ){
        tested: moveTask(input: {
          teamId: $teamId,
          taskId: $taskId,
          taskStatusId: $taskStatusId
        }) {
          id
        }
      }`,
      variables: {
        taskId: taskId,
        taskStatusId: 2,
        teamId: 1,
      },
    };
    const response = await got.post(url, { json: reqBody, responseType: 'json' });
    expect(response.body.data.tested).toMatchObject({ id: expect.any(Number) });
  });

  test('Send task', async () => {
    const reqBody = {
      query: `mutation (
        $teamId: Int!,
        $taskId: Int!,
        $nextTeamId: Int!,
        $note: String!
      ){
        tested: sendTask(input: {
          teamId: $teamId,
          taskId: $taskId,
          nextTeamId: $nextTeamId,
          note: $note
        }) {
          id
        }
      }`,
      variables: {
        taskId: taskId,
        teamId: 1,
        nextTeamId: 2,
        note: "Para a equipe 2.",
      },
    };
    const response = await got.post(url, { json: reqBody, responseType: 'json' });
    expect(response.body.data.tested).toMatchObject({ id: expect.any(Number) });
  });

  test('Cancel send task', async () => {
    const reqBody1 = {
      query: `mutation (
        $teamId: Int!,
        $taskId: Int!
      ){
        tested: cancelSendTask(input: {
          teamId: $teamId,
          taskId: $taskId
        }) {
          id
        }
      }`,
      variables: {
        taskId: taskId,
        teamId: 1,
      },
    };
    const reqBody2 = {
      query: `mutation (
        $teamId: Int!,
        $taskId: Int!,
        $nextTeamId: Int!,
        $note: String!
      ){
        tested: sendTask(input: {
          teamId: $teamId,
          taskId: $taskId,
          nextTeamId: $nextTeamId,
          note: $note
        }) {
          id
        }
      }`,
      variables: {
        taskId: taskId,
        teamId: 1,
        nextTeamId: 2,
        note: "Para a equipe 2, após envio cancelado.",
      },
    };
    const response1 = await got.post(url, { json: reqBody1, responseType: 'json' });
    const response2 = await got.post(url, { json: reqBody2, responseType: 'json' });
    expect(response1.body.data.tested).toMatchObject({ id: expect.any(Number) });
  });

  test('Receive task', async () => {
    const reqBody = {
      query: `mutation (
        $teamId: Int!,
        $taskId: Int!,
        $taskStatusId: Int!
      ){
        tested: receiveTask(input: {
          teamId: $teamId,
          taskId: $taskId,
          taskStatusId: $taskStatusId
        }) {
          id
        }
      }`,
      variables: {
        taskId: taskId,
        teamId: 2,
        taskStatusId: 3,
      },
    };
    const response = await got.post(url, { json: reqBody, responseType: 'json' });
    expect(response.body.data.tested).toMatchObject({ id: expect.any(Number) });
  });

  test('Clone task', async () => {
    const reqBody = {
      query: `mutation (
        $teamId: Int!,
        $taskId: Int!
      ){
        tested: cloneTask(input: {
          teamId: $teamId,
          taskId: $taskId
        }) {
          id
        }
      }`,
      variables: {
        taskId: taskId,
        teamId: 1,
      },
    };
    const response = await got.post(url, { json: reqBody, responseType: 'json' });
    expect(response.body.data.tested).toMatchObject({ id: expect.any(Number) });
  });

  test('Follow task', async () => {
    const reqBody = {
      query: `mutation (
        $taskId: Int!
      ){
        tested: followTask(input: {
          taskId: $taskId
        }) {
          id
        }
      }`,
      variables: { taskId },
    };
    const response = await got.post(url, { json: reqBody, responseType: 'json' });
    expect(response.body.data.tested).toMatchObject({ id: expect.any(Number) });
  });

  test('Unfollow task', async () => {
    const reqBody = {
      query: `mutation (
        $taskId: Int!
      ){
        tested: unfollowTask(input: {
          taskId: $taskId
        }) {
          id
        }
      }`,
      variables: { taskId },
    };
    const response = await got.post(url, { json: reqBody, responseType: 'json' });
    expect(response.body.data.tested).toMatchObject({ id: expect.any(Number) });
  });

});
