import gql from 'graphql-tag';

export const TASK_QUERY = gql`
  query TaskQuery($taskId: Int!) {
    allTaskData(condition: {taskId: $taskId}) {
      nodes {
        taskId
        createdAt
        createdBy
        dateEnd
        dateLimit
        dateStart
        description
        events
        files
        moveOptions
        nextTeamId
        nextTeamName
        place
        progress
        projectName
        requestTitle
        supplies
        sendOptions
        taskCategoryId
        taskCategoryText
        taskPriorityId
        taskPriorityText
        taskStatusId
        taskStatusText
        teamId
        teamName
        updatedBy
        updatedAt
        title
        assets
      }
    }
  }
`;

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

export const TASK_ASSETS_QUERY = gql`
  query TaskQuery($taskId: Int!) {
    allTaskData(condition: {taskId: $taskId}) {
      nodes {
        taskId
        assets
      }
    }
  }
 `;
 
 export const TASK_EVENTS_QUERY = gql`
  query TaskQuery($taskId: Int!) {
    allTaskData(condition: {taskId: $taskId}) {
      nodes {
        taskId
        createdAt
        taskStatusText
        teamId
        teamName
        nextTeamId
        nextTeamName
        events
      }
    }
  }
 `;
 
 export const TASK_SUPPLIES_QUERY = gql`
  query TaskQuery($taskId: Int!) {
    allTaskData(condition: {taskId: $taskId}) {
      nodes {
        taskId
        supplies
      }
    }
  }
`;