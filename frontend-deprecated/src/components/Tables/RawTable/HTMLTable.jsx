import React, { Component } from 'react';
import './HTMLTable.css';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withRouter } from "react-router";
// PropTypes
import { selectedDataShape, actionColumnShape, columnsConfigShape } from '../__propTypes__/tableConfig';
import { childConfigShape, openItemsShape } from '../__propTypes__/nestedTable';
// Components
import CustomHeader from './Header/CustomHeader';
import CheckboxHeader from './Header/CheckboxHeader';
import CustomBodyElement from './Body/CustomBodyElement';
import CheckboxBodyElement from './Body/CheckboxBodyElement';
import ActionBodyElement from './Body/ActionBodyElement';
import FileIconElement from './Body/FileIconElement';

const propTypes = {
  data: PropTypes.array,
  attForDataId: PropTypes.string.isRequired,
  hasCheckbox: PropTypes.bool,
  checkboxWidth: PropTypes.string,
  isItemClickable: PropTypes.bool,
  itemPathWithoutID: PropTypes.string,
  columnsConfig: PropTypes.arrayOf(columnsConfigShape),
  selectedData: selectedDataShape,
  currentPage: PropTypes.number.isRequired,
  itemsPerPage: PropTypes.number.isRequired,
  activeSortKey: PropTypes.string,
  isSortReverse: PropTypes.bool,
  onSort: PropTypes.func,
  isDataTree: PropTypes.bool,
  idForNestedTable: PropTypes.string,
  childConfig: childConfigShape,
  handleNestedChildrenClick: PropTypes.func,
  openitems: openItemsShape,
  actionColumn: actionColumnShape,
  actionColumnWidth: PropTypes.string,
  isFileTable: PropTypes.bool,
  fileColumnWidth: PropTypes.string
};

const defaultProps = {
  data: [],
  hasCheckbox: false,
  checkboxWidth: "5%",
  selectedData: {},
  isSortReverse: false,
  isDataTree: false,
};

