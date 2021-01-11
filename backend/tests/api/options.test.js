const got = require('got');

describe('Options tests', () => {

  const url = 'http://localhost:3001/api';
  
  test('Insert task status', async () => {
    const reqBody = {
      query: `mutation (
        $taskStatusText: String!,
        $isLocked: Boolean!
      ){
        tested: insertTaskStatus(
          input: {
            taskStatusText: $taskStatusText,
            isLocked: $isLocked
          }
        ) {
          id
        }
      }`,
      variables: {
        taskStatusText: "Novo status para tarefas",
        isLocked: true,
      }
    };
    const response = await got.post(url, { json: reqBody, responseType: 'json' });
    expect(response.body.data.tested).toMatchObject({ id: expect.any(Number) });
  });

});
