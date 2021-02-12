export default function populateStateEditForm(baseState, itemData, editMode, customState) {
  const result = {}
  if (editMode === 'update') {
    Object.keys(baseState).forEach((key) => result[key] = itemData ? itemData[key] : "");
  }
  if (customState) {
    return customState(itemData, result);
  }
  return result;
}