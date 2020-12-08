import gql from 'graphql-tag';

export const SPECS_QUERY = gql`
  query SpecsQuery {
    allSpecData {
      nodes {
        specId
        specSf
        name
        specCategoryText
        specCategoryId
        specSubcategoryText
        specSubcategoryId
        totalAvailable
        unit
        version
      }
    }
  }
`;