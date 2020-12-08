import React, { Component } from 'react';
import TableWithPagesUI from './TableWithPagesUI';
import withPaginationLogic from './withPaginationLogic';
import withSorting from '../TableWithSorting/withSorting';
import withSearchLogic from '../../Search/withSearchLogic';
import { compose } from 'redux';

class TableWithPages extends Component {
  render() {
    return (
      <TableWithPagesUI
        {...this.props}
      />
    );
  }
}

export default compose(
  withSorting,
  withPaginationLogic,
  withSearchLogic,
)(TableWithPages);