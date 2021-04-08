import { useState, useRef } from 'react';
import classNames from 'classnames';

import { useClickOutsideListener } from '../../../hooks';

type Props = {
};

export const useDropdown = () => {
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
  
  
  return { isOpen };
}