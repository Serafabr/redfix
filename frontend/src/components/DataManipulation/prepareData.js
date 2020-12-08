const prepareData = (data = [], tableConfig) => {
  const result = [];
  if (!tableConfig.prepareData) {
    return data;
  }
  if (data) {
    data.forEach((item) => {
      let newItem = { ...item };
      Object.keys(tableConfig.prepareData).forEach((itemId) => {
        newItem = { ...newItem, [itemId]: tableConfig.prepareData[itemId](item) }
      })
      result.push(newItem);
    })
  }
  return result;
}

export default prepareData;