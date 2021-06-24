import { Button } from '../../Buttons';

import style from './QuickSearch.module.scss';
import { Search } from '../../Icons';
import { Dropdown } from '../../Inputs';
import { Input } from '../../Inputs';
import { AddSelectBox } from '../../Buttons';
import { useState } from 'react';

import { OptionsType } from '../../SelectBox/SelectBox';
import { OnSelectItemType } from '../../SelectBox/SelectBox';

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
          boxWidth={180}
        >
          {(onClick, isOpen)=> (
            <Dropdown buttonStyle={{ borderRadius: "4px 0 0 4px", zIndex: "10" }} value={options[searchEntity].name} isOpen={isOpen} handleOnClick={onClick} />
          )}
        </AddSelectBox>
      </div>
      <div className={style.InputWrapper}>
        <Input />
      </div>
      <Button iconComponent={Search} buttonStyle={{ borderRadius: "0 4px 4px 0" }} />
    </div>
  )
}
