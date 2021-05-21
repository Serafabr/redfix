import { ButtonWithDropdown, FilterButton, AlignListType } from '../';
import { OnSelectItemType, OptionsType, OptionType } from '../../SelectBox/SelectBox';

import style from './Filter.module.scss';

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
  options: OptionsType,
  onSelectItem: OnSelectItemType,
  icon: string,
  activatedIcon: string,
  alignList: AlignListType,
  searchable: boolean,
  sortItems: boolean
}


export const FilterDropdown = ({
  fixedName,
  manyOptionsName = 'Filtros',
  options,
  onSelectItem,
  icon,
  activatedIcon,
  alignList,
  searchable,
  sortItems
}: Props) => {
  
  let name = fixedName;
  
  const selectedItems: Array<OptionType | undefined> = Object.keys(options).reduce((filtered: Array<any>, nextId: string) => {
    if (options[nextId].selected) {
      filtered.push(options[nextId]);
    }
    return filtered;
  }, []);
  
  console.log('selectedItems');
  console.log(selectedItems);
  
  let currentIcon = icon;
  
  if (selectedItems.length === 1 && selectedItems[0]) {
    name = selectedItems[0].name;
    currentIcon = activatedIcon;
  }
  if (selectedItems.length > 1) {
    name = `${manyOptionsName} (${selectedItems.length}) ...`;
    currentIcon = activatedIcon;
  }
  
  return (
    <div>
      <ButtonWithDropdown 
        options={options}
        alignList={alignList}
        boxWidth={220}
        searchable={searchable}
        onSelectItem={onSelectItem}
        sortItems={sortItems}
      >
        {(onClick, isOpen) => (
          <FilterButton 
            text={name}
            iconComponent={currentIcon}
            onClick={onClick}
          />
        )}
      </ButtonWithDropdown>
    </div>
  )
}