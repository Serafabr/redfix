import React from 'react';
import classNames from 'classnames';
// CSS
import '../Body.css'

const addTree = require("../../../../../assets/icons/plus_green.png");
const minusTree = require("../../../../../assets/icons/minus.png");

export default function addNestingSpaces(childConfig, columnName, index, handleNestedChildrenClick, openitems, idForNestedTable) {
  if (columnName === idForNestedTable) {
    const result = [];
    for (let i = 0; i <= childConfig[index].nestingValue; i++) {
      const element = (
        <div className="add-tree-container">
          <img
            src={!openitems[index] ? addTree : minusTree}
            onClick={handleNestedChildrenClick(index)}
            alt={"Imagem"}
            className={classNames({
              "add-tree-container__icon": true,
              "add-tree-container__icon--hidden": (!childConfig[index].hasChildren || i != childConfig[index].nestingValue)
            })}
          />
        </div>
      );
      result.push(element);
    }
    return result;
  }
}