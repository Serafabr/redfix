import { useState, useRef } from 'react';

import style from './FilterDropdown.module.scss';
import quickIcon from '../../../assets/icons/quick.svg';
import { SelectBox } from '../../SelectBox/SelectBox';

const items = [
  {id: '1',name: "Customizar tabelaaaaaaaaaaaaaaaaaaa", selected: true},
  {id: '2',name: "Exportar para CSV", selected: false},
  {id: '3',name: "Exportar para Excel", selected: false},
  {id: '4',name: "Exportar para PDF", selected: false},
  {id: '5',name: "Customizar tabela", selected: false},
  {id: '6',name: "Exportar para CSV", selected: false},
  {id: '6',name: "Exportar para Excel", selected: false},
  {id: '6',name: "Exportar para PDF", selected: false},
];

export const FilterDropdown = () => {
  // Control whether the dropdown is open or closed.
  const [ isOpen, setIsOpen ] = useState<boolean>(false);
  
  // Callback that will be executed if you click outside an element.
  const handleButtonOnClick = () => {
    setIsOpen(!isOpen);
  }
  
  // Hook that executes a callback if you click outside an element.
  const wrapperRef = useRef(null);
  
  return (
    <div className={style.FilterDropdown} ref={wrapperRef}>
      <button className={`${style.Button} ${isOpen && style.Opened}`} onClick={handleButtonOnClick}>
        <div className={style.ContentWrapper}>
          <img src={quickIcon} alt="Pesquisa rápida"/>
          Caixa de Entrada
        </div>
      </button>
      {isOpen && (
        <SelectBox 
          setIsOpen={setIsOpen}
          items={items}
          clickOutsideRef={wrapperRef}
          onSelectItem={(id) => {console.log(id)}}
        />
      )}
    </div>
  )
}
