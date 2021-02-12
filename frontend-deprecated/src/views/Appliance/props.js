import gql from 'graphql-tag';

export default {
  GQLs: {
    one: {
      query: gql`
        query ($id: Int!) {
          queryResponse: allApplianceData(condition: {assetId: $id}) {
            nodes {
              assetId
              assetSf
              categoryName
              description
              manufacturer
              model
              name
              price
              serialnum
              tasks
            }
          }
        }
      `
    }
  }
}
