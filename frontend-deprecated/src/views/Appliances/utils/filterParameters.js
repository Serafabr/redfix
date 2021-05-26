export const filterAttributes = {
  assetSf: { name: 'Código', type: 'text' },
  manufacturer: { name: 'Fabricante', type: 'text' },
  model: { name: 'Modelo', type: 'text' },
  name: { name: 'Nome', type: 'text' },
  serialnum: { name: 'Número serial', type: 'text' },
};

export const customFilters = [
  {
    id: "001",
    name: "Sem Filtro",
    author: "webSINFRA Software",
    logic: [],
  },
  {
    id: "002",
    name: "Ativos - Elétrica",
    author: "webSINFRA Software",
    logic: [
      { attribute: 'assetSf', type: 'att', verb: 'include', term: ["ELET"] },
    ],
  },
  {
    id: "003",
    name: "Ativos - Civil",
    author: "webSINFRA Software",
    logic: [
      { attribute: 'assetSf', type: 'att', verb: 'include', term: ["CIVL"] },
    ],
  },
  {
    id: "004",
    name: "Ativos - Mecânica",
    author: "webSINFRA Software",
    logic: [
      { attribute: 'assetSf', type: 'att', verb: 'include', term: ["MECN"] },
    ],
  },
  {
    id: "005",
    name: "Elétrica - Quadros",
    author: "webSINFRA Software",
    logic: [
      { attribute: 'name', type: 'att', verb: 'include', term: ["Quadro"] },
    ],
  },
  {
    id: "006",
    name: "Elétrica - Estações Transformadoras",
    author: "webSINFRA Software",
    logic: [
      { attribute: 'name', type: 'att', verb: 'include', term: ["Estação"] },
    ],
  },
  {
    id: "007",
    name: "Elétrica - No breaks",
    author: "webSINFRA Software",
    logic: [
      { attribute: 'name', type: 'att', verb: 'include', term: ["No break"] },
    ],
  },
];