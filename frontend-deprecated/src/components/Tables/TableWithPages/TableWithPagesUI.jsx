import React, { Component } from 'react';
import HTMLTable from '../RawTable/HTMLTable';
import PaginationForTable from '../../Paginations/PaginationForTable';
import PageInput from './PageInput';
import SearchInput from '../../Search/SearchInput';
import { Label, Input } from 'reactstrap';

import './TableWithPages.css'

const searchImage = require("../../../assets/icons/search_icon.png");

class TableWithPagesUI extends Component {
  render() {
    const {
      pageOnInput,
      currentPage,
      itemsPerPage,
      handleChangePageOnInput,
      handleFocusOutPageOnInput,
      handleEnterPageOnInput,
      setCurrentPage,
      handleitemsPerPage
    } = this.props.paginationLogic;

    const {
      hasSearch,
      searchTerm,
      handleChangeSearchTerm,
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
      disableSorting,
    } = this.props;

    const pagesTotal = Math.ceil(data.length / itemsPerPage);

    return (
      <div className="table-container">
        <div className="table-container__pagination-container">
          {hasSearch
            ? (<SearchInput
              searchTerm={searchTerm}
              searchImage={searchImage}
              handleChangeSearchTerm={handleChangeSearchTerm}
            />
            )
            : (<PageInput
              pageOnInput={pageOnInput}
              handleChangePageOnInput={handleChangePageOnInput}
              handleFocusOutPageOnInput={handleFocusOutPageOnInput}
              handleEnterPageOnInput={handleEnterPageOnInput}
              pagesTotal={pagesTotal}
            />
            )
          }
          <div className="pagination-container__pagination-selector">
            <PaginationForTable
              pagesTotal={pagesTotal}
              pageCurrent={currentPage}
              setCurrentPage={setCurrentPage}
            />
          </div>
        </div>
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
          currentPage={currentPage}
          itemsPerPage={itemsPerPage}
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
          disableSorting={disableSorting}
          styleBodyElement={tableConfig.styleBodyElement}
        />
        <div
          className="table-container__pagination-container"
          style={{ marginTop: "5px" }}
        >
          <div className="items-per-page-container">
            <Label className="items-per-page__label" for="items-per-page">items por página: </Label>
            <Input
              type="select"
              name="items-per-page"
              id="items-per-page"
              className="items-per-page__selector"
              value={itemsPerPage}
              onChange={handleitemsPerPage}
            >
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={15}>15</option>
              <option value={25}>25</option>
              <option value={50}>50</option>
            </Input>
          </div>
          <div className="pagination-container__pagination-selector">
            <PaginationForTable
              pagesTotal={pagesTotal}
              pageCurrent={currentPage}
              setCurrentPage={setCurrentPage}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default TableWithPagesUI;