import React from 'react';

const mapIcon = require("../../../../assets/icons/map.png");

const tableConfig = {
  attForDataId: 'assetId',
  hasCheckbox: false,
  checkboxWidth: '5%',
  isItemClickable: false,
  dataAttForClickable: 'title',
  columnsConfig: [
    { columnId: 'name', columnName: 'Código', width: "10%", align: "center", idForValues: ['assetId'] },
    { columnId: 'name', columnName: 'Ativo', width: "70%", align: "justify", idForValues: ['name', 'assetSf'] },
    { columnId: 'map', columnName: 'Planta', width: "20%", align: "center", createElement: (<img src={mapIcon} alt="Google Maps" style={{ width: "35px", height: "35px" }} />) }
  ],
};

export default tableConfig;