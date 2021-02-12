import React, { Component } from 'react';
import searchList from '../../utils/search/searchList';

function withSearchLogic(WrappedComponent) {
  class WithSearchLogic extends Component {
    constructor(props) {
      super(props);
      this.state = {
        searchTerm: "",
      }
      this.handleChangeSearchTerm = this.handleChangeSearchTerm.bind(this);
    }

    handleChangeSearchTerm(event) {
      if (this.props.paginationLogic) {
        this.setState({
          searchTerm: event.target.value
        }, () => this.props.paginationLogic.setCurrentPage(1));
      } else {
        this.setState({
          searchTerm: event.target.value
        });
      }

    }

    render() {
      const {
        searchableAttributes,
        data,
        ...rest
      } = this.props;
      const dataWithSearch = searchList(data, searchableAttributes, this.state.searchTerm, this.props.parents, this.props.tableConfig.attForDataId);
      return (
        <WrappedComponent
          {...rest}
          searchTerm={this.state.searchTerm}
          data={dataWithSearch}
          handleChangeSearchTerm={this.handleChangeSearchTerm}
        />
      );
    }
  }

  return WithSearchLogic;
}

export default withSearchLogic;