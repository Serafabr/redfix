import { FilterButton, AlignListType } from '../../../../components/Buttons';
import { FilterDropdown } from '../../../../components/Buttons';

import style from './FilterBar.module.scss';

import quickIcon from '../../../../assets/icons/quick.svg';
import quickOrangeIcon from '../../../../assets/icons/quick-orange.svg';
import bookmarkIcon from '../../../../assets/icons/bookmark.svg'
import { handleOptionSelection } from './config/handleOptionSelection';
import { 
  quickInitial,
  teamsInitial,
  statusInitial,
 } from './config/initialFilterStates';

 import { useState } from 'react';

type Props = {
  filterState: any,
};

export const FilterBar = ({
  filterState,
}: Props) => {
  
  const [ quickFilter, setQuickFilter ] = useState(quickInitial);
  const [ teamsFilter, setTeamsFilter ] = useState(teamsInitial);
  const [ statusFilter, setStatusFilter ] = useState(statusInitial);
  
  const [ handleOneItemSelection, handleManyItemsSelection ] = handleOptionSelection();
  
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
