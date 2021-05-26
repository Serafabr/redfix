import React from 'react';

const formatter = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format;

function formatCurrency(att) {
  return (function format(item) {
    return formatter(item[att]);
  });
}

function addUnit(att, unit) {
  return (function add(item) {
    return `${item[att]} ${unit}`;
  });
}

function prepareBalanceText(item) {
  return formatter(item.qtyAvailable * item.price);
}

function createColorfulElement(color) {
  return function (item) {
    return (
      <span style={{ color, fontWeight: '700' }}>{item}</span>
    );
  }
}

function createTableConfig(unit) {
  const tableConfig = {
    attForDataId: 'supplySf',
    hasCheckbox: false,
    isItemClickable: false,
    dataAttForClickable: 'company',
    prepareData: {
      priceText: formatCurrency("price"),
      balanceText: prepareBalanceText,
      initialText: addUnit("qtyInitial", unit),
      availableText: addUnit("qtyAvailable", unit),
    },
    columnsConfig: [
      { columnId: 'supplySf', columnName: 'Item', width: "5%", align: "center", idForValues: ['supplySf'] },
      { columnId: 'company', columnName: 'Empresa', width: "42%", align: "justify", idForValues: ['company', 'depotSf'] },
      { columnId: 'qty', columnName: 'Contratado', width: "12%", align: "center", idForValues: ['initialText'], createElementWithData: createColorfulElement('#ff0000') },
      { columnId: 'available', columnName: 'Disponível', width: "12%", align: "center", idForValues: ['availableText'], createElementWithData: createColorfulElement('#0dad2f') },
      { columnId: 'price', columnName: 'Preço Unit.', width: "12%", align: "center", idForValues: ['priceText'] },
      { columnId: 'balance', columnName: 'Saldo', width: "12%", align: "center", idForValues: ['balanceText'], createElementWithData: createColorfulElement('#000000') },
    ],
  };
  return tableConfig;
}

export default createTableConfig;