import React from 'react';

function createParentElement(parent) {
  return `${parent.assetSf}: ${parent.name}`;
}

function createContextElement(context) {
  return `${context.name}`;
}

const tableConfig = {
  attForDataId: 'id',
  actionColumn: ['delete'],
  actionColumnWidth: '10%',
  firstEmptyColumnWidth: '5%',
  columnsConfig: [
    { columnId: 'parent', columnName: 'Ativo Pai', width: "50%", align: "justify", idForValues: ['parent'], isTextWrapped: true, createElementWithData: createParentElement },
    { columnId: 'context', columnName: 'Contexto', width: "35%", align: "center", idForValues: ['context'], isTextWrapped: true, createElementWithData: createContextElement },
  ],
};

export default tableConfig;