import { ButtonWithDropdown, FilterButton, AlignListType } from '../';
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
  icon: string,
  alignList: AlignListType,
  searchable: boolean,
}


export const FilterDropdown = ({
  fixedName,
  manyOptionsName = 'filtros',
  options,
  onSelectItem,
  icon,
  alignList,
  searchable,
}: Props) => {
  
  let name = fixedName;
  
  const selectedItems: Array<ItemType | undefined> = Object.keys(options).reduce((filtered: Array<any>, nextId: string) => {
    if (options[nextId].selected) {
      filtered.push(options[nextId]);
    }
    return filtered;
  }, []);
  
  console.log('selectedItems');
  console.log(selectedItems);
  
  if (selectedItems.length === 1 && selectedItems[0]) {
    name = selectedItems[0].name;
  }
  if (selectedItems.length > 1) {
    name = `${selectedItems.length} ${manyOptionsName}`;
  }
  
  return (
    <div>
      <ButtonWithDropdown 
        options={options}
        alignList={alignList}
        boxWidth={220}
        searchable={searchable}
        onSelectItem={onSelectItem}
      >
        {(onClick, isOpen) => (
          <FilterButton 
            text={name}
            iconComponent={icon}
            onClick={onClick}
          />
        )}
      </ButtonWithDropdown>
    </div>
  )
}