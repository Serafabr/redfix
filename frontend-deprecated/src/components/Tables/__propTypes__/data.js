import PropTypes from 'prop-types';

export const tabularDataShape = PropTypes.array;

export const dataTreeShape = PropTypes.objectOf(PropTypes.array);

export const dataTreeExample = {
  // Parent
  "000": [
    // Children
    { taskId: "001", category: "Reparo em Forro", title: "Troca de vidros quebradosTroca de vidros quebradosTroca de vidros quebradosTroca de vidros quebradosTroca de vidros quebradosTroca de vidros quebradosTroca de vidros quebradosTroca de vidros quebrados", status: "Cancelada", dateLimit: "12-10-2020", place: "Sala do SEMAC" },
    { taskId: "002", category: "Reparo em Forro", title: "Troca de vidros quebrados1234", status: "Cancelada", dateLimit: "12-10-2020", place: "Sala do SEMAC" },
    { taskId: "003", category: "Reparo em Forro", title: "Troca de vidros quebrado432s", status: "BCancelada", dateLimit: "12-10-2020", place: "Sala do SEMAC" },
    { taskId: "004", category: "Reparo em Forro", title: "Troca de vidros quebrado412341s", status: "Cancelada", dateLimit: "12-10-2020", place: "Sala do SEMAC" },
    { taskId: "005", category: "Reparo em Forro", title: "Troca de vidros quebrado3241s", status: "DCancelada", dateLimit: "12-10-2020", place: "Sala do SEMAC" },
  ],
  // Parent
  "001": [
    // Children
    { taskId: "006", category: "Reparo em Forro", title: "Troca de vidros queb2341234rados", status: "Cancelada", dateLimit: "12-10-2020", place: "Sala do SEMAC" },
    { taskId: "007", category: "Reparo em Forro", title: "Troca de vidros qu1234ebrados", status: "FCancelada", dateLimit: "12-10-2020", place: "Sala do SEMAC" },
  ],
  // Parent
  "005": [
    // Children
    { taskId: "008", category: "Reparo em Forro", title: "Troca de vidros qu1234ebrados", status: "GCancelada", dateLimit: "12-10-2020", place: "Sala do SEMAC" },
    { taskId: "009", category: "Reparo em Forro", title: "Troca de vidros q135uebrados", status: "HCancelada", dateLimit: "12-10-2020", place: "Sala do SEMAC" }
  ],
  // Parent
  "009": [
    // Children
    { taskId: "013", category: "Reparo em Forro", title: "Troca de 5234vidros quebrados", status: "Cancelada", dateLimit: "12-10-2020", place: "Sala do SEMAC" },
    { taskId: "014", category: "Reparo em Forro", title: "Troca de vidro2345s quebrados", status: "Cancelada", dateLimit: "12-10-2020", place: "Sala do SEMAC" },
    { taskId: "015", category: "Reparo em Forro", title: "Troca de vid2345ros quebrados", status: "ACancelada", dateLimit: "12-10-2020", place: "Sala do SEMAC" },
    { taskId: "016", category: "Reparo em Forro", title: "Troca de 2345v23idros quebrados", status: "ECancelada", dateLimit: "12-10-2020", place: "Sala do SEMAC" },
    { taskId: "017", category: "Reparo em Forro", title: "Troca de vidro2345s quebrados", status: "ECancelada", dateLimit: "12-10-2020", place: "Sala do SEMAC" },
  ],
  // Parent
  "017": [
    // Children
    { taskId: "021", category: "Reparo em Forro", title: "Troca de vidr2345os quebrados", status: "CCCancelada", dateLimit: "12-10-2020", place: "Sala do SEMAC" },
    { taskId: "022", category: "Reparo em Forro", title: "Troca de vi2345dros quebrados", status: "DCancelada", dateLimit: "12-10-2020", place: "Sala do SEMAC" },
    { taskId: "023", category: "Reparo em Forro", title: "Troca de2345 vidros quebrados", status: "ECancelada", dateLimit: "12-10-2020", place: "Sala do cOproj" },
    { taskId: "024", category: "Reparo em Forro", title: "Troca de vidros quebrados", status: "Cancelada", dateLimit: "12-10-2020", place: "Sala do Coemant" },
  ]
}