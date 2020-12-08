import React, { Component } from "react";
import { Query } from 'react-apollo';

export default function withDataFetching(graphQLString = null, graphQLVariables = null) {
  return (
    function (WrappedComponent) {
      class WithDataFetching extends Component {
        render() {
          return (
            <Query
              query={this.props.customGraphQLString || graphQLString}
              variables={this.props.customGraphQLVariables || graphQLVariables}
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
      WithDataFetching.displayName = `WithDataFetching(${WrappedComponent.displayName ||
        WrappedComponent.name ||
        "Component"})`;

      return WithDataFetching;
    }
  );
}