import gql from 'graphql-tag';

export default {
  GQLs: {
    one: {
      query: gql`
        query MyQuery($id: Int!) {
          queryResponse: allSpecData(condition: {specId: $id}) {
            nodes {
              specId
              specSf
              activities
              catmat
              catser
              comRef
              createdAt
              criteria
              description
              extRer
              isSubcont
              lifespan
              materials
              name
              notes
              allowDecimals
              qualification
              services
              specCategoryId
              specCategoryText
              specSubcategoryId
              specSubcategoryText
              spreadsheets
              supplies
              tasks
              totalAvailable
              unit
              updatedAt
              version
            }
          }
        }
      `
    }
  }
}
