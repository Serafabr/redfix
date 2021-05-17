import { TitleArea } from '../../components/TitleArea/TitleArea';
import { Button, ButtonType, FilterDropdown, FilterButton } from '../../components/Buttons';
import { ButtonWithDropdown, AlignList } from '../../components/Buttons';

import style from './Tasks.module.scss';

import { Plus as PlusIcon } from '../../components/Icons';
import { MoreHorizontal as MoreIcon } from '../../components/Icons';

import quickIcon from '../../assets/icons/quick.svg';


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
  return (
    <div>
      <TitleArea 
        title="Tarefas"
        path={location.pathname}
        buttons={taskButtons}
      />
      <div className={style.Card}>
        <div className={style.Buttons}>
          <ButtonWithDropdown 
            listItems={[
              {id: '1', name: 'Caixa de entrada', selected: true},
              {id: '2', name: 'Minhas tarefas'},
              {id: '3', name: 'Criadas - Coemant'},
              {id: '4', name: 'RCS Tecnologia'},
              {id: '5', name: 'Sem filtro'},
            ]}
            alignList={AlignList.Left}
            boxWidth={220}
            searchable={true}
          >
            {(onClick, isOpen) => (
              <FilterButton 
                text="Caixa de Entrada"
                iconComponent={quickIcon}
                onClick={onClick}
              />
            )}
          </ButtonWithDropdown>
        </div>
        <div className={style.Content}>Content</div>
      </div>
    </div>
  )
}
