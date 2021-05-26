import React from 'react';

const mapIcon = require("../../../assets/icons/map.png");

function prepareArea(item) {
  if (item.area) {
    return (`${new Intl.NumberFormat('pt-BR', { maximumFractionDigits: 0 }).format(item.area)} m²`);
  }
  return null;
}

const tableConfig = {
  attForDataId: 'assetId',
  hasCheckbox: false,
  isItemClickable: true,
  dataAttForClickable: 'name',
  itemPathWithoutID: '/edificios/ver/',
  prepareData: {
    area: prepareArea,
  },
  columnsConfig: [
    { columnId: 'assetId', columnName: 'Código', width: "10%", align: "center", idForValues: ['assetId'] },
    { columnId: 'name', columnName: 'Ativo', width: "60%", align: "justify", idForValues: ['name', 'assetSf'] },
    { columnId: 'area', columnName: 'Área', width: "20%", align: "center", idForValues: ['area'] },
    { columnId: 'map', columnName: 'Planta', width: "10%", align: "center", createElement: (<img src={mapIcon} alt="Google Maps" style={{ width: "35px", height: "35px" }} />) },
  ],
};

export default tableConfig;