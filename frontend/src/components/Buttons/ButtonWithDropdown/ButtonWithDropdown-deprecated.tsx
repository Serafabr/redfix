import { useState, useRef, ReactNode, Component, FunctionComponent, ReactElement } from 'react';

// Style
import style from './ButtonWithDropdown.module.scss';
// Hooks
import { useClickOutsideListener } from '../../../hooks';

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
};


export const ButtonWithDropdown = ({ 
  children,
  listItems, 
  alignList = AlignList.Left,
}: ButtonWithDropdownProps) => {
  // Control whether the dropdown is open or closed.
  const [ isOpen, setIsOpen ] = useState<boolean>(false);
  
  // Callback that will be executed if you click outside an element.
  const handleOutsideClick = () => {
    setIsOpen(false);
  }
  
  // Hook that executes a callback if you click outside an element.
  const wrapperRef = useRef(null);
  useClickOutsideListener(wrapperRef, handleOutsideClick);
  
  const handleOnClick = () => {
    setIsOpen((prevState) => (!prevState));
  };
  
  // Render
  return (
    <div className={style.Dropdown} ref={wrapperRef}>
      {children(handleOnClick, isOpen)}
      {isOpen && (
        <div className={`${style.ListWrapper} ${alignList === AlignList.Right ? style.Right : style.Left}`}>
          <li className={style.List}>
            {listItems.map((item: Item) => (
              <ul 
                key={item.id} 
                id={item.id} 
                className={style.Item}
              >
                {item.name}
              </ul>
            ))}
          </li>
        </div>
      )}
    </div>
  )
}
