import { TableStatus } from '../components/TableStatus';

export const columnsTasks = [
  {
    Header: 'ID',
    accessor: (row: any) => row.id, // accessor is the "key" in the data
  },
  {
    Header: 'Tarefa',
    accessor: (row: any) => row.task,
  },
  {
    Header: 'Status',
    Cell: TableStatus,
    accessor: (row: any) => row.status,
  },
  {
    Header: 'Localização',
    accessor: (row: any) => row.place,
  },
  {
    Header: 'Prazo',
    accessor: (row: any) => row.dueDate,
  },
];

export const dataTasks = [
  {
    id: 1351,
    task: 'Manutenção do subsolo do Edifício Principal.',
    status: 'Concluído',
    place: 'Edifício Principal',
    dueDate: '18/12/2021',
  },
  {
    id: 1352,
    task: 'Manutenção do subsolo do Edifício Principal.',
    status: 'Finalizado',
    place: 'Edifício Principal',
    dueDate: '18/12/2021',
  },
  {
    id: 1353,
    task: 'Manutenção do subsolo do Edifício Principal.',
    status: 'Pendente',
    place: 'Edifício Principal',
    dueDate: '18/12/2021',
  },
  {
    id: 1354,
    task: 'Manutenção do subsolo do Edifício Principal.',
    status: 'Em execução',
    place: 'Edifício Principal',
    dueDate: '18/12/2021',
  },
  {
    id: 1355,
    task: 'Manutenção do subsolo do Edifício Principal. Manutenção do subsolo do Edifício Principal. Manutenção do subsolo do Edifício Principal. Manutenção do subsolo do Edifício Principal. Manutenção do subsolo do Edifício Principal. Manutenção do subsolo do Edifício Principal. Manutenção do subsolo do Edifício Principal.',
    status: 'Fila de espera',
    place: 'Edifício Principal',
    dueDate: '18/12/2021',
  },
  {
    id: 1356,
    task: 'Manutenção do subsolo do Edifício Principal.',
    status: 'Suspenso',
    place: 'Edifício Principal',
    dueDate: '18/12/2021',
  },
  {
    id: 1357,
    task: 'Manutenção do subsolo do Edifício Principal. Manutenção do subsolo do Edifício Principal. Manutenção do subsolo do Edifício Principal.',
    status: 'Em análise',
    place: 'Edifício Principal',
    dueDate: '18/12/2021',
  },
  {
    id: 1358,
    task: 'Manutenção do subsolo do Edifício Principal.',
    status: 'Cancelado',
    place: 'Edifício Principal',
    dueDate: '18/12/2021',
  },
  {
    id: 1359,
    task: 'Manutenção do subsolo do Edifício Principal.',
    status: 'Concluído',
    place: 'Edifício Principal',
    dueDate: '18/12/2021',
  },
  {
    id: 1360,
    task: 'Manutenção do subsolo do Edifício Principal.',
    status: 'Concluído',
    place: 'Edifício Principal',
    dueDate: '18/12/2021',
  },
  {
    id: 1361,
    task: 'Manutenção do subsolo do Edifício Principal.',
    status: 'Concluído',
    place: 'Edifício Principal',
    dueDate: '18/12/2021',
  },
  {
    id: 1362,
    task: 'Manutenção do subsolo do Edifício Principal.',
    status: 'Concluído',
    place: 'Edifício Principal',
    dueDate: '18/12/2021',
  },
  {
    id: 1363,
    task: 'Manutenção do subsolo do Edifício Principal.',
    status: 'Concluído',
    place: 'Edifício Principal',
    dueDate: '18/12/2021',
  },
  {
    id: 1367,
    task: 'Manutenção do subsolo do Edifício Principal.',
    status: 'Concluído',
    place: 'Edifício Principal',
    dueDate: '18/12/2021',
  },
  {
    id: 1368,
    task: 'Manutenção do subsolo do Edifício Principal.',
    status: 'Concluído',
    place: 'Edifício Principal',
    dueDate: '18/12/2021',
  },
  {
    id: 1369,
    task: 'Manutenção do subsolo do Edifício Principal.',
    status: 'Concluído',
    place: 'Edifício Principal',
    dueDate: '18/12/2021',
  },
  {
    id: 1371,
    task: 'Manutenção do subsolo do Edifício Principal.',
    status: 'Concluído',
    place: 'Edifício Principal',
    dueDate: '18/12/2021',
  },
  {
    id: 1372,
    task: 'Manutenção do subsolo do Edifício Principal.',
    status: 'Concluído',
    place: 'Edifício Principal',
    dueDate: '18/12/2021',
  },
];