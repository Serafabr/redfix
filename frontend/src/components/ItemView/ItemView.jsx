import React, { Component } from 'react';
import ItemViewUI from './ItemViewUI';
import { withRouter } from 'react-router-dom';

class ItemView extends Component {
  render() {
    const { history, buttonPath, ...rest } = this.props;
    return (
      <ItemViewUI
        {...rest}
        handleCardButton={buttonPath
          ? (() => { history.push(buttonPath) })
          : (() => { })}
      />
    );
  }
}

export default withRouter(ItemView);