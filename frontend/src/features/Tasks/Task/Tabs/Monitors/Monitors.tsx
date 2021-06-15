import { useMemo } from 'react';
import { useTable } from 'react-table';

import { Table } from '../../../../../components/Tables';
import { dataMonitors, columnsMonitors, columnStyle } from './tableConfig';
import style from './Monitors.module.scss';
import { DataField, DataGrid } from '../../../../../components/DataDisplay';

export const Monitors = () => {
  
  const data = useMemo(() => dataMonitors, []);
  const columns = useMemo(() => columnsMonitors, []);
  
  const table = useTable({ columns, data });
  
  return (
    <div>
      <div className={style.TabInfo}>
        <DataGrid className={style.DataGrid}>
          <DataField label="Custo da tarefa">
            R$ 2.356,54
          </DataField>
          <DataField label="Total pago">
            R$ 1.100,00
          </DataField>
        </DataGrid>
      </div>
      <Table 
        data={table}
        columnStyle={columnStyle}
        smallTable
      />
    </div>
  )
}
