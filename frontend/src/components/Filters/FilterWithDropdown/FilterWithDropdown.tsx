// Components
import { ButtonWithDropdown, } from '../../Buttons';
import { FilterButton } from '../FilterButton/FilterButton';
import { 
  OnSelectItemType, 
  OptionsType, 
} from '../../SelectBox/SelectBox';
// CSS
import style from './FilterWithDropdown.module.scss';
// Util functions
import { getFilterButtonDisplay } from '../../Buttons/utils/filterDisplay';
//Types
import { AlignListType } from '../../Buttons/ButtonWithDropdown/_types';
import { BasicIconProps, SizeType, ColorType } from '../../Icons/_types';

/*************************\
 * PropTypes
\*************************/

type Props = {
  fixedName: string,
  manyOptionsName?: string,
  options: OptionsType,
  onSelectItem: OnSelectItemType,
  icon?: React.ComponentType<BasicIconProps> | null,
  iconSize?: SizeType,
  iconColor?: ColorType,
  activatedIconColor?: ColorType,
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
  iconSize = {},
  iconColor = {},
  activatedIconColor = {},
  alignList = AlignListType.Left,
  searchable = false,
  sortItems = true
}: Props) => {
  
  const [name, currentColor] = getFilterButtonDisplay(options, fixedName, manyOptionsName, iconColor, activatedIconColor);
  
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
            iconComponent={icon}
            {...iconSize}
            {...currentColor}
            onClick={onClick}
          />
        )}
      </ButtonWithDropdown>
    </div>
  )
}