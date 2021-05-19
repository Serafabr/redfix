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
  
  const selectedItems = Object.keys(selected).filter((itemId) => selected[itemId]);
  let name = 'Filtro rápido';
  
  if (selectedItems.length === 1) {
    const filterId = selectedItems[0];
    name = quickFilterItems.filter((item) => item.id === filterId)[0].name
  } else if (selectedItems.length > 1) {
    name = '2 filtros';
  }
  
  console.log('name');
  console.log(name);
  
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
            text={name}
            iconComponent={quickIcon}
            onClick={onClick}
          />
        )}
      </ButtonWithDropdown>
    </div>
  )
}
