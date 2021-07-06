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

export const PROJECT_OPTIONS = gql`
  query projectOptions {
    projects {
      nodes {
        name
        projectId
      }
    }
  }
`;

export const ASSET_OPTIONS = gql`
  query assetOptions {
    assets {
      nodes {
        name
        assetId
        assetSf
      }
    }
  }
`;