class HTMLTable extends Component {
  render() {
    const {
      data,
      attForDataId,
      hasCheckbox,
      checkboxWidth,
      isItemClickable,
      dataAttForClickable,
      itemPathWithoutID,
      columnsConfig,
      selectedData,
      handleSelectData,
      currentPage,
      itemsPerPage,
      activeSortKey,
      isSortReverse,
      onSort,
      isDataTree,
      idForNestedTable,
      childConfig,
      handleNestedChildrenClick,
      openitems,
      actionColumn,
      actionColumnWidth,
      handleAction,
      isFileTable,
      fileColumnWidth,
      firstEmptyColumnWidth, 
      disableSorting,
      styleBodyElement
    } = this.props;
    const visibleData = itemsPerPage ? (data.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)) : data;
    const numColumns = columnsConfig.length + (firstEmptyColumnWidth ? 1 : 0) + (hasCheckbox ? 1: 0) + (isFileTable ? 1: 0) + (actionColumn ? 1: 0);
    return (
      <div className="table-wrapper">
        <table className="main-table">
          <thead className="main-table__header">
            <tr
              className="main-table__header__row"
              key="header"
            >
              {firstEmptyColumnWidth && (
                <CustomHeader
                  width={firstEmptyColumnWidth}
                  id={"empty"}
                  value={""}
                  align={"center"}
                  disableSorting
                />
              )}
              {hasCheckbox && (
                <CheckboxHeader
                  width={checkboxWidth}
                  selectedData={selectedData}
                  visibleData={visibleData}
                  attForDataId={attForDataId}
                  handleSelectData={handleSelectData}
                />
              )}
              {isFileTable && (
                <CustomHeader
                  id={"format"}
                  value={""}
                  align={"center"}
                  width={fileColumnWidth}
                  disableSorting
                />
              )}
              {columnsConfig.map((column) => (
                <CustomHeader
                  id={column.columnId}
                  key={column.columnId}
                  value={column.columnName}
                  align={column.align}
                  width={column.width}
                  sortKey={column.sortKey || column.columnId}
                  activeSortKey={activeSortKey}
                  isSortReverse={isSortReverse}
                  onSort={onSort}
                  disableSorting={disableSorting}
                />
              ))}
              {actionColumn && (
                <CustomHeader
                  id={"action"}
                  value={"Ações"}
                  align={"center"}
                  width={actionColumnWidth}
                  disableSorting
                />
              )}
            </tr>
          </thead>
          <tbody className="main-table__body">
            {visibleData.length === 0 ? (
              <tr
                className={classNames({
                  "main-table__body__row": true,
                })}
                key={"empty"}
              >
                <td 
                  colSpan={numColumns}
                  className={classNames("table-body__cell")}
                >
                  <div
                    className={classNames("table-body__cell--center")}
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    Tabela sem elementos para serem visualizados.
                  </div>
                </td>
              </tr>
            ) : (
              visibleData.map((item) => (
                <tr
                  className={classNames({
                    "main-table__body__row": true,
                    "main-table__body__row--selected": selectedData[item[attForDataId]],
                  })}
                  key={item[attForDataId]}
                >
                  {firstEmptyColumnWidth && (
                    <CustomBodyElement
                      id={"empty"}
                      value={""}
                      columnId={"empty"}
                      itemId={item[attForDataId]}
                      key={"empty"}
                      dataValue={""}
                      openitems={openitems}
                      align={"center"}
                    />
                  )}
                  {hasCheckbox && (
                    <CheckboxBodyElement
                      selectedData={selectedData}
                      handleSelectData={handleSelectData}
                      itemId={item[attForDataId]}
                    />
                  )}
                  {isFileTable && (
                    <FileIconElement
                      columnId={"file"}
                      format={item.format}
                    />
                  )}
                  {columnsConfig.map((column) => {
                    let dataValue = column.idForValues && item[column.idForValues[0]];
                    if (column.idForValues && column.idForValues[0] && column.createElementWithData) {
                      dataValue = column.createElementWithData(item[column.idForValues[0]], item);
                    }
  
                    let dataSubValue = column.idForValues && item[column.idForValues[1]];
                    if (column.idForValues && column.idForValues[1] && column.createElementWithSubData) {
                      dataSubValue = column.createElementWithSubData(item[column.idForValues[1]], item);
                    }
  
                    return (
                      <CustomBodyElement
                        columnId={column.columnId}
                        itemId={item[attForDataId]}
                        key={column.columnId}
                        createElement={column.createElement || null}
                        dataValue={dataValue || ""}
                        hasDataSubValue={column.idForValues && Boolean(column.idForValues[1])}
                        dataSubValue={dataSubValue}
                        isItemClickable={isItemClickable}
                        dataAttForClickable={dataAttForClickable}
                        itemPathWithoutID={itemPathWithoutID}
                        isDataTree={isDataTree}
                        idForNestedTable={idForNestedTable}
                        childConfig={childConfig}
                        handleNestedChildrenClick={handleNestedChildrenClick}
                        openitems={openitems}
                        align={column.align}
                        isTextWrapped={column.isTextWrapped}
                        history={this.props.history}
                        styleBodyElement={styleBodyElement}
                        styleText={column.styleText}
                        item={item}
                      />
                    );
                  }
                  )}
                  {actionColumn && (
                    <ActionBodyElement
                      columnId={"action"}
                      itemId={item[attForDataId]}
                      actionType={actionColumn}
                      handleAction={{
                        "delete": (id) => () => { handleAction.delete(id) },
                        "edit": (id) => () => { handleAction.edit(id) }
                      }}
                      openItems={openitems}
                    />
                  )}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    );
  }
}

export default withRouter(HTMLTable);

HTMLTable.propTypes = propTypes;
HTMLTable.defaultProps = defaultProps;