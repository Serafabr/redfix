import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
// CSS
import './Body.css'
// Proptypes
import { openItemsShape } from '../../__propTypes__/nestedTable';

const deleteImage = require("../../../../assets/icons/red_trash.png");
const editImage = require("../../../../assets/icons/edit.png");

const deleteButton = (handleOnClick, itemId) => (
  <img
    alt={'Delete Image'}
    onClick={handleOnClick(itemId)}
    style={{ width: "25px", height: "25px", cursor: "pointer" }}
    src={deleteImage}
  />
);

const editButton = (handleOnClick, itemId) => (
  <img
    alt={'Edit Image'}
    onClick={handleOnClick(itemId)}
    style={{ width: "25px", height: "25px", cursor: "pointer" }}
    src={editImage}
  />
);

const button = {
  "delete": deleteButton,
  "edit": editButton
};

const propTypes = {
  columnId: PropTypes.string.isRequired,
  itemId: PropTypes.string.isRequired,
  actionType: PropTypes.array,
  handleAction: PropTypes.shape({ "delete": PropTypes.func, "edit": PropTypes.func }),
  openItems: openItemsShape,
};

export default function ActionBodyElement({
  columnId,
  actionType,
  handleAction,
  itemId,
}) {
  return (
    <td
      className={classNames({
        "table-body__cell": true,
      })}
      key={columnId}
    >
      <div
        style={{ display: "flex", justifyContent: "space-evenly", width: "100%" }}
      >
        {actionType.map((actionString) => {
          return button[actionString](handleAction.delete, itemId);
        })}
      </div>
    </td>
  );
}

ActionBodyElement.propTypes = propTypes;