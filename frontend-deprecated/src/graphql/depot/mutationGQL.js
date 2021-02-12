import gql from 'graphql-tag';

export const DEPOT_BOXES_QUERY = gql`
  query BoxesQuery($depotId: Int!) {
    allDepotData(condition: {depotId: $depotId}) {
      nodes {
        depotId
        boxes
      }
    }
  }
`;