import { CellFormat } from "../../../../../components/Tables/Cells/CellFormat";
import { MoreButton } from "../../../../../components/Tables/Cells/MoreButton";
import { ColumnStyleT } from "../../../../../components/Tables/Table";
import { CellWithSubtext } from "../../../../../components/Tables/Cells/CellWithSubtext";

export const columnsMonitors = [
  {
    id: 'id',
    Header: 'Ativo',
    accessor: (row: any) => row.id, // accessor is the "key" in the data
    Cell: CellFormat({ isCenter: true, isBold: true }),
  },
  {
    id: 'monitor',
    Header: 'Monitor',
    accessor: (row: any) => row.monitor,
    //accessor: (row: any) => ({mainText: row.monitor, subText: 'RCS Tecnologia - CT 110/2020'}),
    //Cell: CellWithSubtext,
  },
  {
    id: 'date',
    Header: 'Data',
    accessor: (row: any) => row.date,
    Cell: CellFormat({ isCenter: true }),
  },
  {
    id: 'value',
    Header: 'Medição',
    accessor: (row: any) => row.value,
    Cell: CellFormat({ isCenter: true }),
  },
  {
    id: 'optimumValue',
    Header: 'Valor Ideal',
    accessor: (row: any) => row.optimumValue,
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
  id: { width: '130px', textAlign: 'center' },
  monitor: { width: '45%' },
  date: { width: '15%', textAlign: 'center' },
  value: { width: '15%', textAlign: 'center' },
  optimumValue: { width: '25%', textAlign: 'center' },
  moreButton: { width: '40px', textAlign: 'center' },
};

export const dataMonitors = [
  {
    id: 'ELET-30495',
    monitor: 'Medição de voltagem nas baterias do Nobreak',
    date: '10/06/2021',
    value: '125 Volts',
    optimumValue: 'Entre 110 e 130 Volts',
  },
  {
    id: 'ELET-30495',
    monitor: 'Medição de voltagem nas baterias do Nobreak',
    date: '10/06/2021',
    value: '125 Volts',
    optimumValue: 'Entre 110 e 130 Volts',
  },
  {
    id: 'ELET-30495',
    monitor: 'Medição de voltagem nas baterias do Nobreak',
    date: '10/06/2021',
    value: '125 Volts',
    optimumValue: 'Entre 110 e 130 Volts',
  },
  {
    id: 'ELET-30495',
    monitor: 'Medição de voltagem nas baterias do Nobreak',
    date: '10/06/2021',
    value: '125 Volts',
    optimumValue: 'Entre 110 e 130 Volts',
  },
  {
    id: 'ELET-30495',
    monitor: 'Medição de voltagem nas baterias do Nobreak',
    date: '10/06/2021',
    value: '125 Volts',
    optimumValue: 'Entre 110 e 130 Volts',
  },
  {
    id: 'ELET-30495',
    monitor: 'Medição de voltagem nas baterias do Nobreak',
    date: '10/06/2021',
    value: '125 Volts',
    optimumValue: 'Entre 110 e 130 Volts',
  },
  {
    id: 'ELET-30495',
    monitor: 'Medição de voltagem nas baterias do Nobreak',
    date: '10/06/2021',
    value: '125 Volts',
    optimumValue: 'Entre 110 e 130 Volts',
  },
  {
    id: 'ELET-30495',
    monitor: 'Medição de voltagem nas baterias do Nobreak',
    date: '10/06/2021',
    value: '125 Volts',
    optimumValue: 'Entre 110 e 130 Volts',
  },
];