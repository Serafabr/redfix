import { useState } from 'react';
// Components
import { Button } from '../../Buttons';
import { Search } from '../../Icons';
import { DropdownButton, Input } from '../../Inputs';
import { AddSelectBox } from '../../Buttons';
// Style
import style from './QuickSearch.module.scss';
// Types
import { OptionsType, OnSelectItemType } from '../../SelectBox/_types';


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
  
  const [ searchEntity, setSearchEntity ] = useState('task')
  
  const handleSelectItem: OnSelectItemType = (id) => {
    setSearchEntity(id);
  };
  
  return (
    <div className={style.QuickSearch}>
      <div className={style.ButtonWrapper}>
        <AddSelectBox
          options={options}
          onSelectItem={handleSelectItem}
          boxWidth={190}
        >
          {(onClick, isOpen)=> (
            <DropdownButton buttonStyle={{ borderRadius: "4px 0 0 4px", zIndex: "10" }} addShadow={false} value={options[searchEntity].name} isOpen={isOpen} handleOnClick={onClick} />
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
