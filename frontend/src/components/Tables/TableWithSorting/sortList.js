import { sortBy } from "lodash";

export default function sortList(data, sortKey, isSortReverse, isDataTree) {
  if (isDataTree) {
    let sortedList = {};
    if (sortKey) {
      Object.keys(data).forEach((parent) => sortedList[parent] = sortBy(data[parent], sortKey));
      if (isSortReverse) {
        Object.keys(data).forEach((parent) => sortedList[parent].reverse());
      }
    } else {
      sortedList = data;
    }
    return sortedList;
  }

  // It is not DataTree
  const sortedList = sortKey ? sortBy(data, sortKey) : data;
  const reverseSortedList = (isSortReverse && sortKey) ? sortedList.reverse() : sortedList;

  return reverseSortedList;
}