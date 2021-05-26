import gql from 'graphql-tag';

export default {
  GQLs: {
    one: {
      query: gql`
        query ($id: Int!) {
          queryResponse: allTaskData(condition: {taskId: $id}) {
            nodes {
              taskId
              assets
              contract
              contractId
              createdAt
              dateEnd
              dateLimit
              dateStart
              files
              description
              personId
              place
              progress
              projectId
              requestDepartment
              requestName
              requestPhone
              requestEmail
              supplies
              taskCategoryId
              taskCategoryText
              taskPriorityId
              taskPriorityText
              taskStatusId
              taskStatusText
              teamId
              title
              updatedAt
            }
          }
        }
      `
    }
  }
}
