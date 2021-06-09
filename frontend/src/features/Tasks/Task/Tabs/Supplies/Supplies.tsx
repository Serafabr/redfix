import { useMemo } from 'react';
import { useTable } from 'react-table';

import { Table } from '../../../../../components/Tables';
import { dataSupplies, columnsSupplies } from './tableConfig';
import style from './Supplies.module.scss';

export const Supplies = () => {
  
  const data = useMemo(() => dataSupplies, []);
  const columns = useMemo(() => columnsSupplies, []);
  
  const table = useTable({ columns, data });
  
  return (
    <div>
      <Table 
        data={table}
      />
    </div>
  )
}
