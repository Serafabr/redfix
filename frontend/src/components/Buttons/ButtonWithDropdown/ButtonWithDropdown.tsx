import { useState, useRef, ReactNode, Component, FunctionComponent, ReactElement } from 'react';

// Style
import style from './ButtonWithDropdown.module.scss';
// Hooks
import { useClickOutsideListener } from '../../../hooks';
import { SelectBox } from '../../SelectBox/SelectBox';

export enum AlignList { Left, Right };

type Item = {
  id: string,
  name: string,
};

type ListItem = Array<Item>;

type ButtonWithDropdownProps = {
  children: (onClick: () => void, isOpen: boolean) => ReactElement,
  listItems: ListItem,
  alignList?: AlignList
  boxWidth?: number,
};


export const ButtonWithDropdown = ({ 
  children,
  listItems, 
  alignList = AlignList.Left,
  boxWidth = 160,
}: ButtonWithDropdownProps) => {
  // Control whether the dropdown is open or closed.
  const [ isOpen, setIsOpen ] = useState<boolean>(false);
  
  // Hook that executes a callback if you click outside an element.
  const wrapperRef = useRef(null);
  
  const handleOnClick = () => {
    setIsOpen((prevState) => (!prevState));
  };
  
  // Render
  return (
    <div className={style.Dropdown} ref={wrapperRef}>
      {children(handleOnClick, isOpen)}
      {isOpen && (
        <div className={`${style.ListWrapper} ${alignList === AlignList.Right ? style.Right : style.Left}`} style={{ width: `${boxWidth}px` }}>
          <SelectBox 
            setIsOpen={setIsOpen}
            items={listItems}
            clickOutsideRef={wrapperRef}
          />
        </div>
      )}
    </div>
  )
}
