import React, { Component } from 'react';
import sortList from './sortList';

export default function withSorting(WrappedTable) {

  class WithSorting extends Component {
    constructor(props) {
      super(props);
      this.state = {
        sortKey: null,
        isSortReverse: false
      }

      this.onSort = this.onSort.bind(this);
    }

    onSort(sortKey) {
      const isSortReverse =
        this.state.sortKey === sortKey && !this.state.isSortReverse;
      this.setState({ sortKey, isSortReverse });
    }

    render() {
      const { data, ...rest } = this.props;
      const { isDataTree } = this.props.tableConfig;
      const { sortKey, isSortReverse } = this.state;

      const sortedList = sortList(data, sortKey, isSortReverse, isDataTree);

      return (
        <WrappedTable
          {...rest}
          onSort={this.onSort}
          activeSortKey={sortKey}
          isSortReverse={isSortReverse}
          data={sortedList}
        />
      );
    }
  }

  return WithSorting;
}
