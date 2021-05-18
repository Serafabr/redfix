import { ButtonWithDropdown, FilterButton, AlignList } from '../../../../components/Buttons';
import { QuickFilter } from '../FilterButtons/QuickFilter';
import style from './FilterBar.module.scss';

type Props = {
  activatedFilter: any,
};

export const FilterBar = ({
  activatedFilter,
}: Props) => {
  
  const handleOneItemSelection = () => {};
  
  const handleManyItemsSelection = () => {};
  
  
  return (
    <div>
      <div className={style.RightDivider}>
        <QuickFilter 
          selected={activatedFilter.quickFilter}
          onSelectItem={handleOneItemSelection}
        />
      </div>
    </div>
  )
};
