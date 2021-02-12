import paths from '../../../paths';
import moment from 'moment';
import 'moment/locale/pt-br'

function formatDateLimit(item) {
  return item.dateLimit && moment(item.dateLimit).format("DD, MMM YYYY");
}

function styleBodyElement(item, columnId) {
  if (columnId === 'dateLimit') {
    return { textTransform: 'capitalize' };
  }
  
  if (columnId === 'status') {
    switch(item.taskStatusId) {
      case 1: // Fila de espera
        return {
          color: '#ff9900 ',
          fontWeight: '700'
        };
      case 2: // Pendente
        return {
          color: '#966100 ',
          fontWeight: '700'
        };
      case 3: // Em execução
        return {
          color: '#2075a7 ',
          fontWeight: '700'
        };
      case 4: // Suspensa
        return {
          color: '#966100 ',
          fontWeight: '700'
        };
      case 5: // Em análise
        return {
          color: '#9e20a7 ',
          fontWeight: '700'
        };
      case 6: // Cancelada
        return {
          color: '#c70303 ',
          fontWeight: '700'
        };
      case 7: // Concluída
        return {
          color: '#179600 ',
          fontWeight: '700'
        };
      default:
        return null;
    }
  }
}

const tableConfig = {
  attForDataId: 'taskId',
  hasCheckbox: false,
  checkboxWidth: '5%',
  isItemClickable: true,
  dataAttForClickable: 'title',
  itemPathWithoutID: paths.task.toOne,
  prepareData: {
    'dateLimitText': formatDateLimit,
  },
  styleBodyElement,
  columnsConfig: [
    { columnId: 'taskId', columnName: 'OS', width: "7%", align: "center", idForValues: ['taskId'] },
    { columnId: 'title', columnName: 'Título', width: "43%", align: "justify", idForValues: ['title', 'taskCategoryText'] },
    { columnId: 'status', sortKey: 'taskStatusText', columnName: 'Status', width: "15%", align: "center", idForValues: ['taskStatusText'] },
    { columnId: 'dateLimit', sortKey: 'dateLimitText', columnName: 'Prazo Final', width: "15%", align: "center", idForValues: ['dateLimitText'] },
    { columnId: 'place', columnName: 'Localização', width: "20%", isTextWrapped: true, align: "center", idForValues: ['place'] },
  ],
};

export default tableConfig;
