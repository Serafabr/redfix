import { TableStatus } from '../components/TableStatus';
import { TableTask } from '../components/TableTask';
import { CellFormat } from '../../../components/Tables/Cells/CellFormat';

export const columnsTasks = [
  {
    Header: 'ID',
    id: 'id',
    accessor: (row: any) => row.id, // accessor is the "key" in the data
    Cell: CellFormat({ isCenter: true, isBold: true })
  },
  {
    Header: 'Tarefa',
    id: 'task',
    accessor: (row: any) => ({task: row.task, team: row.team}),
    Cell: TableTask
  },
  {
    Header: 'Status',
    id: 'status',
    accessor: (row: any) => row.status,
    Cell: TableStatus,
  },
  {
    Header: 'Localização',
    id: 'place',
    accessor: (row: any) => row.place,
    Cell: CellFormat({ isCenter: true })
  },
  {
    Header: 'Prazo',
    id: 'dueDate',
    accessor: (row: any) => row.dueDate,
    Cell: CellFormat({ isCenter: true })
  },
];

type ColumnStyle = {
  [id: string]: any,
}

export const columnStyle: ColumnStyle = {
  id: { width: '80px', textAlign: 'center' },
  task: { width: '55%' },
  status: { width: '150px', textAlign: 'center' },
  place: { width: '30%', textAlign: 'center' },
  dueDate: { width: '15%', textAlign: 'center' },
};

export const dataTasks = [
  {
    id: 135112312,
    task: 'Manutenção do subsolo do Edifício Principal.',
    status: 'Concluído',
    place: 'Edifício Principal',
    dueDate: '18/12/2021',
    team: 'Coemant',
  },
  {
    id: 1352,
    task: 'Manutenção do subsolo do Edifício Principal.',
    status: 'Finalizado',
    place: 'Edifício Principal',
    dueDate: '18/12/2021',
    team: 'Equipa da RCS Tecnologia',
  },
  {
    id: 1353,
    task: 'Manutenção do subsolo do Edifício Principal.',
    status: 'Pendente',
    place: 'Edifício Principal',
    dueDate: '18/12/2021',
    team: 'Entherm',
  },
  {
    id: 1354,
    task: 'Manutenção do subsolo do Edifício Principal.',
    status: 'Em execução',
    place: 'Edifício Principal',
    dueDate: '18/12/2021',
    team: 'Coordenação Geral',
  },
  {
    id: 1355,
    task: 'Manutenção do subsolo do Edifício Principal. Manutenção do subsolo do Edifício Principal. Manutenção do subsolo do Edifício Principal. Manutenção do subsolo do Edifício Principal. Manutenção do subsolo do Edifício Principal. Manutenção do subsolo do Edifício Principal. Manutenção do subsolo do Edifício Principal.',
    status: 'Fila de espera',
    place: 'Edifício Principal',
    dueDate: '18/12/2021',
    team: 'Sinfra',
  },
  {
    id: 1356,
    task: 'Manutenção do subsolo do Edifício Principal.',
    status: 'Suspenso',
    place: 'Edifício Principal',
    dueDate: '18/12/2021',
    team: 'Coemant',
  },
  {
    id: 1357,
    task: 'Manutenção do subsolo do Edifício Principal. Manutenção do subsolo do Edifício Principal. Manutenção do subsolo do Edifício Principal.',
    status: 'Em análise',
    place: 'Edifício Principal',
    dueDate: '18/12/2021',
    team: 'Sinfra',
  },
  {
    id: 1358,
    task: 'Manutenção do subsolo do Edifício Principal.',
    status: 'Cancelado',
    place: 'Edifício Principal',
    dueDate: '18/12/2021',
    team: 'Coemant',
  },
  {
    id: 1359,
    task: 'Manutenção do subsolo do Edifício Principal.',
    status: 'Concluído',
    place: 'Edifício Principal',
    dueDate: '18/12/2021',
    team: 'Coproj',
  },
  {
    id: 1360,
    task: 'Manutenção do subsolo do Edifício Principal.',
    status: 'Concluído',
    place: 'Edifício Principal',
    dueDate: '18/12/2021',
    team: 'Semac',
  },
  {
    id: 1361,
    task: 'Manutenção do subsolo do Edifício Principal.',
    status: 'Concluído',
    place: 'Edifício Principal',
    dueDate: '18/12/2021',
    team: 'Semac',
  },
  {
    id: 1362,
    task: 'Manutenção do subsolo do Edifício Principal.',
    status: 'Concluído',
    place: 'Edifício Principal',
    dueDate: '18/12/2021',
    team: 'Coemant',
  },
  {
    id: 1363,
    task: 'Manutenção do subsolo do Edifício Principal.',
    status: 'Concluído',
    place: 'Edifício Principal',
    dueDate: '18/12/2021',
    team: 'Seau',
  },
  {
    id: 1367,
    task: 'Manutenção do subsolo do Edifício Principal.',
    status: 'Concluído',
    place: 'Edifício Principal',
    dueDate: '18/12/2021',
    team: 'Coemant',
  },
  {
    id: 1368,
    task: 'Manutenção do subsolo do Edifício Principal.',
    status: 'Concluído',
    place: 'Edifício Principal',
    dueDate: '18/12/2021',
    team: 'Seau',
  },
  {
    id: 1369,
    task: 'Manutenção do subsolo do Edifício Principal.',
    status: 'Concluído',
    place: 'Edifício Principal',
    dueDate: '18/12/2021',
    team: 'Coemant',
  },
  {
    id: 1371,
    task: 'Manutenção do subsolo do Edifício Principal.',
    status: 'Concluído',
    place: 'Edifício Principal',
    dueDate: '18/12/2021',
    team: 'Coemant',
  },
  {
    id: 1372,
    task: 'Manutenção do subsolo do Edifício Principal.',
    status: 'Concluído',
    place: 'Edifício Principal',
    dueDate: '18/12/2021',
    team: 'Coemant',
  },
];