import gql from 'graphql-tag';

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