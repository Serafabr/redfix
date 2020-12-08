import React, { Component } from 'react';
import { fetchGQLEdit, fetchGQLNew } from './utils/dataFetchParameters';

export default function withGraphQLVariables(WrappedComponent) {
  class WithGraphQLVariables extends Component {
    render() {
      const { match, editMode } = this.props;
      const customGraphQLVariables = {};
      if (match) {
        customGraphQLVariables.taskId = Number(match.params.id);
      }
      return (
        <WrappedComponent
          customGraphQLVariables={customGraphQLVariables}
          customGraphQLString={editMode
            ? fetchGQLEdit
            : fetchGQLNew
          }
          {...this.props}
        />
      );
    }
  }
  return WithGraphQLVariables;
}