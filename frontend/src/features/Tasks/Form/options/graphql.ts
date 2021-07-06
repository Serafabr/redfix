import gql from "graphql-tag";

export const TEAM_OPTIONS = gql`
  query teamOptions {
    teams {
      nodes {
        name
        teamId
      }
    }
  }
`;