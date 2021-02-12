export const tableConfig = {
  attForDataId: 'taskId',
  hasCheckbox: true,
  checkboxWidth: "5%",
  isDataTree: false,
  idForNestedTable: 'title',
  isItemClickable: true,
  dataAttForClickable: 'title',
  itemPathWithoutID: '/manutencao/os/view/',
  actionColumn: ['delete'],
  actionColumnWidth: "10%",
  columnsConfig: [
    { columnId: 'taskId', columnName: 'OS', width: "5%", align: "center", idForValues: ['taskId'] },
    { columnId: 'title', columnName: 'Título', width: "35%", align: "justify", isTextWrapped: true, idForValues: ['title', 'category'] },
    { columnId: 'status', columnName: 'Status', width: "15%", align: "center", idForValues: ['status'] },
    { columnId: 'dateLimit', columnName: 'Prazo Final', width: "15%", align: "center", idForValues: ['dateLimit'] },
    { columnId: 'place', columnName: 'Localização', width: "15%", align: "center", idForValues: ['place'] },
  ],
};

export const customFilters = [
  {
    id: "001",
    name: "Sem Filtro",
    author: "webSINFRA Software",
    logic: [],
  },
];

export const filterAttributes = {
  taskId: { name: 'ID', type: 'text' },
  title: { name: 'Descrição', type: 'text' },
  place: { name: 'Local', type: 'text' },
  status: { name: 'Status', type: 'option', options: { Cancelada: "Cancelada", ACancelada: "ACancelada" } },
};

export const searchableAttributes = [
  'taskId',
  'title',
  'status',
  "place"
];

export const selectedData = {
  "001": false,
  "005": true,
  "008": true,
  "009": true,
  "010": true,
}

export const data = [
  { taskId: "001", category: "Reparo em Forro", title: "Troca de vidros quebradosTroca de vidros quebradosTroca de vidros quebradosTroca de vidros quebradosTroca de vidros quebradosTroca de vidros quebradosTroca de vidros quebradosTroca de vidros quebrados", status: "Cancelada", dateLimit: "12-10-2020", place: "Sala do SEMAC" },
  { taskId: "002", category: "Reparo em Forro", title: "Troca de vidros quebrados", status: "Cancelada", dateLimit: "12-10-2020", place: "Sala do SEMAC" },
  { taskId: "003", category: "Reparo em Forro", title: "Troca de vidros quebrados", status: "BCancelada", dateLimit: "12-10-2020", place: "Sala do SEMAC" },
  { taskId: "004", category: "Reparo em Forro", title: "Troca de vidros quebrados", status: "Cancelada", dateLimit: "12-10-2020", place: "Sala do SEMAC" },
  { taskId: "005", category: "Reparo em Forro", title: "Troca de vidros quebrados", status: "DCancelada", dateLimit: "12-10-2020", place: "Sala do SEMAC" },
  { taskId: "006", category: "Reparo em Forro", title: "Troca de vidros quebrados", status: "Cancelada", dateLimit: "12-10-2020", place: "Sala do SEMAC" },
  { taskId: "007", category: "Reparo em Forro", title: "Troca de vidros quebrados", status: "FCancelada", dateLimit: "12-10-2020", place: "Sala do SEMAC" },
  { taskId: "008", category: "Reparo em Forro", title: "Troca de vidros quebrados", status: "GCancelada", dateLimit: "12-10-2020", place: "Sala do SEMAC" },
  { taskId: "009", category: "Reparo em Forro", title: "Troca de vidros quebrados", status: "HCancelada", dateLimit: "12-10-2020", place: "Sala do SEMAC" },
  { taskId: "010", category: "Reparo em Forro", title: "Troca de vidros quebrados", status: "Cancelada", dateLimit: "12-10-2020", place: "Sala do SEMAC" },
  { taskId: "011", category: "Reparo em Forro", title: "Troca de vidros quebrados", status: "ICancelada", dateLimit: "12-10-2020", place: "Sala do SEMAC" },
  { taskId: "012", category: "Reparo em Forro", title: "Troca de vidros quebrados", status: "ACancelada", dateLimit: "12-10-2020", place: "Sala do SEMAC" },
  { taskId: "013", category: "Reparo em Forro", title: "Troca de vidros quebrados", status: "Cancelada", dateLimit: "12-10-2020", place: "Sala do SEMAC" },
  { taskId: "014", category: "Reparo em Forro", title: "Troca de vidros quebrados", status: "Cancelada", dateLimit: "12-10-2020", place: "Sala do SEMAC" },
  { taskId: "015", category: "Reparo em Forro", title: "Troca de vidros quebrados", status: "ACancelada", dateLimit: "12-10-2020", place: "Sala do SEMAC" },
  { taskId: "016", category: "Reparo em Forro", title: "Troca de vidros quebrados", status: "ECancelada", dateLimit: "12-10-2020", place: "Sala do SEMAC" },
  { taskId: "017", category: "Reparo em Forro", title: "Troca de vidros quebrados", status: "ECancelada", dateLimit: "12-10-2020", place: "Sala do SEMAC" },
  { taskId: "018", category: "Reparo em Forro", title: "Troca de vidros quebrados", status: "BCancelada", dateLimit: "12-10-2020", place: "Sala do SEMAC" },
  { taskId: "019", category: "Reparo em Forro", title: "Troca de vidros quebrados", status: "Cancelada", dateLimit: "12-10-2020", place: "Sala do SEMAC" },
  { taskId: "020", category: "Reparo em Forro", title: "Troca de vidros quebrados", status: "Cancelada", dateLimit: "12-10-2020", place: "Sala do SEMAC" },
  { taskId: "021", category: "Reparo em Forro", title: "Troca de vidros quebrados", status: "CCCancelada", dateLimit: "12-10-2020", place: "Sala do SEMAC" },
  { taskId: "022", category: "Reparo em Forro", title: "Troca de vidros quebrados", status: "DCancelada", dateLimit: "12-10-2020", place: "Sala do SEMAC" },
  { taskId: "023", category: "Reparo em Forro", title: "Troca de vidros quebrados", status: "ECancelada", dateLimit: "12-10-2020", place: "Sala do cOproj" },
  { taskId: "024", category: "Reparo em Forro", title: "Troca de vidros quebrados", status: "Cancelada", dateLimit: "12-10-2020", place: "Sala do Coemant" },
];

