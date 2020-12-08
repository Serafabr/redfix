import React, { Component } from "react";
import { Query } from 'react-apollo';

export default function withQuery(WrappedComponent) {
  class WithQuery extends Component {
    render() {
      return (
        <Query
          query={this.props.queryGQL}
          variables={this.props.graphQLVariables}
          fetchPolicy="no-cache"
        >
          {
            ({ loading, error, data }) => {
              if (loading) return (<div>Carregando...</div>);
              if (error) return (<div>Algo deu errado!</div>);
              return (
                <WrappedComponent
                  data={data}
                  {...this.props}
                />
              );
            }
          }
        </Query>
      );
    }
  }

  // Add display name for debugging.
  WithQuery.displayName = `WithQuery(${WrappedComponent.displayName ||
    WrappedComponent.name ||
    "Component"})`;

  return WithQuery;

}
