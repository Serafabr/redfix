import { ButtonWithDropdown, FilterButton, AlignList } from '../../../../components/Buttons';
import { SelectedType, OnSelectItemType } from '../../../../components/SelectBox/SelectBox';
import style from './FilterButton.module.scss';

import quickIcon from '../../../../assets/icons/quick.svg';


const quickFilterItems = [
  {id: 'entryBox', name: 'Caixa de entrada'},
  {id: 'myTasks', name: 'Minhas tarefas'},
  {id: 'coemant', name: 'Criadas - Coemant'},
  {id: 'rcsTec', name: 'RCS Tecnologia'},
  {id: 'noFilter', name: 'Sem filtro'},
];

type Props = {
  selected: SelectedType,
  onSelectItem: OnSelectItemType
}

export const QuickFilter = ({
  selected,
  onSelectItem
}: Props) => {
  
  const selectedItems = [];
  
  return (
    <div>
      <ButtonWithDropdown 
        listItems={quickFilterItems}
        selected={selected}
        alignList={AlignList.Left}
        boxWidth={220}
        searchable={true}
        onSelectItem={onSelectItem}
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
