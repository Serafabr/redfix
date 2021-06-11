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
    Header: 'Descrição',
    accessor: (row: any) => ({mainText: row.supply, subText: 'RCS Tecnologia - CT 110/2020'}),
    Cell: CellWithSubtext,
  },
  {
    id: 'quantity',
    Header: 'Quantidade',
    accessor: (row: any) => row.quantity,
    Cell: CellFormat({ isCenter: true }),
  },
  {
    id: 'approved',
    Header: 'Aprovado',
    accessor: (row: any) => row.approved,
    Cell: CellFormat({ isCenter: true }),
  },
  {
    id: 'price',
    Header: 'Unitário',
    accessor: (row: any) => row.price,
    Cell: CellFormat({ isCenter: true }),
  },
  {
    id: 'total',
    Header: 'Total',
    accessor: (row: any) => row.total,
    Cell: CellFormat({ isCenter: true, isBold: true }),
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
  supply: { width: '40%' },
  quantity: { width: '14%', textAlign: 'center' },
  approved: { width: '14%', textAlign: 'center' },
  price: { width: '15%', textAlign: 'center' },
  total: { width: '17%', textAlign: 'center' },
  moreButton: { width: '40px', textAlign: 'center' },
};

export const dataSupplies = [
  {
    id: 'M-03',
    supply: 'Interruptor para condulete',
    quantity: '12 un.',
    approved: '10 un.',
    price: 'R$ 21.211,50',
    total: 'R$ 300.000,00',
  },
  {
    id: 'M-03',
    supply: 'Interruptor para condulete',
    quantity: '12 un.',
    approved: '10 un.',
    price: 'R$ 2,50',
    total: 'R$ 30,00',
  },
  {
    id: 'M-03',
    supply: 'Interruptor para condulete. Interruptor para condulete. Interruptor para condulete. Interruptor para condulete. Interruptor para condulete. Interruptor para condulete. ',
    quantity: '12 un.',
    approved: '10 un.',
    price: 'R$ 2,50',
    total: 'R$ 30,00',
  },
  {
    id: 'M-03',
    supply: 'Interruptor para condulete. Interruptor para condulete. Interruptor para condulete. ',
    quantity: '12 un.',
    approved: '10 un.',
    price: 'R$ 2,50',
    total: 'R$ 30,00',
  },
  {
    id: 'M-03',
    supply: 'Interruptor para condulete',
    quantity: '12 un.',
    approved: '10 un.',
    price: 'R$ 2,50',
    total: 'R$ 30,00',
  },
  {
    id: 'M-03',
    supply: 'Interruptor para condulete',
    quantity: '12 un.',
    approved: '10 un.',
    price: 'R$ 2,50',
    total: 'R$ 30,00',
  },
  {
    id: 'M-03',
    supply: 'Interruptor para condulete',
    quantity: '12 un.',
    approved: '10 un.',
    price: 'R$ 2,50',
    total: 'R$ 30,00',
  },
  {
    id: 'M-03',
    supply: 'Interruptor para condulete',
    quantity: '12 un.',
    approved: '10 un.',
    price: 'R$ 2,50',
    total: 'R$ 30,00',
  },
  {
    id: 'M-03',
    supply: 'Interruptor para condulete',
    quantity: '12 un.',
    approved: '10 un.',
    price: 'R$ 2,50',
    total: 'R$ 30,00',
  },
  {
    id: 'M-03',
    supply: 'Interruptor para condulete',
    quantity: '12 un.',
    approved: '10 un.',
    price: 'R$ 2,50',
    total: 'R$ 30,00',
  },
  {
    id: 'M-03',
    supply: 'Interruptor para condulete',
    quantity: '12 un.',
    approved: '10 un.',
    price: 'R$ 2,50',
    total: 'R$ 30,00',
  },
  {
    id: 'M-03',
    supply: 'Interruptor para condulete',
    quantity: '12 un.',
    approved: '10 un.',
    price: 'R$ 2,50',
    total: 'R$ 30,00',
  },
];