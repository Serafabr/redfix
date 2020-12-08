const got = require('got');

describe('Team tests', () => {

  const url = 'http://localhost:3001/api';
  let teamId;
  let personId;

  test('Insert team', async () => {
    const reqBody = {
      query: `mutation (
        $name: String!
      ){
        tested: insertTeam(input: {attributes: {
          name: $name
        }}) {
          id
        }
      }`,
      variables: {
        name: "Equipe nova" + Math.random().toString(),
      },
    };
    const response = await got.post(url, { json: reqBody, responseType: 'json' });
    teamId = response.body.data.tested.id;
    expect(response.body.data.tested).toMatchObject({ id: expect.any(Number) });
  });

  test('Modify team', async () => {
    const reqBody = {
      query: `mutation (
        $teamId: Int!,
        $name: String!
      ){
        tested: modifyTeam(input: {attributes: {
          teamId: $teamId,
          name: $name
        }}) {
          id
        }
      }`,
      variables: {
        teamId: teamId,
        name: "Equipe nova" + Math.random().toString(),
      },
    };
    const response = await got.post(url, { json: reqBody, responseType: 'json' });
    expect(response.body.data.tested).toMatchObject({ id: expect.any(Number) });
  });

  test('Deactivate team', async () => {
    const reqBody = {
      query: `mutation (
        $teamId: Int!
      ){
        tested: deactivateTeam(input: {
          teamId: $teamId
        }) {
          id
        }
      }`,
      variables: {
        teamId: teamId,
      },
    };
    const response = await got.post(url, { json: reqBody, responseType: 'json' });
    expect(response.body.data.tested).toMatchObject({ id: expect.any(Number) });
  });

  test('Activate team', async () => {
    const reqBody = {
      query: `mutation (
        $teamId: Int!
      ){
        tested: activateTeam(input: {
          teamId: $teamId
        }) {
          id
        }
      }`,
      variables: { teamId: teamId },
    };
    const response = await got.post(url, { json: reqBody, responseType: 'json' });
    expect(response.body.data.tested).toMatchObject({ id: expect.any(Number) });
  });

  test('Insert person', async () => {
    const reqBody = {
      query: `mutation (
        $username: String!,
        $cpf: String!,
        $name: String!,
        $phone: String!,
        $email: String!,
        $personRole: String!
      ){
        tested: insertPerson(input: {
          attributes: {
            username: $username,
            cpf: $cpf,
            name: $name,
            phone: $phone,
            email: $email,
            personRole: $personRole
          }
        }) {
          id
        }
      }`,
      variables: {
        cpf: (10000000000 + Math.floor(Math.random() * 1000000)).toString(),
        name: "Nome da pessoa nova",
        username: "novapessoa" + (Math.floor(Math.random() * 10000)).toString(),
        phone: "9999",
        email: "email" + (Math.floor(Math.random() * 10000)).toString() + "@exemplo.com.br",
        personRole: "employee",
      },
    };
    const response = await got.post(url, { json: reqBody, responseType: 'json' });
    personId = response.body.data.tested.id;
    expect(response.body.data.tested).toMatchObject({ id: expect.any(Number) });
  });

  test('Insert team person', async () => {
    const reqBody = {
      query: `mutation (
        $personId: Int!,
        $teamId: Int!
      ){
        tested: insertTeamPerson(input: {
          personId: $personId,
          teamId: $teamId
        }) {
          id
        }
      }`,
      variables: { teamId, personId },
    };
    const response = await got.post(url, { json: reqBody, responseType: 'json' });
    expect(response.body.data.tested).toMatchObject({ id: expect.any(Number) });
  });

  test('Deactivate person', async () => {
    const reqBody = {
      query: `mutation (
        $personId: Int!
      ){
        tested: deactivatePerson(input: {
          personId: $personId
        }) {
          id
        }
      }`,
      variables: { personId },
    };
    const response = await got.post(url, { json: reqBody, responseType: 'json' });
    expect(response.body.data.tested).toMatchObject({ id: expect.any(Number) });
  });

  test('Activate person', async () => {
    const reqBody = {
      query: `mutation (
        $personId: Int!
      ){
        tested: activatePerson(input: {
          personId: $personId
        }) {
          id
        }
      }`,
      variables: { personId },
    };
    const response = await got.post(url, { json: reqBody, responseType: 'json' });
    expect(response.body.data.tested).toMatchObject({ id: expect.any(Number) });
  });

  test('Modify person', async () => {
    const reqBody = {
      query: `mutation (
        $personId: Int!,
        $username: String!,
        $cpf: String!,
        $name: String!,
        $phone: String!,
        $email: String!,
        $personRole: String!
      ){
        tested: modifyPerson(input: {
          attributes: {
            personId: $personId,
            username: $username,
            cpf: $cpf,
            name: $name,
            phone: $phone,
            email: $email
            personRole: $personRole
          }
        }) {
          id
        }
      }`,
      variables: {
        personId: personId,
        cpf: (10000000000 + Math.floor(Math.random() * 1000000)).toString(),
        name: "Nome da pessoa nova",
        username: "novapessoa" + (Date.now()).toString(),
        phone: "9999",
        email: "email" + (Math.floor(Math.random() * 10000)).toString() + "@exemplo.com.br",
        personRole: "employee",
      },
    };
    const response = await got.post(url, { json: reqBody, responseType: 'json' });
    expect(response.body.data.tested).toMatchObject({ id: expect.any(Number) });
  });

  test('Modify self', async () => {
    const reqBody = {
      query: `mutation (
        $cpf: String!,
        $name: String!,
        $username: String!,
        $phone: String!,
        $email: String!
      ){
        tested: modifySelf(input: {
          attributes: {
            cpf: $cpf,
            name: $name,
            username: $username,
            phone: $phone,
            email: $email
          }
        }) {
          id
        }
      }`,
      variables: {
        username: "admin",
        cpf: "00000000000",
        name: "Admin's New Name",
        phone: "9999",
        email: "admin@admin.com",
      },
    };
    const response = await got.post(url, { json: reqBody, responseType: 'json' });
    expect(response.body.data.tested).toMatchObject({ id: expect.any(Number) });
  });

  test('Remove team person', async () => {
    const reqBody = {
      query: `mutation (
        $personId: Int!,
        $teamId: Int!
      ){
        tested: removeTeamPerson(input: {
          personId: $personId,
          teamId: $teamId,
        }) {
          id
        }
      }`,
      variables: { teamId, personId },
    };
    const response = await got.post(url, { json: reqBody, responseType: 'json' });
    expect(response.body.data.tested).toMatchObject({ id: expect.any(Number) });
  });

  test('Change password', async () => {
    const reqBody = {
      query: `mutation (
        $password: String!
      ){
        tested: changePassword(input: {
          password: $password
        }) {
          id
        }
      }`,
      variables: { password: "123456" },
    };
    const response = await got.post(url, { json: reqBody, responseType: 'json' });
    expect(response.body.data.tested).toMatchObject({ id: expect.any(Number) });
  });

});
