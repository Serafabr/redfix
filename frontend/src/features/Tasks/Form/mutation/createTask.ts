import gql from "graphql-tag";

export const CREATE_TASK = gql`
  mutation createTaskMutation(
    $title: String!,
    $place: String,
    $description: String!,
    # $team: Int!,
    $taskCategoryId: Int!,
    $taskPriorityId: Int!,
    # $status:
    $projectId: Int,
    $dateStart: Date,
    $dateLimit: Date,
    $assets: [Int]!,
  ) {
    createTask(input: {
      title: $title
      place: $place
      description: $description
      # team: $team
      taskCategoryId: $taskCategoryId
      taskPriorityId: $taskPriorityId
      # status: $status
      projectId: $projectId
      dateStart: $dateStart
      dateLimit: $dateLimit
      assets: $assets
    }) {
      id
    }
  }
`;