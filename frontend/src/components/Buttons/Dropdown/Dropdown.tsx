import { useState, useRef, RefObject } from 'react';
import classNames from 'classnames';
// Components
import ArrowDown from '../../../assets/icons/arrow-down.svg';
// Style
import style from './Dropdown.module.scss';
import { useOutsideHandler } from '../../../hooks';


export const Dropdown = () => {
  // Control whether the dropdown is open or closed.
  const [ isOpen, setIsOpen ] = useState<boolean>(false);
  
  // Callback that will be executed if you click outside an element.
  const handleOutsideClick = () => {
    setIsOpen(false);
  }
  
  // Hook that execute a callback if you click outside an element.
  const wrapperRef = useRef(null);
  useOutsideHandler(wrapperRef, handleOutsideClick);
  
  const handleOnClick = () => {
    setIsOpen((prevState) => (!prevState));
  };
  
  // Change classes for the button, if the dropdown is open.
  const dropdownButtonClasses = classNames(
    style.DropdownButton,
    {
      [style.Opened]: isOpen,
    }
  );
  
  // Render
  return (
    <div className={style.Dropdown} ref={wrapperRef}>
      <button className={dropdownButtonClasses} onClick={handleOnClick}>
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