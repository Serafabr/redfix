import { ORDER_CATEGORY_TYPE, ORDER_PRIORITY_TYPE, ORDER_STATUS_TYPE } from './dataDescription';

export const filterAttributes = {
  description: { name: 'Descrição', type: 'text' },
  place: { name: 'Localização', type: 'text' },
  taskCategoryText: { name: 'Categoria', type: 'option', options: ORDER_CATEGORY_TYPE },
  taskPriorityText: { name: 'Prioridade', type: 'option', options: ORDER_PRIORITY_TYPE },
  taskStatusText: { name: 'Status', type: 'option', options: ORDER_STATUS_TYPE },
  title: { name: 'Título', type: 'text' },
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
    name: "OS - Reparo em forro",
    author: "webSINFRA Software",
    logic: [
      { attribute: 'taskCategoryText', type: 'att', verb: 'sameChoice', term: ["FOR"] },
    ],
  },
  {
    id: "003",
    name: "OS - Avaliação estrutural",
    author: "webSINFRA Software",
    logic: [
      { attribute: 'taskCategoryText', type: 'att', verb: 'sameChoice', term: ["EST"] },
    ],
  },
  {
    id: "004",
    name: "OS - Infiltração",
    author: "webSINFRA Software",
    logic: [
      { attribute: 'taskCategoryText', type: 'att', verb: 'sameChoice', term: ["INF"] },
    ],
  },
  {
    id: "005",
    name: "OS - Instalações elétricas",
    author: "webSINFRA Software",
    logic: [
      { attribute: 'taskCategoryText', type: 'att', verb: 'sameChoice', term: ["Elétrica"] },
    ],
  },
  {
    id: "006",
    name: "OS - Instalações hidrossanitárias",
    author: "webSINFRA Software",
    logic: [
      { attribute: 'taskCategoryText', type: 'att', verb: 'sameChoice', term: ["HID"] },
    ],
  },
  {
    id: "007",
    name: "OS - Marcenaria",
    author: "webSINFRA Software",
    logic: [
      { attribute: 'taskCategoryText', type: 'att', verb: 'sameChoice', term: ["MAR"] },
    ],
  },
  {
    id: "008",
    name: "OS - Reparo em piso",
    author: "webSINFRA Software",
    logic: [
      { attribute: 'taskCategoryText', type: 'att', verb: 'sameChoice', term: ["PIS"] },
    ],
  },
  {
    id: "009",
    name: "OS - Avaliação estrutural",
    author: "webSINFRA Software",
    logic: [
      { attribute: 'taskCategoryText', type: 'att', verb: 'sameChoice', term: ["EST"] },
    ],
  },
  {
    id: "010",
    name: "OS - Revestimento",
    author: "webSINFRA Software",
    logic: [
      { attribute: 'taskCategoryText', type: 'att', verb: 'sameChoice', term: ["REV"] },
    ],
  },
  {
    id: "011",
    name: "OS - Vedação espacial",
    author: "webSINFRA Software",
    logic: [
      { attribute: 'taskCategoryText', type: 'att', verb: 'sameChoice', term: ["VED"] },
    ],
  },
  {
    id: "012",
    name: "OS - Vidraçaria / Esquadria",
    author: "webSINFRA Software",
    logic: [
      { attribute: 'taskCategoryText', type: 'att', verb: 'sameChoice', term: ["VID"] },
    ],
  },
  {
    id: "013",
    name: "OS - Serralheria",
    author: "webSINFRA Software",
    logic: [
      { attribute: 'taskCategoryText', type: 'att', verb: 'sameChoice', term: ["SER"] },
    ],
  },
  {
    id: "014",
    name: "OS - Ar-condicionado",
    author: "webSINFRA Software",
    logic: [
      { attribute: 'taskCategoryText', type: 'att', verb: 'sameChoice', term: ["ARC"] },
    ],
  },
  {
    id: "015",
    name: "OS - Elevadores",
    author: "webSINFRA Software",
    logic: [
      { attribute: 'taskCategoryText', type: 'att', verb: 'sameChoice', term: ["ELV"] },
    ],
  },
  {
    id: "016",
    name: "OS - Exaustores",
    author: "webSINFRA Software",
    logic: [
      { attribute: 'taskCategoryText', type: 'att', verb: 'sameChoice', term: ["EXA"] },
    ],
  },
  {
    id: "017",
    name: "OS - Revestimento",
    author: "webSINFRA Software",
    logic: [
      { attribute: 'taskCategoryText', type: 'att', verb: 'sameChoice', term: ["REV"] },
    ],
  },
  {
    id: "018",
    name: "OS - Serviços Gerais",
    author: "webSINFRA Software",
    logic: [
      { attribute: 'taskCategoryText', type: 'att', verb: 'sameChoice', term: ["GRL"] },
    ],
  },
  {
    id: "019",
    name: "OS - Canceladas",
    author: "webSINFRA Software",
    logic: [
      { attribute: 'taskStatusText', type: 'att', verb: 'sameChoice', term: ["CAN"] },
    ],
  },
  {
    id: "020",
    name: "OS - Suspensas",
    author: "webSINFRA Software",
    logic: [
      { attribute: 'taskStatusText', type: 'att', verb: 'sameChoice', term: ["SUS"] },
    ],
  },
  {
    id: "021",
    name: "OS - Execução",
    author: "webSINFRA Software",
    logic: [
      { attribute: 'taskStatusText', type: 'att', verb: 'sameChoice', term: ["EXE"] },
    ],
  },
  {
    id: "022",
    name: "OS - Concluídas",
    author: "webSINFRA Software",
    logic: [
      { attribute: 'taskStatusText', type: 'att', verb: 'sameChoice', term: ["CON"] },
    ],
  },
  {
    id: "023",
    name: "OS - Execução ou Fila de Espera",
    author: "webSINFRA Software",
    logic: [
      { attribute: 'taskStatusText', type: 'att', verb: 'sameChoice', term: ["EXE", "FIL"] },
    ],
  },
];