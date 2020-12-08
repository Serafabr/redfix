import gql from 'graphql-tag';

export default {
  GQLs: {
    all: {
      query: gql`
        query MyQuery {
          queryResponse: allTaskData(orderBy: TASK_ID_ASC) {
            nodes {
              taskId
              assets
              contract
              contractId
              createdAt
              dateEnd
              dateLimit
              dateStart
              description
              files
              place
              personId
              progress
              projectId
              requestDepartment
              requestEmail
              requestName
              requestPhone
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
