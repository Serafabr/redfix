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

export const EDIT_TASK = gql`
  mutation taskMutation(
    $taskId: Int!, 
    $title: String!, 
    $place: String!, 
    $taskCategoryId: Int!, 
    $taskPriorityId: Int!, 
    $description: String!, 
    $teamId: Int!,
    $dateStart: Datetime,
    $dateLimit: Datetime,
    $dateEnd: Datetime,
    $progress: Int,
  ) {
    modifyTask(input: {attributes: {
      taskId: $taskId,
      title: $title,
      place: $place,
      taskCategoryId: $taskCategoryId,
      taskPriorityId: $taskPriorityId,
      description: $description,
      teamId: $teamId,
      dateStart: $dateStart,
      dateLimit: $dateLimit,
      dateEnd: $dateEnd,
      progress: $progress,
     }}) {
      id
    }
  }
 `;