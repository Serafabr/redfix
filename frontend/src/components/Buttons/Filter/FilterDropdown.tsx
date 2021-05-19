import { ButtonWithDropdown, FilterButton, AlignList } from '../';
import { OnSelectItemType, ItemsType, ItemType } from '../../SelectBox/SelectBox';

import style from './FilterButton.module.scss';

import quickIcon from '../../../../assets/icons/quick.svg';


const quickFilterItems = {
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
    name: 'Sem filtro',
    selected: false,
  },
};

type Props = {
  fixedName: string,
  manyOptionsName?: string,
  options: ItemsType,
  onSelectItem: OnSelectItemType,
}


export const FilterDropdown = ({
  fixedName,
  manyOptionsName = 'filtros',
  options,
  onSelectItem,
}: Props) => {
  
  let name = fixedName;
  
  const selectedItems: Array<ItemType | undefined> = Object.keys(options).map((itemId) => {
    if (options[itemId].selected) {
      return options[itemId];
    }
  });
  
  if (selectedItems.length === 1 && selectedItems[0]) {
    name = selectedItems[0].name;
  }
  if (selectedItems.length > 1) {
    name = `${selectedItems.length} ${manyOptionsName}`;
  }
  
  // console.log('name');
  // console.log(name);
  
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