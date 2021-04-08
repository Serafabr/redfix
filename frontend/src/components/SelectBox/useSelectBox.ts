import { useRef } from 'react';
import { useClickOutsideListener } from '../../hooks';

type SetIsOpen = (isOpen: boolean) => void;

export const useSelectBox = (setIsOpen: SetIsOpen) => {
  // Callback that will be executed if you click outside an element.
  const handleOutsideClick = () => {
    setIsOpen(false);
  }
  
  // Hook that executes a callback if you click outside an element.
  const wrapperRef = useRef(null);
  useClickOutsideListener(wrapperRef, handleOutsideClick);
};