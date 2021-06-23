// Third party libraries
import { useState, useCallback } from 'react';
// Components
import { FilterButton, FilterWithDropdown } from '../../../../components/Filters';
import { AlignListType } from '../../../../components/Buttons/AddSelectBox/_types';
// Utils
import { 
  quickInitial,
  teamsInitial,
  statusInitial,
} from './config/initialFilterStates';
// Icons
import { Quick } from '../../../../components/Icons';
import quickIcon from '../../../../assets/icons/quick.svg';
import { Users } from '../../../../components/Icons';
import teamsIcon from '../../../../assets/icons/users.svg';
import teamPurpleIcon from '../../../../assets/icons/users-purple.svg';
import { List } from '../../../../components/Icons';
import statusIcon from '../../../../assets/icons/list.svg';
import statusGreenIcon from '../../../../assets/icons/list-green.svg';
import { Bookmark as BookmarkIcon } from '../../../../components/Icons';
import bookmarkIcon from '../../../../assets/icons/bookmark.svg';
import bookmarkCheckedIcon from '../../../../assets/icons/bookmark-checked.svg';
import { FilterWhite } from '../../../../components/Icons';
import filterIcon from '../../../../assets/icons/filter-white.svg';
import { FilterCancel } from '../../../../components/Icons';
import filterIconCancel from '../../../../assets/icons/filter-cancel.svg';
import filterIconCancelRed from '../../../../assets/icons/filter-cancel-red.svg';
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
            icon={Quick}
            iconSize={{ width: 16, height: 16 }}
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
          icon={Users}
          iconSize={{ width: 17, height: 17 }}
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
          icon={List}
          iconSize={{ width: 16, height: 16 }}
          alignList={AlignListType.Left}
          searchable={false}
          sortItems={true}
        />
      </div>
      <div className={style.FilterContainer}>
        <FilterButton 
          onClick={() => {console.log('Clicked!')}}
          iconComponent={FilterWhite}
        />
      </div>
      <div className={`${style.FilterContainer} ${style.FilterAtEnd}`}>
        <FilterButton 
          onClick={handleSetBookmark}
          iconComponent={BookmarkIcon}
        />
      </div>
      <div className={`${style.FilterContainer} ${style.LastFilter}`}>
        <FilterButton 
          onClick={() => {console.log('Clicked!')}}
          iconComponent={FilterCancel}
        />
      </div>
    </div>
  )
};
