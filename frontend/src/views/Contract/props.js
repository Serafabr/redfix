import gql from 'graphql-tag';

export default {
  GQLs: {
    one: {
      query: gql`
        query MyQuery($id: Int!) {
          queryResponse: allContractData(condition: {contractId: $id}) {
            nodes {
              contractSf
              contractId
              company
              contractStatusId
              contractStatusText
              dateEnd
              datePub
              dateSign
              dateStart
              description
              parent
              supplies
              title
              url
            }
          }
        }
      `
    }
  }
}
