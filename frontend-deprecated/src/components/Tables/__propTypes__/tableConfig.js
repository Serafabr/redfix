import PropTypes from 'prop-types';

export const alignShape = PropTypes.oneOf(['center', 'justify']);

export const selectedDataShape = PropTypes.objectOf(PropTypes.bool);

export const prepareDataShape = PropTypes.objectOf(PropTypes.func);

export const actionColumnShape = PropTypes.arrayOf(PropTypes.oneOf(['delete', 'edit']));

export const columnsConfigShape = PropTypes.shape({
  columnId: PropTypes.string.isRequired,
  columnName: PropTypes.string.isRequired,
  width: PropTypes.string,
  align: PropTypes.string,
  isTextWrapped: PropTypes.bool,
  idForValues: PropTypes.arrayOf(PropTypes.string),
  createElement: PropTypes.element,
  createElementWithData: PropTypes.func,
  createElementWithSubData: PropTypes.func,
});

export const tableConfigShape = PropTypes.shape({
  attForDataId: PropTypes.string.isRequired,
  hasCheckbox: PropTypes.bool,
  checkboxWidth: PropTypes.string,
  isDataTree: PropTypes.bool,
  idForNestedTable: PropTypes.string,
  isItemClickable: PropTypes.bool,
  dataAttForClickable: PropTypes.string,
  itemPathWithoutID: PropTypes.string,
  actionColumn: actionColumnShape,
  actionColumnWidth: PropTypes.string,
  prepareData: prepareDataShape,
  columnsConfig: PropTypes.arrayOf(columnsConfigShape),
  isFileTable: PropTypes.bool,
  fileColumnWidth: PropTypes.string,
});
