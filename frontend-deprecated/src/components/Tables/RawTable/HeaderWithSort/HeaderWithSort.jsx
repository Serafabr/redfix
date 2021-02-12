import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
// CSS
import './HeaderWithSort.css';
// Other components
import HeaderButton from './HeaderButton';

const sortingArrow = require("../../../../assets/icons/sorting_arrow.png");

const propTypes = {
  sortKey: PropTypes.string,
  activeSortKey: PropTypes.string,
  IsSortReverse: PropTypes.bool,
  onSort: PropTypes.func,
  children: PropTypes.node.isRequired,
};

const defaultProps = {
  activeSortKey: null,
  IsSortReverse: false,
};

export default function HeaderSort({ sortKey, onSort, children, activeSortKey, isSortReverse, disableSorting }) {
  return (
    <HeaderButton 
      onClick={() => onSort(sortKey)}
      disableSorting={disableSorting}
    >
      {children}
      {activeSortKey === sortKey && (
        <div className={classNames({
          "header__head-arrow": true,
          "header__head-arrow--rotated": isSortReverse
        })}>
          <img src={sortingArrow} alt={'Sorting Arrow'} />
        </div>
      )}
    </HeaderButton>
  );
}

HeaderSort.propTypes = propTypes;
HeaderSort.defaultProps = defaultProps;