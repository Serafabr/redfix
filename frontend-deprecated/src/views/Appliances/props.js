import gql from 'graphql-tag';

export default {
  GQLs: {
    all: {
      query: gql`
      query MyQuery {
        queryResponse: allApplianceData {
          nodes {
            assetId
            assetSf
            description
            name
            manufacturer
            model
            price
            serialnum
          }
        }
      }
    `
    }
  }
}
