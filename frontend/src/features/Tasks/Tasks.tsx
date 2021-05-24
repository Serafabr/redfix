import { useState, useMemo } from 'react';
import { TitleArea } from '../../components/TitleArea/TitleArea';
import { Button, ButtonType } from '../../components/Buttons';
import { ButtonWithDropdown, AlignListType } from '../../components/Buttons';

import style from './Tasks.module.scss';

import { Plus as PlusIcon } from '../../components/Icons';
import { MoreHorizontal as MoreIcon } from '../../components/Icons';

import { FilterBar } from './components/FilterBars';
import { Table } from '../../components/Tables';

import { columnsTasks, dataTasks } from './utils/fakeDataTasks';
import { useTable } from 'react-table';
import { ItemsPerPage } from '../../components/Tables/ItemsPerPage/ItemsPerPage';
import { Pagination } from '../../components/Tables/Pagination/Pagination';
import { DropdownButton } from '../../components/Buttons/Dropdown/DropdownButton';

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
  <ButtonWithDropdown 
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
        <Button buttonType={ButtonType.Secondary} onClick={onClick} justIcon iconComponent={MoreIcon} />
      );
    }}
  </ButtonWithDropdown>
];


export const Tasks = ({
  location
}: TasksProps) => {
  
  const [ quickFilter, setQuickFilter ] = useState(quickFilterInitial);
  
  const filterConfig = {
    quickFilter,
    setQuickFilter
  };
  
  const data = useMemo(() => dataTasks, []);
  const columns = useMemo(() => columnsTasks, []);
  
  const table = useTable({ columns, data });
  
  console.log('tableProps');
  console.log(table.getTableProps());
  
  return (
    <div>
      <TitleArea 
        title="Tarefas"
        path={location.pathname}
        buttons={taskButtons}
      />
      <div className={style.Card}>
        <div className={style.Buttons}>
          <FilterBar 
            filterState={filterConfig}
          />
        </div>
        <div className={style.Content}>
          <Table 
            data={table}
          />
          <div>
            <ItemsPerPage />
            <Pagination />
          </div>
        </div>
      </div>
    </div>
  )
}
