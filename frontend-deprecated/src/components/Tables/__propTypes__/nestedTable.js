import PropTypes from 'prop-types';

export const SingleChildConfigShape = PropTypes.shape({
  nestingValue: PropTypes.number.isRequired,
  hasChildren: PropTypes.bool.isRequired,
});

export const childConfigShape = PropTypes.objectOf(SingleChildConfigShape);

export const openItemsShape = PropTypes.objectOf(PropTypes.bool);