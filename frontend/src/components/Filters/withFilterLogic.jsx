import React, { Component } from 'react';
import filterList from '../../utils/filter/filter';

export default function withFilterLogic(WrappedComponent) {
  class WithFilterLogic extends Component {
    constructor(props) {
      super(props);
      this.state = {
        filterSavedId: null,
        filterLogic: [],
        filterName: "",
      };

      this.updateCurrentFilter = this.updateCurrentFilter.bind(this);
    }

    updateCurrentFilter(filterLogic, filterName, filterId = null) {
      this.setState({
        filterLogic,
        filterName,
        filterSavedId: filterId
      }, () => this.props.paginationLogic.setCurrentPage(1));
    }

    render() {
      const { filterLogic } = this.state;
      const { data, ...rest } = this.props;
      const dataWithFilter = filterLogic.length > 0 ? filterList(data, filterLogic) : data;
      return (
        <WrappedComponent
          {...rest}
          {...this.state}
          data={dataWithFilter}
          updateCurrentFilter={this.updateCurrentFilter}
        />
      );
    }
  }
  return WithFilterLogic;
}

