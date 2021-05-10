import { useState, useRef, ReactNode, Component, FunctionComponent } from 'react';
import classNames from 'classnames';

// Style
import style from './ButtonWithDropdown.module.scss';
// Hooks
import { useClickOutsideListener } from '../../../hooks';

type Item = {
  id: string,
  name: string,
};

type ListItem = Array<Item>;

type ButtonProps = {
  className: string,
  onClick: () => void,
  style: string,
}

type ButtonWithDropdownProps = {
  Button: FunctionComponent<ButtonProps>,
  listItems: ListItem,
  buttonStyle?: any,
};


export const ButtonWithDropdown = ({ 
  Button, 
  listItems, 
  buttonStyle 
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
      <Button className={dropdownButtonClasses} onClick={handleOnClick} style={buttonStyle} />
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
