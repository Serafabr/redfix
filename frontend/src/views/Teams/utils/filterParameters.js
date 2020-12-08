export const filterAttributes = {
  name: { name: 'Nome da Equipe', type: 'text' },
  description: { name: 'Descrição', type: 'text' },
  memberCount: { name: 'Número de Integrantes', type: 'number' }
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
    name: "Equipe - Mínimo 02 pessoas",
    author: "webSINFRA Software",
    logic: [
      { attribute: 'memberCount', type: 'att', verb: 'greaterThan', term: ["2"] },
    ],
  },
  {
    id: "003",
    name: "Individual - 01 pessoa",
    author: "webSINFRA Software",
    logic: [
      { attribute: 'memberCount', type: 'att', verb: 'equalTo', term: ["1"] },
    ],
  },
];