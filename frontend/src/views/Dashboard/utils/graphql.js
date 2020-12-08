import gql from 'graphql-tag';

export const ALL_TEAMS_QUERY = gql`
  query MyQuery {
    allTeamData {
      nodes {
        teamId
        name
        persons
      }
    }
  }
`; 