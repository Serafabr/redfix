import { SPECS_CATEGORY } from './dataDescription';

export const filterAttributes = {
  category: { name: 'Categoria', type: 'option', options: SPECS_CATEGORY },
  name: { name: 'Material / Serviço', type: 'text' },
  specSf: { name: 'Código', type: 'text' },
  subcategory: { name: 'Subcategoria', type: 'text' },
  version: { name: 'Versão', type: 'text' },
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
    name: "Geral",
    author: "webSINFRA Software",
    logic: [
      { attribute: 'category', type: 'att', verb: 'sameChoice', term: ["Geral"] },
    ],
  },
  {
    id: "003",
    name: "Civil",
    author: "webSINFRA Software",
    logic: [
      { attribute: 'category', type: 'att', verb: 'sameChoice', term: ["Civil"] },
    ],
  },
  {
    id: "004",
    name: "Serviços de Apoio",
    author: "webSINFRA Software",
    logic: [
      { attribute: 'category', type: 'att', verb: 'sameChoice', term: ["Serviços de Apoio"] },
    ],
  },
  {
    id: "005",
    name: "Elétrica",
    author: "webSINFRA Software",
    logic: [
      { attribute: 'category', type: 'att', verb: 'sameChoice', term: ["Elétrica"] },
    ],
  },
  {
    id: "006",
    name: "Hidrossanitário",
    author: "webSINFRA Software",
    logic: [
      { attribute: 'category', type: 'att', verb: 'sameChoice', term: ["Hidrossanitário"] },
    ],
  },
  {
    id: "007",
    name: "Ar Condicionado",
    author: "webSINFRA Software",
    logic: [
      { attribute: 'category', type: 'att', verb: 'sameChoice', term: ["Ar Condicionado"] },
    ],
  },
  {
    id: "008",
    name: "Marcenaria e Serralheria",
    author: "webSINFRA Software",
    logic: [
      { attribute: 'category', type: 'att', verb: 'sameChoice', term: ["Marcenaria e Serralheria"] },
    ],
  },
  {
    id: "009",
    name: "Rede e Telefonia",
    author: "webSINFRA Software",
    logic: [
      { attribute: 'category', type: 'att', verb: 'sameChoice', term: ["Rede e Telefonia"] },
    ],
  },
  {
    id: "010",
    name: "Ferramentas e Equipamentos",
    author: "webSINFRA Software",
    logic: [
      { attribute: 'category', type: 'att', verb: 'sameChoice', term: ["Ferramentas e Equipamentos"] },
    ],
  },
];