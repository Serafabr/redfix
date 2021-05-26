import React, { Component } from 'react';

export default function withGraphQL(WrappedComponent) {
  class WithGraphQL extends Component {
    render() {
      const { match, mode, GQLs } = this.props;
      const queryGQL = GQLs[mode].query;
      const mutationGQL = GQLs[mode].mutation;
      const graphQLVariables = {
        id: mode === 'update' || mode === 'one' ? Number(match.params.id) : null,
      };
      return (
        <WrappedComponent
          queryGQL={queryGQL}
          mutationGQL={mutationGQL}
          graphQLVariables={graphQLVariables}
          {...this.props}
        />
      );
    }
  }
  return WithGraphQL;
}