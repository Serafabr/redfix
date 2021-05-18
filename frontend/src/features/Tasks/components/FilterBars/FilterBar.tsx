import { ButtonWithDropdown, FilterButton, AlignList } from '../../../../components/Buttons';
import { QuickFilter } from '../FilterButtons/QuickFilter';
import style from './FilterBar.module.scss';

export const FilterBar = () => {
  return (
    <div>
      <div className={style.RightDivider}>
        <QuickFilter />
      </div>
    </div>
  )
};
