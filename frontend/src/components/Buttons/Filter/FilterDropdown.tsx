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
// Util functions
import { getFilterButtonDisplay } from '../utils/filterDisplay';

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
  
  const [name, currentIcon] = getFilterButtonDisplay(options, fixedName, manyOptionsName, icon, activatedIcon);
  
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