import { CellFormat } from '../../../../../components/Tables/Cells/CellFormat';
import { MoreButton } from '../../../../../components/Tables';

type ColumnStyle = {
  [id: string]: any,
}

export const columnsAssets = [
  {
    Header: 'Data de inclusão',
    id: 'date',
    accessor: (row: any) => row.date, // accessor is the "key" in the data
    Cell: CellFormat({ isCenter: true, isBold: true })
  },
  {
    Header: 'Arquivo',
    id: 'file',
    accessor: (row: any) => row.file,
  },
  {
    Header: 'Criado por',
    id: 'createdBy',
    accessor: (row: any) => row.createdBy,
    Cell: CellFormat({ isCenter: true }),
  },
  {
    Header: 'Tamanho',
    id: 'size',
    accessor: (row: any) => row.size,
    Cell: CellFormat({ isCenter: true }),
  },
  {
    Header: '',
    id: 'moreButton',
    accessor: (row: any) => row.id,
    Cell: MoreButton,
  },
];

export const columnStyle: ColumnStyle = {
  date: { width: '150px', textAlign: 'center' },
  file: { width: '50%' },
  createdBy: { width: '30%', textAlign: 'center' },
  size: { width: '20%', textAlign: 'center' },
  moreButton: { width: '40px', textAlign: 'center' },
};