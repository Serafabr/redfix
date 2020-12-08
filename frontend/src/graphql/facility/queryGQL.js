import gql from 'graphql-tag';

export const FACILITY_TASKS_QUERY = gql`
  query FacilityQuery($assetId: Int!) {
    allFacilityData(condition: {assetId: $assetId}) {
      nodes {
        assetId
        tasks
      }
    }
  }
`;