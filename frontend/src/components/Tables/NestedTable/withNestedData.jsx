import React, { Component } from 'react';

function getChildren(result, dataTree, item, idAtt, nestingValue = 1) {
  if (dataTree[item[idAtt]]) {
    dataTree[item[idAtt]].forEach((child) => {
      result.data.push(child);
      result.childConfig[child[idAtt]] = { nestingValue, hasChildren: Boolean(dataTree[child[idAtt]]) }
      getChildren(result, dataTree, child, idAtt, nestingValue + 1)
    })
  }
}

function prepareNestedData(dataTree, parentItems, idAtt) {
  const result = { data: [], childConfig: {} };
  parentItems.forEach((parent) => {
    dataTree[parent].forEach((item) => {
      result.data.push(item);
      result.childConfig[item[idAtt]] = { nestingValue: 0, hasChildren: Boolean(dataTree[item[idAtt]]) }
      getChildren(result, dataTree, item, idAtt)
    })
  })
  return result;
}

function assignParents(data, childConfig, tableConfig) {
  const result = {};
  let lastNestingValue = false;
  let lastItemId = false;
  let parents = [];
  data.forEach((item) => {
    const id = item[tableConfig.attForDataId];
    const { nestingValue } = childConfig[id];
    if (lastNestingValue !== false) {
      if (nestingValue > lastNestingValue) {
        parents.push(lastItemId);
      } else if (nestingValue < lastNestingValue) {
        parents = parents.slice(0, nestingValue);
      }
    }
    result[id] = [...parents];
    lastNestingValue = nestingValue;
    lastItemId = id;
  })
  return result;
}

export default function withNestedData(WrappedComponent) {
  class WithNestedData extends Component {
    render() {
      const { data, ...rest } = this.props;
      const { attForDataId, isDataTree } = this.props.tableConfig;
      const nestedData = isDataTree && prepareNestedData(data, ["000"], attForDataId)
      const parents = isDataTree && assignParents(nestedData.data, nestedData.childConfig, this.props.tableConfig)
      return (
        <WrappedComponent
          {...rest}
          data={nestedData ? nestedData.data : data}
          childConfig={nestedData ? nestedData.childConfig : null}
          parents={parents}
        />
      );
    }
  }
  return WithNestedData;
}