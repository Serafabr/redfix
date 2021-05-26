import gql from 'graphql-tag';

export const PERSONS_QUERY = gql`
  query TasksQuery {
    allTaskData {
      nodes {
        taskId
        title
        taskCategoryText
        taskCategoryId
        taskStatusText
        taskStatusId
        dateLimit
        place
        supplies
      }
    }
  }
`;