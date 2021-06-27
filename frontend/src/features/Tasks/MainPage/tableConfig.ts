import { TableStatus } from '../components/TableStatus';
import { TableTask } from '../components/TableTask';
import { CellFormat } from '../../../components/Tables/Cells/CellFormat';

type ColumnStyle = {
  [id: string]: any,
}

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

export const columnStyle: ColumnStyle = {
  id: { width: '80px', textAlign: 'center' },
  task: { width: '55%' },
  status: { width: '150px', textAlign: 'center' },
  place: { width: '30%', textAlign: 'center' },
  dueDate: { width: '15%', textAlign: 'center' },
};