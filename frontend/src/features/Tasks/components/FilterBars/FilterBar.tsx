import { ButtonWithDropdown, FilterButton, AlignList } from '../Buttons';
import style from './FilterBar.module.scss';

export const FilterBar = () => {
  return (
    <div className={style.RightDivider}>
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
            text="Caixa de entrada"
            iconComponent={quickIcon}
            onClick={onClick}
          />
        )}
      </ButtonWithDropdown>
    </div>
  )
};
