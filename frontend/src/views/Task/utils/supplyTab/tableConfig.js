import paths from '../../../../paths';

const formatter = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format;

function formatCurrency(att) {
  return (function format(item) {
    return formatter(item[att]);
  });
}

function addUnit(item) {
  return `${item.qty} ${item.unit}`;
}

function addStorage(item) {
  return `${item.depotSf} - ${item.company}`;
}

const tableConfig = {
  attForDataId: 'supplyId',
  isItemClickable: true,
  dataAttForClickable: 'name',
  itemPathWithoutID: paths.spec.toOne,
  prepareData: {
    qtyWithUnit: addUnit,
    bidPriceText: formatCurrency("price"),
    totalPriceText: formatCurrency("totalPrice"),
    storage: addStorage,
  },
  columnsConfig: [
    { columnId: 'supplySf', columnName: 'Código', width: "10%", align: "center", idForValues: ['supplySf'] },
    { columnId: 'name', columnName: 'Descrição', width: "40%", align: "justify", isTextWrapped: true, idForValues: ['name', 'storage'] },
    { columnId: 'qty', columnName: 'Quantidade', width: "15%", align: "center", isTextWrapped: true, idForValues: ['qtyWithUnit'] },
    { columnId: 'bidPrice', columnName: 'Preço Unit.', width: "15%", align: "center", idForValues: ['bidPriceText'] },
    { columnId: 'totalPrice', columnName: 'Total', width: "20%", align: "center", idForValues: ['totalPriceText'] },
  ],
};

export default tableConfig;