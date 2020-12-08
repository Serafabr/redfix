import moment from 'moment';

function daysOfDelay(date, dueDate) {
  if (dueDate) {
    const today = new Date();
    const dateObj = date ? moment(date) : moment(today);
    const dueDateObj = moment(dueDate);
    const diff = dateObj.diff(dueDateObj, 'days');
    
    return diff > 0 ? diff : `Sem atraso (+ ${-diff} dias)`;
  } else {
    return null;
  }
}

export function itemsMatrixGeneral(data) {
  return (
    [
      [
        { id: 'title', title: 'Título do Serviço', description: data.title, span: 1 },
        { id: 'status', title: 'Status', description: data.taskStatusText, span: 1 },
      ],
      [
        { id: 'orderId', title: 'Tarefa nº', description: data.taskId.toString().padStart(6, "0"), span: 1 },
        { id: 'progress', title: 'Executado', description: data.progress ? (data.progress + " %") : ("0 %"), span: 1 },
      ],
      [
        { id: 'category', title: 'Categoria', description: data.taskCategoryText, span: 1 },
        { id: 'priority', title: 'Prioridade', description: data.taskPriorityText, span: 1 },
      ],
      [{ id: 'place', title: 'Local', description: data.place, span: 1 }],
      [{ id: 'description', title: 'Descrição Técnica', description: data.description, span: 2 }],
    ]
  );
}

export function itemsMatrixDate({ createdAt, dateLimit, dateStart, dateEnd }) {
  return (
    [
      [
        { id: 'createdAt', title: 'Criação da OS', description: createdAt && moment(createdAt).format("DD-MM-YYYY"), span: 1 },
        { id: 'dateLimit', title: 'Prazo Final', description: dateLimit && moment(dateLimit).format("DD-MM-YYYY"), span: 1 },
      ],
      [
        { id: 'dateStart', title: 'Início da Execução', description: dateStart && moment(dateStart).format("DD-MM-YYYY"), span: 1 },
        { id: 'delay', title: 'Dias de Atraso', description: daysOfDelay(dateEnd, dateLimit), span: 1 },
      ],
      [{ id: 'dateEnd', title: 'Término da Execução', description: dateEnd && moment(dateEnd).format("DD-MM-YYYY"), span: 1 }],
    ]
  );
}

export function itemsMatrixMaterial(data) {
  return (
    [
      [{ id: 'quantity', title: 'Quantidade', description: data.length.toString().padStart(3, "0"), span: 1 }],
    ]
  );
}

export function itemsMatrixAssets(data) {
  return (
    [
      [{ id: 'quantity', title: 'Quantidade', description: data.length.toString().padStart(3, "0"), span: 1 }],
    ]
  );
}