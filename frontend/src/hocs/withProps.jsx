import React, { Component } from "react";

export default function withProps(props) {
  return (
    function (WrappedComponent) {
      class WithProps extends Component {
        render() {
          return <WrappedComponent {...props} {...this.props}/>
        }
      }
      return WithProps;
    }
  );
}