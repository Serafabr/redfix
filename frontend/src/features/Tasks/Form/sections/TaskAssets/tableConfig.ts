import { CellFormat } from '../../../../../components/Tables/Cells/CellFormat';
import { MoreButton } from '../../../../../components/Tables';

type ColumnStyle = {
  [id: string]: any,
}

export const columnsTasks = [
  {
    Header: 'Código',
    id: 'id',
    accessor: (row: any) => row.id, // accessor is the "key" in the data
    Cell: CellFormat({ isCenter: true, isBold: true })
  },
  {
    Header: 'Local ou equipamento',
    id: 'asset',
    accessor: (row: any) => row.asset,
  },
  {
    Header: 'Categoria',
    id: 'category',
    accessor: (row: any) => row.category,
    Cell: CellFormat({ isCenter: true }),
  },
  {
    Header: 'Ativo pai',
    id: 'parent',
    accessor: (row: any) => row.parent,
    Cell: CellFormat({ isCenter: true })
  },
  {
    id: 'moreButton',
    Header: '',
    accessor: (row: any) => row.id,
    Cell: MoreButton,
  },
];

export const columnStyle: ColumnStyle = {
  id: { width: '120px', textAlign: 'center' },
  asset: { width: '60%' },
  category: { width: '40%', textAlign: 'center' },
  moreButton: { width: '40px', textAlign: 'center' },
};