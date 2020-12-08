function calculateMemberCount(item) {
  return item.persons.length || 0;
}

const tableConfig = {
  attForDataId: 'teamId',
  hasCheckbox: false,
  isItemClickable: false,
  prepareData: {
    memberCountText: calculateMemberCount,
  },
  columnsConfig: [
    { columnId: 'id', columnName: 'Código', width: "10%", align: "center", idForValues: ['teamId'] },
    { columnId: 'name', columnName: 'Nome da equipe', width: "65%", align: "justify", idForValues: ['name', 'description'] },
    { columnId: 'memberCount', columnName: 'N. Membros', width: "25%", align: "center", idForValues: ['memberCountText'] },
  ],
};

export default tableConfig;