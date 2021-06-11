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
    id: 'facility',
    Header: 'Edifício ou Área',
    accessor: (row: any) => row.facility,
  },
  {
    id: 'parent',
    Header: 'Ativo Pai',
    accessor: (row: any) => row.approved,
    Cell: CellFormat({ isCenter: true }),
  },
  {
    id: 'area',
    Header: 'Área',
    accessor: (row: any) => row.area,
    Cell: CellFormat({ isCenter: true }),
  },
];

export const columnStyle: ColumnStyleT = {
  id: { width: '120px', textAlign: 'center' },
  facility: { width: '50%' },
  parent: { width: '35%', textAlign: 'center' },
  area: { width: '15%', textAlign: 'center' },
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