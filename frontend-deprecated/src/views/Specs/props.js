import gql from 'graphql-tag';

export default {
  GQLs: {
    all: {
      query: gql`
        query MyQuery {
          queryResponse: allSpecData {
            nodes {
              specId
              specSf
              name
              specCategoryText
              specSubcategoryText
              totalAvailable
            }
          }
        }
      `
    }
  }
}
