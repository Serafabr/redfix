import paths from '../../../../paths';

function formatDateLimit(item) {
  return [item.dateLimit && item.dateLimit.split('T')[0]];
}

const tableConfig = {
  attForDataId: 'taskId',
  hasCheckbox: false,
  isItemClickable: true,
  dataAttForClickable: 'title',
  itemPathWithoutID: paths.task.toOne,
  prepareData: {
    dateLimitText: formatDateLimit
  },
  columnsConfig: [
    { columnId: 'taskId', columnName: 'OS', width: "8%", align: "center", idForValues: ['taskId'] },
    { columnId: 'description', columnName: 'Título', width: "40%", align: "justify", idForValues: ['title', 'taskCategoryText'] },
    { columnId: 'status', columnName: 'Status', width: "25%", align: "center", idForValues: ['taskStatusText'] },
    { columnId: 'priority', columnName: 'Prioridade', width: "10%", align: "center", idForValues: ['taskPriorityText'] },
    { columnId: 'dateLimit', columnName: 'Prazo Final', width: "17%", align: "center", idForValues: ['dateLimitText'] },
  ],
};

export default tableConfig;