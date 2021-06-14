import { useMemo } from 'react';
import { useTable } from 'react-table';

import { Table } from '../../../../../components/Tables';
import { dataSupplies, columnsSupplies, columnStyle } from './tableConfig';
import style from './Supplies.module.scss';

export const Billings = () => {
  
  const data = useMemo(() => dataSupplies, []);
  const columns = useMemo(() => columnsSupplies, []);
  
  const table = useTable({ columns, data });
  
  return (
    <div>
      <Table 
        data={table}
        columnStyle={columnStyle}
        smallTable
      />
    </div>
  )
}
