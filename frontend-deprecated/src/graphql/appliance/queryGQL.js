import gql from 'graphql-tag';

export const APPLIANCE_TASKS_QUERY = gql`
  query ApplianceQuery($assetId: Int!) {
    allApplianceData(condition: {assetId: $assetId}) {
      nodes {
        assetId
        tasks
      }
    }
  }
`;