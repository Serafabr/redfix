import React, { Component } from 'react';
import SearchContainer from './SearchContainer';
import ModalCreateFilter from '../Filters/ModalCreateFilter'
import ApplyFilter from '../Filters/ApplyFilter';

export default class SearchWithFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalFilter: false,
      modalApplyFilter: false
    }

    this.toggleCreateFilter = this.toggleCreateFilter.bind(this);
    this.toggleApplyFilter = this.toggleApplyFilter.bind(this);
  }

  toggleCreateFilter() {
    this.setState((prevState) => ({
      modalFilter: !prevState.modalFilter
    }));
  }

  toggleApplyFilter() {
    this.setState((prevState) => ({
      modalApplyFilter: !prevState.modalApplyFilter
    }));
  }

  render() {
    const {
      updateCurrentFilter,
      filterSavedId,
      searchTerm,
      handleChangeSearchTerm,
      filterLogic,
      filterName,
      numberOfitems,
      customFilters,
      filterAttributes
    } = this.props;
    return (
      <>
        <SearchContainer
          searchTerm={searchTerm}
          handleChangeSearchTerm={handleChangeSearchTerm}
          filterLogic={filterLogic}
          filterName={filterName}
          numberOfitems={numberOfitems}
          toggleApply={this.toggleApplyFilter}
          toggleCreate={this.toggleCreateFilter}
        />
        <ModalCreateFilter
          toggle={this.toggleCreateFilter}
          modal={this.state.modalFilter}
          attributes={filterAttributes}
          updateCurrentFilter={updateCurrentFilter}
        />
        <ApplyFilter
          toggle={this.toggleApplyFilter}
          modal={this.state.modalApplyFilter}
          attributes={filterAttributes}
          updateCurrentFilter={updateCurrentFilter}
          customFilters={customFilters}
          currentFilterId={filterSavedId}
        />
      </>
    );
  }
}