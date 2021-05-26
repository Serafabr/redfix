import gql from 'graphql-tag';

export default {
  GQLs: {
    all: {
      query: gql`
        query MyQuery {
          queryResponse: allTeamData {
            nodes {
              teamId
              description
              memberCount
              members
              name
            }
          }
        }
      `
    }
  }
}
