import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
// CSS
import './Body.css'
// PropTypes
import { selectedDataShape } from '../../__propTypes__/tableConfig';
// Other Components
import { CustomInput } from 'reactstrap';

const propTypes = {
  selectedData: selectedDataShape.isRequired,
  itemId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default function CheckboxBodyElement({ selectedData, handleSelectData, itemId }) {
  return (
    <td
      className={classNames({
        "table-body__cell": true,
        "table-body__cell--center": true,
      })}
      style={{ width: "5%" }}
      key={"checkbox"}
    >
      <div className="main-table__checkbox">
        <CustomInput
          id={itemId}
          type="checkbox"
          color="primary"
          checked={selectedData[itemId]}
          onClick={handleSelectData(itemId)}
        />
      </div>
    </td>
  );
}

CheckboxBodyElement.propTypes = propTypes;