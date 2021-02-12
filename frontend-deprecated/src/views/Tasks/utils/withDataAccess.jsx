import React, { Component } from 'react';

export default function withDataAccess(WrappedComponent) {
  return (
    class DataAccess extends Component {
      render() {
        const { data, ...rest } = this.props;
        return (
          <WrappedComponent
            {...rest}
            data={data.queryResponse.nodes}
          />
        );
      }
    }
  );
}