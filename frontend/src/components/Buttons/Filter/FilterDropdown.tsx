// Components
import { 
  ButtonWithDropdown, 
  FilterButton, 
  AlignListType 
} from '../';
import { 
  OnSelectItemType, 
  OptionsType, 
  OptionType 
} from '../../SelectBox/SelectBox';
// CSS
import style from './Filter.module.scss';

/*************************\
 * PropTypes
\*************************/

type Props = {
  fixedName: string,
  manyOptionsName?: string,
  options: OptionsType,
  onSelectItem: OnSelectItemType,
  icon: string,
  iconHeight?: number,
  activatedIcon: string,
  alignList: AlignListType,
  searchable: boolean,
  sortItems: boolean
};

/*************************\
 * FilterDropdown Component
\*************************/

export const FilterDropdown = ({
  fixedName,
  manyOptionsName = 'Filtros',
  options,
  onSelectItem,
  icon,
  iconHeight,
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
            iconHeight={iconHeight}
            onClick={onClick}
          />
        )}
      </ButtonWithDropdown>
    </div>
  )
}