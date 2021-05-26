// Function used for search mechanics on search dependent components
export default function searchList(itemsList, attributes, searchTerm, parents = false, idAtt = false) {
  let filteredItems = itemsList;
  let filteredIds = [];
  searchTerm = searchTerm.trim().split(" ");
  const searchTermLowerCase = searchTerm.map((item) => item.toLowerCase());
  searchTermLowerCase.forEach((term) => {
    if (!parents) {
      filteredItems = findItem(filteredItems, attributes, term);
    } else {
      filteredIds = findItem(filteredItems, attributes, term, parents, idAtt);
      filteredItems = itemsList.filter((item) => filteredIds.includes(item[idAtt]))
    }
  });

  return filteredItems;
}

function findItem(items, attributes, term, parents = false, idAtt = false) {
  if (!parents) {
    return (items.filter((item) => {
      for (let i = 0; i < attributes.length; i++) {
        let value = [];
        if (item.node)
          value = attributes[i].split('.').reduce(function (p, prop) { return p[prop] }, item.node);
        else
          value = attributes[i].split('.').reduce(function (p, prop) { return p[prop] }, item);
        if (String(value).toLowerCase().includes(term)) {
          return String(value).toLowerCase().includes(term);
        }
      }
      return null;
    }));
  } else {
    const resultIds = [];
    items.filter((item) => {
      for (let i = 0; i < attributes.length; i++) {
        let value = [];
        if (item.node)
          value = attributes[i].split('.').reduce(function (p, prop) { return p[prop] }, item.node);
        else
          value = attributes[i].split('.').reduce(function (p, prop) { return p[prop] }, item);
        if (String(value).toLowerCase().includes(term)) {
          resultIds.push(item[idAtt]);
          resultIds.push(...parents[item[idAtt]]);
        }
      }
      return null;
    });
    return resultIds;
  }
}