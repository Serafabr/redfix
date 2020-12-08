import gql from 'graphql-tag';

export const SUPPLIES_QUERY = gql`
  query SuppliesQuery {
    allTaskData {
      nodes {
        supplyOptions
      }
    }
  }
`;

export const INSERT_SUPPLY = gql`
  mutation SupplyTaskMutation($taskId: Int!, $supplyId: Int!, $qty: BigFloat!) {
    insertTaskSupply(input: {
      taskId: $taskId,
      supplyId: $supplyId,
      qty: $qty
    }) {
      id
    }
  }
`;

export const MODIFY_SUPPLY = gql`
  mutation SupplyTaskMutation($taskId: Int!, $supplies: [TaskSupplyInput]) {
    modifyTaskSupplies(input: {
      taskId: $taskId,
      supplies: $supplies,
    }) {
      id
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