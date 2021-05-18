import { ButtonWithDropdown, FilterButton, AlignList } from '../../../../components/Buttons';
import style from './FilterButton.module.scss';

import quickIcon from '../../../../assets/icons/quick.svg';


const quickFilterItems = [
  {id: '1', name: 'Caixa de entrada'},
  {id: '2', name: 'Minhas tarefas'},
  {id: '3', name: 'Criadas - Coemant'},
  {id: '4', name: 'RCS Tecnologia'},
  {id: '5', name: 'Sem filtro'},
]

const selectedItems = {
  '1': true,
};

export const QuickFilter = () => {
  return (
    <div>
      <ButtonWithDropdown 
        listItems={quickFilterItems}
        selected={selectedItems}
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
}
