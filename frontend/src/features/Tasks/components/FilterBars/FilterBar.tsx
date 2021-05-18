import { ButtonWithDropdown, FilterButton, AlignList } from '../../../../components/Buttons';
import { QuickFilter } from '../FilterButtons/QuickFilter';
import style from './FilterBar.module.scss';

type Props = {
  filterState: any,
};

export const FilterBar = ({
  filterState,
}: Props) => {
  
  const { quickFilter, setQuickFilter } = filterState;
  
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
        <QuickFilter 
          selected={quickFilter}
          onSelectItem={handleOneItemSelection(quickFilter, setQuickFilter)}
        />
      </div>
    </div>
  )
};
