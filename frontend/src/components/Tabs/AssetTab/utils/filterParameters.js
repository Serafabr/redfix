export const filterAttributes = {
  assetSf: { name: 'Código', type: 'text' },
  name: { name: 'Nome', type: 'text' },
  description: { name: 'Descrição', type: 'text' },
  area: { name: 'Área', type: 'number' }
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
    name: "Edifícios - Blocos de Apoio",
    author: "webSINFRA Software",
    logic: [
      { attribute: 'name', type: 'att', verb: 'include', term: ["Bloco"] },
    ],
  },
  {
    id: "003",
    name: "Edifícios -  Áreas Técnicas",
    author: "webSINFRA Software",
    logic: [
      { attribute: 'assetSf', type: 'att', verb: 'include', term: ["AT"] },
    ],
  },
  {
    id: "004",
    name: "Apartamentos Funcionais - SQS 309",
    author: "webSINFRA Software",
    logic: [
      { attribute: 'assetSf', type: 'att', verb: 'include', term: ["309"] },
    ],
  },
  {
    id: "005",
    name: "SQS 309 - Bloco C",
    author: "webSINFRA Software",
    logic: [
      { attribute: 'assetSf', type: 'att', verb: 'include', term: ["309C"] },
    ],
  },
  {
    id: "006",
    name: "SQS 309 - Bloco D",
    author: "webSINFRA Software",
    logic: [
      { attribute: 'assetSf', type: 'att', verb: 'include', term: ["309D"] },
    ],
  },
  {
    id: "007",
    name: "SQS 309 - Bloco G",
    author: "webSINFRA Software",
    logic: [
      { attribute: 'assetSf', type: 'att', verb: 'include', term: ["309G"] },
    ],
  },
  {
    id: "008",
    name: "Residência Oficial",
    author: "webSINFRA Software",
    logic: [
      { attribute: 'assetSf', type: 'att', verb: 'include', term: ["SHIS"] },
    ],
  },
  {
    id: "009",
    name: "Edifícios- Anexo I",
    author: "webSINFRA Software",
    logic: [
      { attribute: 'assetSf', type: 'att', verb: 'include', term: ["AX01"] },
    ],
  },
  {
    id: "010",
    name: "Edifícios- Anexo II",
    author: "webSINFRA Software",
    logic: [
      { attribute: 'assetSf', type: 'att', verb: 'include', term: ["AX02"] },
    ],
  },
  {
    id: "011",
    name: "Vias do CASF",
    author: "webSINFRA Software",
    logic: [
      { attribute: 'name', type: 'att', verb: 'include', term: ["Via"] },
    ],
  },
  {
    id: "012",
    name: "Edifícios - Alas do CASF",
    author: "webSINFRA Software",
    logic: [
      { attribute: 'name', type: 'att', verb: 'include', term: ["Ala"] },
    ],
  },
  {
    id: "013",
    name: "Blocos - Com área maior que 1000 m²",
    author: "webSINFRA Software",
    logic: [
      { attribute: 'name', type: 'att', verb: 'include', term: ["Bloco"] },
      { attribute: 'and', type: 'opr', verb: null, term: [] },
      { attribute: 'area', type: 'att', verb: 'greaterThan', term: ["1000"] },
    ],
  },
];