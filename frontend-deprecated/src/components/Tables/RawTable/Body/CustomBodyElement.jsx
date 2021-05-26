import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
// CSS
import './Body.css'
// Functions
import addNestingSpaces from './utils/addNestingSpaces';
// Proptypes
import { alignShape } from '../../__propTypes__/tableConfig';
import { childConfigShape } from '../../__propTypes__/nestedTable';
import { openItemsShape } from '../../__propTypes__/nestedTable';

const propTypes = {
  columnId: PropTypes.string.isRequired,
  itemId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  createElement: PropTypes.element,
  dataValue: PropTypes.any,
  hasDataSubValue: PropTypes.bool,
  dataSubValue: PropTypes.string,
  isDataTree: PropTypes.bool,
  idForNestedTable: PropTypes.string,
  childConfig: childConfigShape,
  handleNestedChildrenClick: PropTypes.func,
  openitems: openItemsShape,
  align: alignShape,
  isTextWrapped: PropTypes.bool,
};

const defaultProps = {
  createElement: false,
  hasDataSubValue: false,
  dataSubValue: "Não cadastrado",
  isDataTree: false,
  childConfig: {},
  handleNestedChildrenClick: () => { },
  openitems: {},
  align: "justify",
  isTextWrapped: false,
};

export default function CustomBodyElement({
  columnId,
  itemId,
  item,
  createElement,
  dataValue,
  hasDataSubValue,
  dataSubValue,
  isItemClickable,
  dataAttForClickable,
  itemPathWithoutID,
  isDataTree,
  idForNestedTable,
  childConfig,
  handleNestedChildrenClick,
  openitems,
  align,
  isTextWrapped,
  history,
  styleBodyElement,
  styleText
}) {
  return (
    <td
      className={classNames({
        "table-body__cell": true,
      })}
      key={columnId}
      style={styleBodyElement && styleBodyElement(item, columnId)}
    >
      <div
        className={classNames({
          [`table-body__cell--${align}`]: align,
        })}
        style={{ display: "flex", alignItems: "center" }}
      >
        {isDataTree && addNestingSpaces(childConfig, columnId, itemId, handleNestedChildrenClick, openitems, idForNestedTable)}
        <div
          style={{ display: "block" }}
          className={classNames({
            "table-body__cell--clickable": isItemClickable && (dataAttForClickable === columnId),
          })}
          onClick={(isItemClickable && dataAttForClickable === columnId) ? (
            () => {
              history.push(itemPathWithoutID + itemId)
            }) : undefined}
        >
          <div className={classNames({
            "table-body__cell__value": true,
            "table-body__cell--nowrap": !isTextWrapped,
          })}
            style={styleText}
          >
            {createElement ? createElement : dataValue}
          </div>
          {hasDataSubValue && !createElement && (
            <div className={classNames({
              "table-body__cell__sub-value": true,
            })}
            >
              {dataSubValue}
            </div>
          )}
        </div>
      </div>
    </td>
  );
}

CustomBodyElement.propTypes = propTypes;
CustomBodyElement.defaultProps = defaultProps;