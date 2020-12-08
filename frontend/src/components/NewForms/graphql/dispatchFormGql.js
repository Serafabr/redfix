import gql from 'graphql-tag';

export const ALL_TEAMS_QUERY = gql`
  query TeamsQuery($taskId: Int!) {
    allTaskData(condition: {taskId: $taskId}) {
      nodes {
        sendOptions
      }
    }
  }
`;

export const SEND_TASK = gql`
  mutation SendTaskMutation($taskId: Int!, $personId: Int!, $teamId: Int!, $nextTeamId: Int!, $note: String) {
    sendTask(input: {
      event: {
        taskId: $taskId,
        personId: $personId,
        teamId: $teamId,
        nextTeamId: $nextTeamId,
        note: $note
      }
    }) {
      id
    }
  }
`;

export const RECEIVE_TASK = gql`
  mutation ReceiveTaskMutation($taskId: Int!, $personId: Int!, $teamId: Int!, $taskStatusId: Int!, $note: String) {
    receiveTask(input: {
      event: {
        taskId: $taskId,
        personId: $personId,
        teamId: $teamId,
        taskStatusId: $taskStatusId,
        note: $note
      }
    }) {
      id
    }
  }
`;

export const CANCEL_SEND_TASK = gql`
  mutation CancelSendTaskMutation($taskId: Int!, $personId: Int!, $teamId: Int!) {
    cancelSendTask(input: {
      event: {
        taskId: $taskId,
        personId: $personId,
        teamId: $teamId,
      }
    }) {
      id
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