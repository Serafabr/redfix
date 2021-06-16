import { useMemo } from 'react';
import { useTable } from 'react-table';

import { Table } from '../../../../../components/Tables';
import { dataBillings, columnsBillings, columnStyle } from './tableConfig';
import style from './Billings.module.scss';
import { DataField, DataGrid } from '../../../../../components/DataDisplay';
import { TabPaneTitle } from '../../../../../components/TabPane';

export const Billings = () => {
  
  const data = useMemo(() => dataBillings, []);
  const columns = useMemo(() => columnsBillings, []);
  
  const table = useTable({ columns, data });
  
  return (
    <div>
      {/* <div className={style.TitleContainer}>
        <TabPaneTitle title="Pagamentos realizados" />
      </div> */}
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
