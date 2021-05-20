import { ButtonWithDropdown, FilterButton, AlignListType } from '../../../../components/Buttons';
import { FilterDropdown } from '../../../../components/Buttons';

import style from './FilterBar.module.scss';

import quickIcon from '../../../../assets/icons/quick.svg';

type Props = {
  filterState: any,
};

export const FilterBar = ({
  filterState,
}: Props) => {
  
  const { quickFilter, setQuickFilter } = filterState;
  
  const handleOneItemSelection = (filterState: any, setFilter: any) => (itemId: string) => {
    const newFilterState: any = {};
    filterState.forEach((id: string) => {
      newFilterState[id] = { ...filterState[id], selected: id === itemId }
    })
    
    setFilter(newFilterState);
  };
  
  const handleManyItemsSelection = (filterState: any, setFilter: any) => (itemId: string) => {
    const newFilterState: any = {
      ...filterState,
      [itemId]: !filterState[itemId],
    };
    
    setFilter(newFilterState);
  };
  
  
  return (
    <div>
      <div className={style.RightDivider}>
        <FilterDropdown 
          fixedName="Filtro Rápido"
          options={quickFilter}
          onSelectItem={handleOneItemSelection(quickFilter, setQuickFilter)}
          icon={quickIcon}
          alignList={AlignListType.Left}
          searchable={true}
        />
      </div>
    </div>
  )
};
