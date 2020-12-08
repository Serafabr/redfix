import React, { Component } from 'react';
import TableWithPagesUI from '../TableWithPages/TableWithPagesUI';
import SearchWithFilter from '../../Search/SearchWithFilter';
import withFilterLogic from '../../Filters/withFilterLogic';
import PropTypes from 'prop-types';

import withSorting from '../TableWithSorting/withSorting';
import withPaginationLogic from '../TableWithPages/withPaginationLogic';
import withSearchLogic from '../../Search/withSearchLogic';
import withNestedData from '../NestedTable/withNestedData';
// PropTypes
import { selectedDataShape, tableConfigShape } from '../__propTypes__/tableConfig';

import { compose } from 'redux';

function createDataWithoutCloseditems(data, parents, openitems, tableConfig) {
  return (data.filter((item) => {
    const id = item[tableConfig.attForDataId];
    return parents[id].every((parent) => openitems[parent]);
  }));
}

const propTypes = {
  data: PropTypes.array,
  tableConfig: tableConfigShape,
  selectedData: selectedDataShape,
  handleSelectData: PropTypes.func,
  // TODO
  searchableAttributes: PropTypes.any,
  filterAttributes: PropTypes.any,
  customFilters: PropTypes.any,
  // Props from HOCS:
  parents: PropTypes.any,
  searchTerm: PropTypes.any,
  handleChangeSearchTerm: PropTypes.any,
  filterLogic: PropTypes.any,
  filterName: PropTypes.any,
  filterSavedId: PropTypes.any,
  updateCurrentFilter: PropTypes.any,
};

const defaultProps = {
  selectedData: [],
}

class FullTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openitems: {},
    }
  }

  handleNestedChildrenClick = (id) => () => {
    this.setState((prevState) => ({
      openitems: { ...prevState.openitems, [id]: !prevState.openitems[id] }
    }))
  }

  render() {
    const {
      tableConfig,
      selectedData,
      handleSelectData,
      data,
      parents,
      searchableAttributes,
      searchTerm,
      handleChangeSearchTerm,
      customFilters,
      filterLogic,
      filterName,
      filterSavedId,
      filterAttributes,
      updateCurrentFilter
    } = this.props;
    const { isDataTree } = tableConfig;
    const dataWithoutCloseditems = isDataTree && createDataWithoutCloseditems(data, parents, this.state.openitems, tableConfig);
    return (
      <>
        <SearchWithFilter
          updateCurrentFilter={updateCurrentFilter}
          filterSavedId={filterSavedId}
          searchTerm={searchTerm}
          handleChangeSearchTerm={handleChangeSearchTerm}
          filterLogic={filterLogic}
          filterName={filterName}
          numberOfitems={data.length}
          customFilters={customFilters}
          filterAttributes={filterAttributes}
        />
        <TableWithPagesUI
          {...this.props}
          tableConfig={tableConfig}
          selectedData={selectedData}
          handleSelectData={handleSelectData}
          data={dataWithoutCloseditems || data}
          hasSearch={false}
          searchableAttributes={searchableAttributes}
          handleNestedChildrenClick={this.handleNestedChildrenClick}
          openitems={this.state.openitems}
        />
      </>
    );
  }
}

FullTable.propTypes = propTypes;
FullTable.defaultProps = defaultProps;

export default compose(
  withSorting,
  withNestedData,
  withPaginationLogic,
  withSearchLogic,
  withFilterLogic,
)(FullTable);