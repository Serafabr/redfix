import gql from 'graphql-tag';

export const SPEC_QUERY = gql`
  query SpecQuery(
    $specId: Int!,
  ) {
    allSpecData(condition: {
      specId: $specId,
    }) {
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
        extRef
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
`;