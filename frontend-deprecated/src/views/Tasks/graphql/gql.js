import gql from 'graphql-tag';

export const TASKS_QUERY = gql`
  query TasksQuery {
    allTaskData {
      nodes {
        taskId
        title
        taskPriorityText
        taskPriorityId
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