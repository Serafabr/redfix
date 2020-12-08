import paths from '../../../paths';

function calculeAvailableWithUnit(item) {
  return `${item.totalAvailable} ${item.unit}`;
}

const tableConfig = {
  attForDataId: 'specId',
  hasCheckbox: false,
  isItemClickable: true,
  dataAttForClickable: 'name',
  itemPathWithoutID: paths.spec.toOne,
  prepareData: {
    availableWithUnit: calculeAvailableWithUnit
  },
  columnsConfig: [
    { columnId: 'id', columnName: 'Código', width: "10%", align: "center", idForValues: ['specSf'] },
    { columnId: 'name', columnName: 'Especificação Técnica', width: "45%", align: "justify", isTextWrapped: true,  idForValues: ['name', 'version'] },
    { columnId: 'category', columnName: 'Categoria', width: "15%", align: "center", isTextWrapped: true, idForValues: ['specCategoryText'] },
    { columnId: 'subcategory', columnName: 'Subcategoria', width: "15%", align: "center", isTextWrapped: true, idForValues: ['specSubcategoryText'] },
    { columnId: 'totalAvailable', columnName: 'Disponível', width: "15%", align: "center", isTextWrapped: true, idForValues: ['availableWithUnit'] }
  ],
};

export default tableConfig;