import gql from 'graphql-tag';

export const EDIT_TASK = gql`
  mutation taskMutation(
    $taskId: Int!, 
    $title: String!, 
    $place: String!, 
    $taskCategoryId: Int!, 
    $taskPriorityId: Int!, 
    $description: String!, 
    $teamId: Int!,
  ) {
    modifyTask(input: {attributes: {
      taskId: $taskId,
      title: $title,
      place: $place,
      taskCategoryId: $taskCategoryId,
      taskPriorityId: $taskPriorityId,
      description: $description,
      teamId: $teamId,
     }}) {
      id
    }
  }
 `;
 
 export const EDIT_TASK_DATE = gql`
  mutation taskMutation(
    $taskId: Int!, 
    $title: String!, 
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