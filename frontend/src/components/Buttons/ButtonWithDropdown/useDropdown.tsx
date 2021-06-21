// Third party
import { useState, useRef } from 'react';
// Custom Hooks
import { useClickOutsideListener } from '../../../hooks';

/*************************\
 * PropTypes
\*************************/

type Signature = () => ({ isOpen: boolean });

/*************************\
 * Custom Hook
\*************************/

export const useDropdown: Signature = () => {
  // Control whether the dropdown is open or closed.
  const [ isOpen, setIsOpen ] = useState<boolean>(false);
  
  // Callback that will be executed if you click outside an element.
  const handleOutsideClick = () => {
    setIsOpen(false);
  }
  
  // Hook that executes a callback if you click outside an element.
  const wrapperRef = useRef(null);
  useClickOutsideListener(wrapperRef, handleOutsideClick);
  
  return { isOpen };
}