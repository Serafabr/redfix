import { useState } from 'react';
import style from './Dropdown.module.scss';
import ArrowDown from '../../../assets/icons/arrow-down.svg';

export const Dropdown = () => {
  const [ isOpen, setIsOpen ] = useState<boolean>(false);
  
  const handleOnClick = () => {
    setIsOpen((prevState) => (!prevState));
  };
  
  return (
    <div className={style.Dropdown}>
      <button className={style.DropdownButton} onClick={handleOnClick}>
        <div>Ordens de Serviço</div>
        <div className={style.ButtonDownArrow}>
          <img src={ArrowDown} alt="Ícone dropdown"/>
        </div>
      </button>
      {isOpen && (
        <div className={style.ListWrapper}>
          <li className={style.List}>
            <ul className={style.Item}>Ordens de Serviço</ul>
            <ul className={style.Item}>Equipamentos</ul>
            <ul className={style.Item}>Edifícios</ul>
            <ul className={style.Item}>Contratos</ul>
          </li>
        </div>
      )}
    </div>
  )
}
