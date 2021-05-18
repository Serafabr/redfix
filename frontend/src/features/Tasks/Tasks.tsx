import { useState } from 'react';
import { TitleArea } from '../../components/TitleArea/TitleArea';
import { Button, ButtonType } from '../../components/Buttons';
import { ButtonWithDropdown, AlignList } from '../../components/Buttons';
import { SelectedType } from '../../components/SelectBox/SelectBox';

import style from './Tasks.module.scss';

import { Plus as PlusIcon } from '../../components/Icons';
import { MoreHorizontal as MoreIcon } from '../../components/Icons';

import { FilterBar } from './components/FilterBars';


type TasksProps = {
  location: {
    pathname: string
  }
};

const taskButtons = [
  <Button text="Nova tarefa" iconComponent={PlusIcon} />,
  <ButtonWithDropdown 
    listItems={[
      {id: '1', name: 'Customizar tabela'},
      {id: '2', name: 'Exportar para CSV'},
      {id: '3', name: 'Expotar para Excel'},
      {id: '4', name: 'Exportar para PDF'},
    ]}
    alignList={AlignList.Right}
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
  
  const [ quickFilter, setQuickFilter ] = useState<SelectedType>({});
  
  
  const filterConfig = {
    quickFilter,
    setQuickFilter
  };
  
  
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
            activatedFilter={filterConfig}
          />
        </div>
        <div className={style.Content}>Content</div>
      </div>
    </div>
  )
}
