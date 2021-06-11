import { CellFormat } from "../../../../../components/Tables/Cells/CellFormat";
import { ColumnStyleT } from "../../../../../components/Tables/Table";

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
    accessor: (row: any) => row.supply,
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
];

export const columnStyle: ColumnStyleT = {
  id: { width: '60px', textAlign: 'center' },
  supply: { width: '40%' },
  quantity: { width: '15%', textAlign: 'center' },
  approved: { width: '15%', textAlign: 'center' },
  price: { width: '15%', textAlign: 'center' },
  total: { width: '15%', textAlign: 'center' },
};

export const dataSupplies = [
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