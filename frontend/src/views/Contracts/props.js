import gql from 'graphql-tag';

export default {
  GQLs: {
    all: {
      query: gql`
        query MyQuery {
          queryResponse: allDepotData {
            nodes {
              contractSf
              contractId
              company
              contractStatusId
              contractStatusText
              dateEnd
              datePub
              dateSign
              dateStart
              description
              parent
              title
              url
            }
          }
        }
      `
    }
  }
}
