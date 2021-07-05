// Components
import { AddSelectBox, } from '../../SelectBox';
import { FilterButton } from '../FilterButton/FilterButton';
import { handleOneItemSelection, handleManyItemsSelection } from '../../SelectBox';
// CSS
import style from './FilterWithDropdown.module.scss';
// Util functions
import { getFilterButtonDisplay } from '../utils/filterDisplay';
//Types
import { AlignListType } from '../../SelectBox/_types';
import { 
  OnSelectItemType, 
  OptionsType, 
} from '../../SelectBox/_types';

/*************************\
 * PropTypes
\*************************/

type Props = {
  fixedName: string,
  manyOptionsName?: string,
  options: OptionsType,
  filterArray?: Array<string>,
  setFilter: React.Dispatch<Array<string>>,
  manySelection?: boolean,
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
  filterArray = [],
  setFilter,
  manySelection = false,
  icon,
  activatedIcon,
  iconWidth,
  alignList = AlignListType.Left,
  searchable = false,
  sortItems = true
}: Props) => {
  
  const [name, currentIcon, isActive] = getFilterButtonDisplay(options, filterArray, fixedName, manyOptionsName, icon, activatedIcon);
  
  return (
    <div>
      <AddSelectBox 
        options={options}
        selectionArray={filterArray}
        alignList={alignList}
        boxWidth={220}
        searchable={searchable}
        onSelectItem={
          manySelection ? 
            handleManyItemsSelection(filterArray, setFilter) :
            handleOneItemSelection(setFilter)
        }
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