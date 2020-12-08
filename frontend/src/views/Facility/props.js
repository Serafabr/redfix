import gql from 'graphql-tag';

export default {
  GQLs: {
    one: {
      query: gql`
        query ($id: Int!) {
          queryResponse: allFacilityData(condition: {assetId: $id}) {
            nodes {
              assetId
              assetSf
              area
              categoryName
              description
              latitude
              longitude
              name
              tasks
            }
          }
        }
      `
    }
  }
}
