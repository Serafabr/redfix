import { useState, useRef, ReactNode, Component, FunctionComponent, ReactElement } from 'react';

// Style
import style from './ButtonWithDropdown.module.scss';
// Hooks
import { useClickOutsideListener } from '../../../hooks';

type Item = {
  id: string,
  name: string,
};

type ListItem = Array<Item>;

type ButtonWithDropdownProps = {
  button: ReactElement,
  openButton: ReactElement,
  listItems: ListItem,
};


export const ButtonWithDropdown = ({ 
  button: Button, 
  openButton: OpenButton,
  listItems, 
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
      <div onClick={handleOnClick} style={{ display: "inline-block" }}>
        {isOpen ? (
          OpenButton
        ) : (
          Button
        )}
      </div>
      {isOpen && (
        <div className={style.ListWrapper}>
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
