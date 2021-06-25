// Components
import { AddSelectBox, } from '../../Buttons';
import { FilterButton } from '../FilterButton/FilterButton';
import { 
  OnSelectItemType, 
  OptionsType, 
} from '../../SelectBox/_types';
// CSS
import style from './FilterWithDropdown.module.scss';
// Util functions
import { getFilterButtonDisplay } from '../utils/filterDisplay';
//Types
import { AlignListType } from '../../Buttons/AddSelectBox/_types';
import { BasicIconProps, SizeType, ColorType } from '../../Icons/_types';

/*************************\
 * PropTypes
\*************************/

type Props = {
  fixedName: string,
  manyOptionsName?: string,
  options: OptionsType,
  onSelectItem: OnSelectItemType,
  icon?: string,
  activatedIcon?:string,
  iconWidth?: number,
  alignList?: AlignListType,
  searchable?: boolean,
  sortItems?: boolean
};

/*************************\
 * FilterDropdown Component
\*************************/

export const FilterWithDropdown = ({
  fixedName,
  manyOptionsName = 'Filtros',
  options,
  onSelectItem,
  icon,
  activatedIcon,
  iconWidth,
  alignList = AlignListType.Left,
  searchable = false,
  sortItems = true
}: Props) => {
  
  const [name, currentIcon, isActive] = getFilterButtonDisplay(options, fixedName, manyOptionsName, icon, activatedIcon);
  
  return (
    <div>
      <AddSelectBox 
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
            iconWidth={iconWidth}
            isActive={isActive}
            onClick={onClick}
          />
        )}
      </AddSelectBox>
    </div>
  )
}