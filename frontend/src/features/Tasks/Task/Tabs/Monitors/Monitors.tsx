import { useMemo } from 'react';
import { useTable } from 'react-table';
import { Line } from 'react-chartjs-2';

import { Table } from '../../../../../components/Tables';
import { dataMonitors, columnsMonitors, columnStyle } from './tableConfig';
import style from './Monitors.module.scss';
import { DataField, DataGrid } from '../../../../../components/DataDisplay';
import { Dropdown } from '../../../../../components/Buttons';
import { TabPaneTitle } from '../../../../../components/TabPane';
import { Input, InputField } from '../../../../../components/Form';

const data2 = {
  labels: ['10/01/2021', '10/01/2021', '10/01/2021', '10/01/2021', '10/01/2021', '10/01/2021', '10/01/2021', '10/01/2021', '10/01/2021', '10/01/2021', '10/01/2021', '10/01/2021'],
  datasets: [
    {
      label: 'Medição de voltagem nas baterias do Nobreak',
      data: [110, 105, 108, 115, 121, 120, 110, 105, 108, 115, 121, 120],
      fill: false,
      backgroundColor: '#FFB053',
      borderColor: '#FFB05390',
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    y: {
      suggestedMin: 100,
      suggestedMax: 130,
      ticks: {
        font: {
          family: 'Source Sans Pro',
          size: 12,
          weight: 600,
        }
      }
    },
    x: {
      ticks: {
        font: {
          family: 'Source Sans Pro',
          size: 12,
          weight: 600,
          skipAuto: true,
          maxRotation: 90,
          minRotation: 0
        }
      }
    }
  },
};

export const Monitors = () => {
  
  const data = useMemo(() => dataMonitors, []);
  const columns = useMemo(() => columnsMonitors, []);
  
  const table = useTable({ columns, data });
  
  return (
    <div>
      <div className={style.TabInfo}>
        <div className={style.SelectButtonsContainer}>
          <div style={{ width: "40%" }}>
            <InputField label="Ativo" >
              <Dropdown 
                value="Grupo Motor Gerador" 
                handleOnClick={() => {}} 
                isOpen={false} 
                buttonStyle={{ width: "100%" }}
              />
            </InputField>
          </div>
          <div style={{ width: "40%" }}>
            <InputField label="Monitor" >
              <Dropdown 
                value="Medição de votlagem nas baterias do Nobreak" 
                handleOnClick={() => {}} 
                isOpen={false} 
                buttonStyle={{ width: "100%" }}
              />
            </InputField>
          </div>
        </div>
        <div className={style.ChartContainer}>
          <Line type="line" data={data2} options={options} />
        </div>
      </div>
      <Table 
        data={table}
        columnStyle={columnStyle}
        smallTable
      />
    </div>
  )
}