export const dataTree = {
  1: {
    "000": [
      { taskId: "001", category: "Reparo em Forro", title: "Troca de vidros quebradosTroca de vidros quebradosTroca de vidros quebradosTroca de vidros quebradosTroca de vidros quebradosTroca de vidros quebradosTroca de vidros quebradosTroca de vidros quebrados", status: "Cancelada", dateLimit: "12-10-2020", place: "Sala do SEMAC" },
      { taskId: "002", category: "Reparo em Forro", title: "Troca de vidros quebrados1234", status: "Cancelada", dateLimit: "12-10-2020", place: "Sala do SEMAC" },
      { taskId: "003", category: "Reparo em Forro", title: "Troca de vidros quebrado432s", status: "BCancelada", dateLimit: "12-10-2020", place: "Sala do SEMAC" },
      { taskId: "004", category: "Reparo em Forro", title: "Troca de vidros quebrado412341s", status: "Cancelada", dateLimit: "12-10-2020", place: "Sala do SEMAC" },
      { taskId: "005", category: "Reparo em Forro", title: "Troca de vidros quebrado3241s", status: "DCancelada", dateLimit: "12-10-2020", place: "Sala do SEMAC" },
    ],
    "001": [
      { taskId: "006", category: "Reparo em Forro", title: "Troca de vidros queb2341234rados", status: "Cancelada", dateLimit: "12-10-2020", place: "Sala do SEMAC" },
      { taskId: "007", category: "Reparo em Forro", title: "Troca de vidros qu1234ebrados", status: "FCancelada", dateLimit: "12-10-2020", place: "Sala do SEMAC" },
    ],
    "005": [
      { taskId: "008", category: "Reparo em Forro", title: "Troca de vidros qu1234ebrados", status: "GCancelada", dateLimit: "12-10-2020", place: "Sala do SEMAC" },
      { taskId: "009", category: "Reparo em Forro", title: "Troca de vidros q135uebrados", status: "HCancelada", dateLimit: "12-10-2020", place: "Sala do SEMAC" }
    ],
    "009": [
      { taskId: "013", category: "Reparo em Forro", title: "Troca de 5234vidros quebrados", status: "Cancelada", dateLimit: "12-10-2020", place: "Sala do SEMAC" },
      { taskId: "014", category: "Reparo em Forro", title: "Troca de vidro2345s quebrados", status: "Cancelada", dateLimit: "12-10-2020", place: "Sala do SEMAC" },
      { taskId: "015", category: "Reparo em Forro", title: "Troca de vid2345ros quebrados", status: "ACancelada", dateLimit: "12-10-2020", place: "Sala do SEMAC" },
      { taskId: "016", category: "Reparo em Forro", title: "Troca de 2345v23idros quebrados", status: "ECancelada", dateLimit: "12-10-2020", place: "Sala do SEMAC" },
      { taskId: "017", category: "Reparo em Forro", title: "Troca de vidro2345s quebrados", status: "ECancelada", dateLimit: "12-10-2020", place: "Sala do SEMAC" },
    ],
    "017": [
      { taskId: "021", category: "Reparo em Forro", title: "Troca de vidr2345os quebrados", status: "CCCancelada", dateLimit: "12-10-2020", place: "Sala do SEMAC" },
      { taskId: "022", category: "Reparo em Forro", title: "Troca de vi2345dros quebrados", status: "DCancelada", dateLimit: "12-10-2020", place: "Sala do SEMAC" },
      { taskId: "023", category: "Reparo em Forro", title: "Troca de2345 vidros quebrados", status: "ECancelada", dateLimit: "12-10-2020", place: "Sala do cOproj" },
      { taskId: "024", category: "Reparo em Forro", title: "Troca de vidros quebrados", status: "Cancelada", dateLimit: "12-10-2020", place: "Sala do Coemant" },
    ]
  },
  2: {
    "003": [
      { taskId: "010", category: "Reparo em Forro", title: "Troca de vidro678es quebrados", status: "Cancelada", dateLimit: "12-10-2020", place: "Sala do SEMAC" },
      { taskId: "011", category: "Reparo em Forro", title: "Troca de v536idros quebrados", status: "ICancelada", dateLimit: "12-10-2020", place: "Sala do SEMAC" },
      { taskId: "012", category: "Reparo em Forro", title: "Troca detyj vidros quebrados", status: "ACancelada", dateLimit: "12-10-2020", place: "Sala do SEMAC" },
    ],
  },
  3: {
    "004": [
      { taskId: "020", category: "Reparo em Forro", title: "Troca de vidros quebrados", status: "Cancelada", dateLimit: "12-10-2020", place: "Sala do SEMAC" },
      { taskId: "021", category: "Reparo em Forro", title: "Troca de vidros quebrados", status: "CCCancelada", dateLimit: "12-10-2020", place: "Sala do SEMAC" },
      { taskId: "022", category: "Reparo em Forro", title: "Troca de vidros quebrados", status: "DCancelada", dateLimit: "12-10-2020", place: "Sala do SEMAC" },
    ]
  },
}