import React, { Component } from 'react';

export default function withPrepareData(tableConfig) {
  return function (WrappedComponent) {
    class PrepareData extends Component {
      render() {
        const { data, ...rest } = this.props;
        const preparedData = [];
        if (tableConfig.prepareData) {
          data && data.forEach((item) => {
            let newItem = { ...item };
            Object.keys(tableConfig.prepareData).forEach((itemId) => {
              newItem = { ...newItem, [itemId]: tableConfig.prepareData[itemId](item) }
            })
            preparedData.push(newItem);
          })
        }
        return (
          <WrappedComponent
            {...rest}
            data={tableConfig.prepareData ? preparedData : data}
            tableConfig={tableConfig}
          />
        );
      }
    }
    return PrepareData;
  }
}
