import gql from 'graphql-tag';

export const DEPOT_BOXES_QUERY = gql`
  query BoxesQuery($boxId: Int!) {
    allDepotData(condition: {boxId: $boxId}) {
      nodes {
        boxId
        boxes
      }
    }
  }
`;

export const DEPOT_QUERY = gql`
  query DepotQuery($depotId: Int!) {
    allDepotData(condition: {depotId: $depotId}) {
      nodes {
        depotSf
        depotId
        company
        depotCategoryId
        depotCategoryText
        dateStart
        dateSign
        datePub
        dateEnd
        description
        title
        url
        sigad
        boxes
        boxId
        createdAt
        createdBy
        updatedAt
        updatedBy
      }
    }
  }
`;