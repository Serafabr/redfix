import { useRef } from 'react';
import { useClickOutsideListener } from '../../hooks';
import style from './SelectBox.module.scss';

import { Input } from '../Inputs'
import blueCheckIcon from '../../assets/icons/blue-check.svg';

type Props = {
  setIsOpen: (isOpen: boolean) => void,
};

export const SelectBox = ({
  setIsOpen
}: Props) => {
   
  // Callback that will be executed if you click outside an element.
  const handleOutsideClick = () => {
    setIsOpen(false);
  }
  
  // Hook that executes a callback if you click outside an element.
  const wrapperRef = useRef(null);
  useClickOutsideListener(wrapperRef, handleOutsideClick);
  
  return (
    <div className={style.SelectBox} ref={wrapperRef}>
      <div className={style.ListWrapper}>
        <div className={style.InputWrapper}>
          <Input 
            inputClassName={style.SearchInput} 
            error={false} 
            placeholder="Pesquisar..." 
          />
        </div>
        <li className={style.List}>
          <ul className={`${style.Item} ${style.Selected}`}><span className={style.TextItem}>Customizar tabela</span><img src={blueCheckIcon} alt="Selected" /></ul>
          <ul className={`${style.Item} ${style.Selected}`}>Exportar para CSV<img src={blueCheckIcon} alt="Selected" /></ul>
          <ul className={style.Item}>Exportar para Excel</ul>
          <ul className={style.Item}>Exportar PDF</ul>
          <ul className={style.Item}>Customizar tabela</ul>
          <ul className={style.Item}>Exportar para CSV</ul>
          <ul className={style.Item}>Exportar para Excel</ul>
          <ul className={style.Item}>Exportar PDF</ul>
        </li>
      </div>
    </div>
  )
}
