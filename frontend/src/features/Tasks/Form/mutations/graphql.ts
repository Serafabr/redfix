import gql from "graphql-tag";

export const CREATE_TASK = gql`
  mutation createTaskMutation(
    $title: String!,
    $place: String,
    $description: String!,
    # $team: String,
    $taskCategoryId: Int!,
    $taskPriorityId: Int!,
    # $taskStatusId: Int!,
    $projectId: Int,
    $dateStart: Date,
    $dateLimit: Date,
    $assets: [Int]!,
  ) {
    createTask(input: {
      title: $title,
      place: $place,
      description: $description,
      # team: $team,
      taskCategoryId: $taskCategoryId,
      taskPriorityId: $taskPriorityId,
      # taskStatusId: $taskStatusId,
      projectId: $projectId,
      dateStart: $dateStart,
      dateLimit: $dateLimit,
      assets: $assets,
    }) {
      id
    }
  }
`;