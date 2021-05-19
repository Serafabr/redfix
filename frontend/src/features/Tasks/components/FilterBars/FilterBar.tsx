import { ButtonWithDropdown, FilterButton, AlignListType } from '../../../../components/Buttons';
import { FilterDropdown } from '../../../../components/Buttons';

import style from './FilterBar.module.scss';

import quickIcon from '../../../../assets/icons/quick.svg';

type Props = {
  filterState: any,
  filterOptions: any,
};

export const FilterBar = ({
  filterState,
  filterOptions,
}: Props) => {
  
  const { quickFilterState, setQuickFilterState } = filterState;
  const { quickFilterOptions } = filterOptions;
  
  const handleOneItemSelection = (filterState: any, setFilter: any) => (itemId: string) => {
    setFilter({
      [itemId]: true,
    });
  };
  
  const handleManyItemsSelection = (filterState: any, setFilter: any) => (itemId: string) => {
    setFilter({
      ...filterState,
      [itemId]: (typeof filterState[itemId] === "boolean" ? !filterState[itemId] : true),
    });
  };
  
  
  return (
    <div>
      <div className={style.RightDivider}>
        <FilterDropdown 
          fixedName="Filtro Rápido"
          options={quickFilterOptions}
          onSelectItem={handleOneItemSelection(quickFilterState, setQuickFilterState)}
          icon={quickIcon}
          alignList={AlignListType.Left}
          searchable={true}
        />
      </div>
    </div>
  )
};
