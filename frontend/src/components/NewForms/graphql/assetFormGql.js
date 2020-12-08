import gql from 'graphql-tag';

export const ALL_ASSETS_QUERY = gql`
  query AssetsQuery {
    allTaskData {
      nodes {
        assetOptions
      }
    }
  }
`;

export const INSERT_ASSET = gql`
  mutation AssetTaskMutation($taskId: Int!, $assetId: Int!) {
    insertTaskAsset(input: {
      taskId: $taskId,
      assetId: $assetId,
    }) {
      id
    }
  }
`;

export const REMOVE_ASSET = gql`
  mutation RemoveAssetTaskMutation($taskId: Int!, $assetId: Int!) {
    removeTaskAsset(input: {
      taskId: $taskId,
      assetId: $assetId,
    }) {
      id
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