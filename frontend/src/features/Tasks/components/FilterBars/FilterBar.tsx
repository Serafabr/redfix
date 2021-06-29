// Third party libraries
import { useState, useCallback } from 'react';
// Components
import { FilterButton, FilterWithDropdown } from '../../../../components/Filters';
import { AlignListType } from '../../../../components/SelectBox/_types';
// Utils
import { 
  quickInitial,
  teamsInitial,
  statusInitial,
} from './config/initialFilterStates';
// Icons
import { Quick } from '../../../../components/Icons';
import quickIcon from '../../../../assets/icons/quick.svg';
import quickIconActive from '../../../../assets/icons/filters/quick-color.svg';
import { Users } from '../../../../components/Icons';
import teamsIcon from '../../../../assets/icons/users.svg';
import teamIconActive from '../../../../assets/icons/filters/users-color.svg';
import { List } from '../../../../components/Icons';
import statusIcon from '../../../../assets/icons/list.svg';
import statusIconActive from '../../../../assets/icons/filters/list-color.svg';
import { Bookmark as BookmarkIcon } from '../../../../components/Icons';
import bookmarkIcon from '../../../../assets/icons/bookmark.svg';
import bookmarkIconActive from '../../../../assets/icons/bookmark-checked.svg';
import { FilterWhite } from '../../../../components/Icons';
import filterIcon from '../../../../assets/icons/filter-white.svg';
import { FilterCancel } from '../../../../components/Icons';
import filterIconCancel from '../../../../assets/icons/filter-cancel.svg';
import filterIconCancelActive from '../../../../assets/icons/filter-cancel-red.svg';
import { handleOptionSelection } from './config/handleOptionSelection';
// CSS
import style from './FilterBar.module.scss';

/*************************\
 * PropTypes
\*************************/

type Props = {
  filterState: any,
};

/*************************\
 * SelectBox Component
\*************************/

export const FilterBar = ({
  filterState,
}: Props) => {
  
  // State of all filters
  const [ quickFilter, setQuickFilter ] = useState(quickInitial);
  const [ teamsFilter, setTeamsFilter ] = useState(teamsInitial);
  const [ statusFilter, setStatusFilter ] = useState(statusInitial);
  const [ bookmark, setBookmark ] = useState(false);
  
  const handleSetBookmark = useCallback(
    () => {
      setBookmark(!bookmark);
    },
    [bookmark],
  )
  
  // Functions to handle item selection
  const [ handleOneItemSelection, handleManyItemsSelection ] = handleOptionSelection();
  
  // Render
  return (
    <div className={style.FilterBar}>
      <div className={style.FilterContainer}>
        <div className={style.RightDivider}>
          <FilterWithDropdown 
            fixedName="Filtro Rápido"
            options={quickFilter}
            onSelectItem={handleOneItemSelection(quickFilter, setQuickFilter)}
            icon={quickIcon}
            activatedIcon={quickIconActive}
            iconWidth={17}
            alignList={AlignListType.Left}
            searchable={true}
            sortItems={false}
          />
        </div>
      </div>
      <div className={style.FilterContainer}>
        <FilterWithDropdown 
          fixedName="Equipes"
          manyOptionsName="Equipes"
          options={teamsFilter}
          onSelectItem={handleManyItemsSelection(teamsFilter, setTeamsFilter)}
          icon={teamsIcon}
          iconWidth={17}
          alignList={AlignListType.Left}
          searchable={true}
          sortItems={true}
        />
      </div>
      <div className={style.FilterContainer}>
        <FilterWithDropdown 
          fixedName="Status"
          manyOptionsName="Status"
          options={statusFilter}
          onSelectItem={handleManyItemsSelection(statusFilter, setStatusFilter)}
          icon={statusIcon}
          iconWidth={17}
          alignList={AlignListType.Left}
          searchable={false}
          sortItems={true}
        />
      </div>
      <div className={style.FilterContainer}>
        <FilterButton 
          onClick={() => {console.log('Clicked!')}}
          iconComponent={filterIcon}
        />
      </div>
      <div className={`${style.FilterContainer} ${style.FilterAtEnd}`}>
        <FilterButton 
          onClick={handleSetBookmark}
          iconComponent={bookmarkIcon}
        />
      </div>
      <div className={`${style.FilterContainer} ${style.LastFilter}`}>
        <FilterButton 
          onClick={() => {console.log('Clicked!')}}
          iconComponent={filterIconCancel}
        />
      </div>
    </div>
  )
};
