import React from 'react';

const mapIcon = require("../../../../assets/icons/map.png");

const tableConfig = {
  attForDataId: 'assetId',
  isItemClickable: false,
  dataAttForClickable: 'title',
  columnsConfig: [
    { columnId: 'map', columnName: 'Planta', width: "15%", align: "center", createElement: (<img src={mapIcon} alt="Google Maps" style={{ width: "35px", height: "35px" }} />) },
    { columnId: 'place', columnName: 'Ativo', width: "85%", align: "justify", idForValues: ['name', 'assetSf'] }
  ],
};

export default tableConfig;