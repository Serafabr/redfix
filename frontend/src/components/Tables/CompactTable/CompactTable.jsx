import React, { Component } from 'react';
import './CompactTable.css';
import withSorting from '../TableWithSorting/withSorting';
import HTMLTable from '../RawTable/HTMLTable';
import PropTypes from 'prop-types';
// PropTypes
import { selectedDataShape, tableConfigShape } from '../__propTypes__/tableConfig';

import { compose } from 'redux';

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

class CompactTable extends Component {
  state = {  }
  render() { 
    const {
      data,
      tableConfig,
      selectedData,
      handleSelectData,
      activeSortKey,
      isSortReverse,
      onSort,
      childConfig,
      handleNestedChildrenClick,
      openitems,
      handleAction
    } = this.props;
    return ( 
      <HTMLTable
          data={data}
          attForDataId={tableConfig.attForDataId}
          hasCheckbox={tableConfig.hasCheckbox}
          checkboxWidth={tableConfig.checkboxWidth}
          isItemClickable={tableConfig.isItemClickable}
          dataAttForClickable={tableConfig.dataAttForClickable}
          itemPathWithoutID={tableConfig.itemPathWithoutID}
          columnsConfig={tableConfig.columnsConfig}
          selectedData={selectedData}
          handleSelectData={handleSelectData}
          activeSortKey={activeSortKey}
          isSortReverse={isSortReverse}
          onSort={onSort}
          isDataTree={tableConfig.isDataTree}
          idForNestedTable={tableConfig.idForNestedTable}
          childConfig={childConfig}
          handleNestedChildrenClick={handleNestedChildrenClick}
          openitems={openitems}
          actionColumn={tableConfig.actionColumn}
          actionColumnWidth={tableConfig.actionColumnWidth}
          isFileTable={tableConfig.isFileTable}
          fileColumnWidth={tableConfig.fileColumnWidth}
          firstEmptyColumnWidth={tableConfig.firstEmptyColumnWidth}
          handleAction={handleAction}
        />
     );
  }
}
 
export default compose(
  withSorting
)(CompactTable);