import paths from '../../../../paths';
const formatter = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format;

function calculateQty(item) {
  const filteredSupplies = item.supplies.filter(supply => supply.specId == item.specId);
  const qty = filteredSupplies.reduce((acc, supply) => (supply.qty + acc), 0);
  const unit = filteredSupplies && filteredSupplies[0].unit;
  return `${qty} ${unit}`;
}

function calculateTotal(item) {
  const filteredSupplies = item.supplies.filter(supply => supply.specId == item.specId);
  return formatter(filteredSupplies.reduce((acc, supply) => (supply.qty * supply.price + acc), 0));
}

const tableConfig = {
  attForDataId: 'taskId',
  hasCheckbox: false,
  isItemClickable: true,
  dataAttForClickable: 'title',
  itemPathWithoutID: paths.task.toOne,
  prepareData: {
    qtyText: calculateQty,
    totalText: calculateTotal,
  },
  columnsConfig: [
    { columnId: 'taskId', columnName: 'OS', width: "10%", align: "center", idForValues: ['taskId'] },
    { columnId: 'title', columnName: 'Descrição', width: "50%", align: "justify", isTextWrapped: true, idForValues: ['title', 'taskCategoryText'] },
    { columnId: 'status', columnName: 'Status', width: "10%", align: "center", idForValues: ['taskStatusText'] },
    { columnId: 'qty', columnName: 'Utilizado', width: "15%", align: "center", isTextWrapped: true, idForValues: ['qtyText'] },
    { columnId: 'total', columnName: 'Gasto', width: "15%", align: "center", isTextWrapped: true, idForValues: ['totalText'] },
  ]
};

export default tableConfig;