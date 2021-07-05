import gql from "graphql-tag";

export const CATEGORY_OPTIONS = gql`
  query categoryOptions {
    taskCategories {
      nodes {
        taskCategoryId
        taskCategoryText
      }
    }
  }
`;