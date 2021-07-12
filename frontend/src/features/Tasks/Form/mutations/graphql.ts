import gql from "graphql-tag";

export const CREATE_TASK = gql`
  mutation createTaskMutation {
    createTask(input: {
      task,
      place,
      description,
      team,
      category,
      priority,
      status,
      project,
      startDate,
      limitDate,
      assets,
    }) {
      id
    }
  }
`;