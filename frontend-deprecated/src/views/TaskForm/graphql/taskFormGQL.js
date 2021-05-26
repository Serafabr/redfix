import gql from 'graphql-tag';

export const FORM_OPTIONS_QUERY = gql`
  query AssetsQuery {
    allTaskFormData {
      nodes {
        priorityOptions
        categoryOptions
      }
    }
  }
`;

export const INSERT_TASK = gql`
  mutation myMutation(
    $title: String!, 
    $place: String!,
    $description: String!,
    $teamId: Int!,
    $taskCategoryId: Int!,
    $taskPriorityId: Int!,
    $taskStatusId: Int!,
    $dateStart: Datetime,
    $dateLimit: Datetime,
    $assets: [Int],
  ) {
    insertTask (input: {
      attributes: {
        title: $title, 
        place: $place,
        description: $description,
        teamId: $teamId,
        taskCategoryId: $taskCategoryId,
        taskPriorityId: $taskPriorityId,
        taskStatusId: $taskStatusId,
        dateStart: $dateStart,
        dateLimit: $dateLimit,
       },
      assets: $assets,
    }) {
      id
    }
  }
`;