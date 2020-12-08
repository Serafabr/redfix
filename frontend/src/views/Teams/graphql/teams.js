import gql from 'graphql-tag';

export const TEAMS_QUERY = gql`
  query TeamsQuery {
    allTeamData {
      nodes {
        description
        name
        persons
        teamId
      }
    }
  }
`;