import gql from 'graphql-tag';

export default {
  GQLs: {
    all: {
      query: gql`
        query MyQuery {
          queryResponse: allPersonData {
            nodes {
              personId
              cellphone
              contractId
              cpf
              email
              isActive
              name
              personRole
              phone
              teams
            }
          }
        }
      `
    }
  }
}
