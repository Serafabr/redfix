import paths from '../../../paths';

const tableConfig = {
  attForDataId: 'assetId',
  hasCheckbox: false,
  isItemClickable: true,
  dataAttForClickable: 'name',
  itemPathWithoutID: paths.appliance.toOne,
  columnsConfig: [
    { columnId: 'id', columnName: 'Código', width: "10%", align: "center", idForValues: ['assetId'] },
    { columnId: 'name', columnName: 'Equipamento', width: "50%", align: "justify", idForValues: ['name', 'assetSf'] },
    { columnId: 'model', columnName: 'Modelo', width: "20%", align: "center", idForValues: ['model'] },
    { columnId: 'manufacturer', columnName: 'Fabricante', width: "20%", align: "center", idForValues: ['manufacturer'] },
  ],
};

export default tableConfig;