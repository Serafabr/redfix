import { useState, useMemo } from 'react';
import { TitleArea } from '../../../components/TitleArea/TitleArea';
import { Button } from '../../../components/Buttons';
import { AddSelectBox } from '../../../components/Buttons';
import { AlignListType } from '../../../components/Buttons/AddSelectBox/_types';
import { useHistory } from 'react-router-dom';

import { ButtonType } from '../../../components/Buttons/Button/_types';

import style from './Tasks.module.scss';

import { Plus as PlusIcon } from '../../../components/Icons';
import { MoreHorizontal as MoreIcon } from '../../../components/Icons';

import { FilterBar } from '../components/FilterBars';
import { Table } from '../../../components/Tables';

import { columnsTasks, dataTasks, columnStyle } from '../utils/fakeDataTasks';
import { useTable } from 'react-table';
import { ItemsPerPage } from '../../../components/Tables/ItemsPerPage/ItemsPerPage';
import { Pagination } from '../../../components/Tables/Pagination/Pagination';
import { Card } from '../../../components/Cards';
import { TableCardButtons, TableCardContent } from '../../../components/Cards';
import { CardHeader } from '../../../components/Cards';
import { columnsSupplies } from '../Task/tabs/Supplies/tableConfig';

const quickFilterInitial = {
    entryBox: {
      name: 'Caixa de entrada',
      selected: false,
    },
    myTasks: {
      name: 'Minhas tarefas',
      selected: false,
    },
    coemant: {
      name: 'Criadas - Coemant',
      selected: false,
    },
    rcsTec: {
      name: 'RCS Tecnologia',
      selected: false,
    },
    noFilter: {
      name: 'Todas tarefas',
      selected: false,
    },
  };
  

type TasksProps = {
  location: {
    pathname: string
  }
};

const taskButtons = [
  <Button text="Nova tarefa" iconComponent={PlusIcon} />,
  <AddSelectBox 
    options={{
      customize: { name: 'Customizar tabela' },
      exportCSV: { name: 'Exportar para CSV' },
      exportExcel: { name: 'Exportar para Excel' },
      exportPDF: { name: 'Exportar para PDF' },
    }}
    alignList={AlignListType.Right}
    boxWidth={160}
    onSelectItem={(id) => {console.log(id)}}
  >
    {(onClick, isOpen) => {
      return (
        <Button buttonType={ButtonType.Secondary} onClick={onClick} iconComponent={MoreIcon} />
      );
    }}
  </AddSelectBox>
];


export const Tasks = ({
  location
}: TasksProps) => {
  
  const [ quickFilter, setQuickFilter ] = useState(quickFilterInitial);
  const [ currentPage, setCurrentPage ] = useState(1);
  
  const filterConfig = {
    quickFilter,
    setQuickFilter
  };
  
  const data = useMemo(() => dataTasks, []);
  const columns = useMemo(() => columnsTasks, []);
  
  const table = useTable({ columns, data });
  
  const history = useHistory();
  
  const getCellProps = (cell: any) => {
    if (cell.column.Header === 'Tarefa') {
      return {
        onClick: () => {history.push(`/tarefas/${cell.row.values.ID}`)},
        className: style.Pointer
      };
    }
    return {};
  }
  
  return (
    <div>
      <TitleArea 
        title="Tarefas"
        path={location.pathname}
        buttons={taskButtons}
      />
      <Card>
        <CardHeader>
          <TableCardButtons>
            <FilterBar 
              filterState={filterConfig}
            />
          </TableCardButtons>
        </CardHeader>
        <TableCardContent>
          <Table 
            data={table}
            getCellProps={getCellProps}
            columnStyle={columnStyle}
            smallTable
          />
          <div className={style.Footer}>
            <ItemsPerPage />
            <Pagination 
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              pages={100}
            />
          </div>
        </TableCardContent>
      </Card>
    </div>
  )
}
