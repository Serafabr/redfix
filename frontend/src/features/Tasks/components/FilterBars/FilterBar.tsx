// Third party libraries
import { useState } from 'react';
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
import bookmarkIcon from '../../../../assets/icons/bookmark.svg';
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
  
  // Functions to handle item selection
  const [ handleOneItemSelection, handleManyItemsSelection ] = handleOptionSelection();
  
  // Render
  return (
    <div>
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
      <FilterButton 
         onClick={() => {console.log('Clicked!')}}
         iconComponent={bookmarkIcon}
      />
    </div>
  )
};
