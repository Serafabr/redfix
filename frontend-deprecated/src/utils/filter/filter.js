const operatorFunction = {
  sameChoice: function (searchValues, attrValue) {
    if (!attrValue || attrValue === "" || attrValue === []) {
      return false;
    }
    let answer = searchValues[0] === attrValue;
    searchValues.forEach(value => { answer = answer || (value === attrValue) })
    return answer;
  },

  differentChoice: function (searchValues, attrValue) {
    if (!attrValue || attrValue === "" || attrValue === []) {
      return true;
    }
    let answer = searchValues[0] !== attrValue;
    searchValues.forEach(value => { answer = answer && (value !== attrValue) })
    return answer;
  },

  notNull: function (searchValue = null, attrValue) {
    return attrValue && attrValue !== "";
  },

  null: function (searchValue = null, attrValue) {
    return !attrValue || attrValue === "";
  },

  include: function (searchValues, attrValue) {
    if (!attrValue || attrValue === "" || attrValue === []) {
      return false;
    }
    let answer = attrValue.includes(searchValues[0]);
    searchValues.forEach(value => { answer = answer && (attrValue.includes(value)) })
    return answer;
  },

  notInclude: function (searchValues, attrValue) {
    if (!attrValue || attrValue === "" || attrValue === []) {
      return true;
    }
    let answer = !attrValue.includes(searchValues[0]);
    searchValues.forEach(value => { answer = answer && (!attrValue.includes(value)) })
    return answer;
  },

  equalTo: function (searchValues, attrValue) {
    if (!attrValue || attrValue === "" || attrValue === []) {
      return false;
    }
    return attrValue === searchValues[0];
  },

  greaterThan: function (searchValues, attrValue) {
    if (!attrValue || attrValue === "" || attrValue === []) {
      return false;
    }
    return attrValue >= searchValues[0];
  },

  lowerThan: function (searchValues, attrValue) {
    if (!attrValue || attrValue === "" || attrValue === []) {
      return false;
    }
    return attrValue <= searchValues[0];
  },

  different: function (searchValues, attrValue) {
    if (!attrValue || attrValue === "" || attrValue === []) {
      return true;
    }
    return attrValue !== searchValues[0];
  },

  and: function (expr1, expr2) {
    return expr1 && expr2;
  },

  or: function (expr1, expr2) {
    return expr1 || expr2;
  },

};

export default function filterList(list, logics) {
  let finalList = [];
  list.forEach(item => {
    let realItem = null;
    let itemResult = false;
    let condOperator = null;
    let firstResult = null;
    let secondResult = null;
    if (item.node) { realItem = item.node; }
    else { realItem = item }
    logics.forEach(logic => {
      let { attribute, term, verb, type } = logic;
      if (type === 'att') {
        let provResult = operatorFunction[verb](term, realItem[attribute]);
        if (firstResult === null) { firstResult = provResult; itemResult = provResult; }
        else { secondResult = provResult; firstResult = operatorFunction[condOperator](firstResult, secondResult); }
      } else {
        condOperator = attribute;
      }
      itemResult = firstResult;
    });
    if (itemResult) { finalList.push(item); }
  });
  return finalList;
}