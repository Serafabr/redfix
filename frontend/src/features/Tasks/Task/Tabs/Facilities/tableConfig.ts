import { CellFormat } from "../../../../../components/Tables/Cells/CellFormat";
import { ColumnStyleT } from "../../../../../components/Tables/Table";
import { MoreButton } from "../../../../../components/Tables/Cells/MoreButton";

export const columnsSupplies = [
  {
    id: 'id',
    Header: 'Código',
    accessor: (row: any) => row.id, // accessor is the "key" in the data
    Cell: CellFormat({ isCenter: true, isBold: true }),
  },
  {
    id: 'facility',
    Header: 'Edifício ou Área',
    accessor: (row: any) => row.facility,
  },
  {
    id: 'parent',
    Header: 'Ativo Pai',
    accessor: (row: any) => row.parent,
    Cell: CellFormat({ isCenter: true }),
  },
  {
    id: 'area',
    Header: 'Área',
    accessor: (row: any) => row.area,
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
  id: { width: '120px', textAlign: 'center' },
  facility: { width: '50%' },
  parent: { width: '35%', textAlign: 'center' },
  area: { width: '15%', textAlign: 'center' },
  moreButton: { width: '40px', textAlign: 'center' },
};

export const dataSupplies = [
  {
    id: 'CASF-000-000',
    facility: 'Edifício Principal - Anexo 01',
    parent: 'Edifício Principal',
    area: '2055,24 m2',
  },
  {
    id: 'CASF-000-000',
    facility: 'Edifício Principal - Anexo 01',
    parent: 'Edifício Principal',
    area: '2055,24 m2',
  },
  {
    id: 'CASF-000-000',
    facility: 'Edifício Principal - Anexo 01',
    parent: 'Edifício Principal',
    area: '2055,24 m2',
  },
  {
    id: 'CASF-000-000',
    facility: 'Edifício Principal - Anexo 01',
    parent: 'Edifício Principal',
    area: '2055,24 m2',
  },
  {
    id: 'CASF-000-000',
    facility: 'Edifício Principal - Anexo 01',
    parent: 'Edifício Principal',
    area: '2055,24 m2',
  },
  {
    id: 'CASF-000-000',
    facility: 'Edifício Principal - Anexo 01',
    parent: 'Edifício Principal',
    area: '2055,24 m2',
  },
  {
    id: 'CASF-000-000',
    facility: 'Edifício Principal - Anexo 01',
    parent: 'Edifício Principal',
    area: '2055,24 m2',
  },
];