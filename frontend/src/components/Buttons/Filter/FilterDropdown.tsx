import { useState } from 'react';

import style from './FilterDropdown.module.scss';
import quickIcon from '../../../assets/icons/quick.svg';

export const FilterDropdown = () => {
  // Control whether the dropdown is open or closed.
  const [ isOpen, setIsOpen ] = useState<boolean>(false);
  
  // Callback that will be executed if you click outside an element.
  const handleOutsideClick = () => {
    setIsOpen(false);
  }
  
  return (
    <button className={style.Button}>
      <div className={style.ContentWrapper}>
        <img src={quickIcon} alt="Pesquisa rápida"/>
        Caixa de Entrada
      </div>
    </button>
  )
}
