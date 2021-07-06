import { useState } from 'react';
// Components
import { Button } from '../../Buttons';
import { Search } from '../../Icons';
import { DropdownButton, Input } from '../../Inputs';
import { AddSelectBox } from '../../SelectBox';
// Style
import style from './QuickSearch.module.scss';
// Types
import { IdType, OptionsType, OnSelectItemType } from '../../SelectBox/_types';


/*************************\
 * Configuration
\*************************/

const options: OptionsType = {
  task: { name: "Tarefa" },
  projects: { name: "Projeto" },
  plans: { name: "Plano de Manutenção" },
  monitors: { name: "Monitor" },
  facilities: { name: "Edifício" },
  appliances: { name: "Equipamento" },
}

/*************************\
 * PropTypes
\*************************/

type Props = {};

/*************************\
 * QuickSearch Component
\*************************/

export const QuickSearch = () => {
  
  const [ selectionArray, setSelectionArray ] = useState<Array<IdType>>(['task'])
  
  const handleSelectItem: OnSelectItemType = (id: IdType) => {
    setSelectionArray([id]);
  };
  
  return (
    <div className={style.QuickSearch}>
      <div className={style.ButtonWrapper}>
        <AddSelectBox
          options={options}
          selectionArray={selectionArray}
          onSelectItem={handleSelectItem}
          boxWidth={190}
          sortItems={true}
        >
          {(onClick, isOpen)=> (
            <DropdownButton buttonStyle={{ borderRadius: "4px 0 0 4px", zIndex: "10" }} addShadow={false} value={options[selectionArray[0]]?.name} isOpen={isOpen} handleOnClick={onClick} />
          )}
        </AddSelectBox>
      </div>
      <div className={style.InputWrapper}>
        <Input addShadow={false} />
      </div>
      <Button iconComponent={Search} buttonStyle={{ borderRadius: "0 4px 4px 0" }} />
    </div>
  )
}
