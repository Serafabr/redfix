import { CellFormat } from "../../../../../components/Tables/Cells/CellFormat";
import { MoreButton } from "../../../../../components/Tables/Cells/MoreButton";
import { ColumnStyleT } from "../../../../../components/Tables/Table";
import { CellWithSubtext } from "../../../../../components/Tables/Cells/CellWithSubtext";

export const columnsSupplies = [
  {
    id: 'id',
    Header: 'ID',
    accessor: (row: any) => row.id, // accessor is the "key" in the data
    Cell: CellFormat({ isCenter: true, isBold: true }),
  },
  {
    id: 'supply',
    Header: 'Suprimento',
    accessor: (row: any) => ({mainText: row.supply, subText: 'RCS Tecnologia - CT 110/2020'}),
    Cell: CellWithSubtext,
  },
  {
    id: 'total',
    Header: 'Devido',
    accessor: (row: any) => row.total,
    Cell: CellFormat({ isCenter: true }),
  },
  {
    id: 'paid',
    Header: 'Pago',
    accessor: (row: any) => row.paid,
    Cell: CellFormat({ isCenter: true }),
  },
  {
    id: 'billing',
    Header: 'Faturamento',
    accessor: (row: any) => row.billing,
    Cell: CellFormat({ isCenter: true }),
  },
  {
    id: 'moreButton',
    Header: '',
    accessor: (row: any) => row.id,
    Cell: MoreButton,
  },
];

export const columnStyle: ColumnStyleT = {
  id: { width: '60px', textAlign: 'center' },
  supply: { width: '44%' },
  total: { width: '20%', textAlign: 'center' },
  paid: { width: '20%', textAlign: 'center' },
  billing: { width: '16%', textAlign: 'center' },
  moreButton: { width: '40px', textAlign: 'center' },
};

export const dataSupplies = [
  {
    id: 'M-03',
    supply: 'Interruptor para condulete',
    total: 'R$ 224,50',
    paid: 'R$ 224,50',
    billing: 'FT-23510',
  },
  {
    id: 'M-03',
    supply: 'Interruptor para condulete',
    total: 'R$ 224,50',
    paid: 'R$ 224,50',
    billing: 'FT-23510',
  },
  {
    id: 'M-03',
    supply: 'Interruptor para condulete',
    total: 'R$ 224,50',
    paid: 'R$ 224,50',
    billing: 'FT-23510',
  },
  {
    id: 'M-03',
    supply: 'Interruptor para condulete',
    total: 'R$ 224,50',
    paid: 'R$ 224,50',
    billing: 'FT-23510',
  },
  {
    id: 'M-03',
    supply: 'Interruptor para condulete',
    total: 'R$ 224,50',
    paid: 'R$ 224,50',
    billing: 'FT-23510',
  },
  {
    id: 'M-03',
    supply: 'Interruptor para condulete',
    total: 'R$ 224,50',
    paid: 'R$ 224,50',
    billing: 'FT-23510',
  },
  {
    id: 'M-03',
    supply: 'Interruptor para condulete',
    total: 'R$ 224,50',
    paid: 'R$ 224,50',
    billing: 'FT-23510',
  },
  {
    id: 'M-03',
    supply: 'Interruptor para condulete',
    total: 'R$ 224,50',
    paid: 'R$ 224,50',
    billing: 'FT-23510',
  },
  {
    id: 'M-03',
    supply: 'Interruptor para condulete',
    total: 'R$ 224,50',
    paid: 'R$ 224,50',
    billing: 'FT-23510',
  },
  {
    id: 'M-03',
    supply: 'Interruptor para condulete',
    total: 'R$ 224,50',
    paid: 'R$ 224,50',
    billing: 'FT-23510',
  },
];