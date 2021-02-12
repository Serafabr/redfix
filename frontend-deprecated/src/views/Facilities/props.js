import gql from 'graphql-tag';

export default {
  GQLs: {
    all: {
      query: gql`
        query MyQuery {
          queryResponse: allFacilityData {
            nodes {
              assetId
              assetSf
              area
              description
              latitude
              longitude
              name
            }
          }
        }
      `
    }
  }
}
