import gql from 'graphql-tag';

export const DEPOTS_QUERY = gql`
  query DepotsQuery {
    allDepotData {
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
      }
    }
  }
`;