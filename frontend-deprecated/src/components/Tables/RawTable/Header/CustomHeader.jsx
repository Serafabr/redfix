import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
// CSS
import './Header.css'
// Other Components
import HeaderWithSort from '../HeaderWithSort/HeaderWithSort';
// PropTypes shapes
import { alignShape } from '../../__propTypes__/tableConfig';

const propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.string,
  align: alignShape,
  // Percentual value. All widths must sum 100%.
  width: PropTypes.string.isRequired,
  sortKey: PropTypes.string,
  activeSortKey: PropTypes.string,
  IsSortReverse: PropTypes.bool,
  onSort: PropTypes.func,
};

const defaultProps = {
  value: "Coluna",
  align: "center",
  activeSortKey: null,
  IsSortReverse: false,
};

export default function CustomHeader({ id, value, onSort, width, align, activeSortKey, isSortReverse, disableSorting, sortKey }) {
  return (
    <th
      className={classNames({
        "header-container": true,
        [`header-container--${align}`]: align,
      })}
      style={{ width: width }}
      key={id}
    >
      <div className="header-container__head-value">
        {
          onSort === false
            ? (
              value
            )
            : (
              <HeaderWithSort 
                sortKey={sortKey} 
                onSort={onSort} 
                activeSortKey={activeSortKey} 
                isSortReverse={isSortReverse}
                disableSorting={disableSorting}
              >
                {value}
              </HeaderWithSort>
            )
        }
      </div>
    </th>
  );
}

CustomHeader.propTypes = propTypes;
CustomHeader.defaultProps = defaultProps;
