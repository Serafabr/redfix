import React from 'react';
const formatter = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format;

function formatCurrency(att) {
  return (function format(item) {
    return formatter(item[att]);
  });
}

function addUnit(att) {
  return (function add(item) {
    return `${item[att]} ${item.unit}`;
  });
}

function createColorfulElement(color) {
  return function (item) {
    return (
      <span style={{ color, fontWeight: '700' }}>{item}</span>
    );
  }
}

function calculateQtyConsumed(item) {
  return (`${item.qtyConsumed + item.qtyBlocked} ${item.unit}`);
}

function calculateBalance(item) {
  return (formatter(item.qtyAvailable * item.price));
}

const tableConfig = {
  attForDataId: 'supplyId',
  hasCheckbox: false,
  isItemClickable: false,
  dataAttForClickable: 'title',
  prepareData: {
    qtyInitialText: addUnit("qtyInitial"),
    priceText: formatCurrency("price"),
    qtyConsumedText: calculateQtyConsumed,
    qtyAvailableText: addUnit("qtyAvailable"),
    balanceText: calculateBalance,
  },
  columnsConfig: [
    { columnId: 'id', columnName: 'Item', width: "7%", align: "center", isTextWrapped: true, idForValues: ['supplySf'] },
    { columnId: 'title', columnName: 'Suprimento', width: "39%", align: "justify", isTextWrapped: true, idForValues: ['name', 'specSf'] },
    { columnId: 'qty', columnName: 'Inicial', width: "10%", align: "center", isTextWrapped: true, idForValues: ['qtyInitialText'] },
    { columnId: 'consumed', columnName: 'Usado', width: "11%", align: "center", isTextWrapped: true, idForValues: ['qtyConsumedText'], createElementWithData: createColorfulElement('#ff0000') },
    { columnId: 'available', columnName: 'Disponível', width: "11%", align: "center", isTextWrapped: true, idForValues: ['qtyAvailableText'], createElementWithData: createColorfulElement('#0dad2f') },
    { columnId: 'price', columnName: 'Preço', width: "11%", align: "center", idForValues: ['priceText'] },
    { columnId: 'total', columnName: 'Saldo', width: "11%", align: "center", isTextWrapped: true, idForValues: ['balanceText'], createElementWithData: createColorfulElement('#000000') },
  ],
};

export default tableConfig;