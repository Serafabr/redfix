import { useEffect, RefObject } from 'react';

/*************************\
 * #Typescript TYPES
\*************************/

export type refProps = RefObject<HTMLElement>;

export type callbackProps = () => void;

export type eventProps = MouseEvent; // Type from the DOM

/*************************\
 * #useClickOutsideListener Component
\*************************/

export const useClickOutsideListener = (ref: refProps, callback: callbackProps) => {
  // Create a custom hook
  useEffect(() => {
    // Alert if clicked on outside an element
    const handleClickOutside = (event: eventProps) => {
      if (ref.current && ! ref.current.contains(event.target as HTMLElement)) {
        callback();
      }
    }
    
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    
    // Unbind the event listener on clean up
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [ref])
  
}