// Third party libraries
import { useState, useCallback } from 'react';
// Components
import { FilterButton, AlignListType } from '../../../../components/Buttons';
import { FilterDropdown } from '../../../../components/Buttons';
// Utils
import { 
  quickInitial,
  teamsInitial,
  statusInitial,
} from './config/initialFilterStates';
// Icons
import quickIcon from '../../../../assets/icons/quick.svg';
import quickOrangeIcon from '../../../../assets/icons/quick-orange.svg';
import teamsIcon from '../../../../assets/icons/users.svg';
import teamPurpleIcon from '../../../../assets/icons/users-purple.svg';
import statusIcon from '../../../../assets/icons/list.svg';
import statusGreenIcon from '../../../../assets/icons/list-green.svg';
import bookmarkIcon from '../../../../assets/icons/bookmark.svg';
import bookmarkCheckedIcon from '../../../../assets/icons/bookmark-checked.svg';
import filterIcon from '../../../../assets/icons/filter-white.svg';
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
          <FilterDropdown 
            fixedName="Filtro Rápido"
            options={quickFilter}
            onSelectItem={handleOneItemSelection(quickFilter, setQuickFilter)}
            icon={quickIcon}
            iconHeight={16}
            activatedIcon={quickOrangeIcon}
            alignList={AlignListType.Left}
            searchable={true}
            sortItems={false}
          />
        </div>
      </div>
      <div className={style.FilterContainer}>
        <FilterDropdown 
          fixedName="Equipes"
          manyOptionsName="Equipes"
          options={teamsFilter}
          onSelectItem={handleManyItemsSelection(teamsFilter, setTeamsFilter)}
          icon={teamsIcon}
          iconHeight={17}
          activatedIcon={teamPurpleIcon}
          alignList={AlignListType.Left}
          searchable={true}
          sortItems={true}
        />
      </div>
      <div className={style.FilterContainer}>
        <FilterDropdown 
          fixedName="Status"
          manyOptionsName="Status"
          options={statusFilter}
          onSelectItem={handleManyItemsSelection(statusFilter, setStatusFilter)}
          icon={statusIcon}
          iconHeight={16}
          activatedIcon={statusGreenIcon}
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
          iconComponent={bookmark ? bookmarkCheckedIcon : bookmarkIcon}
        />
      </div>
      <div className={`${style.FilterContainer} ${style.LastFilter}`}>
        <FilterButton 
          onClick={() => {console.log('Clicked!')}}
          iconComponent={filterIconCancelRed}
        />
      </div>
    </div>
  )
};
