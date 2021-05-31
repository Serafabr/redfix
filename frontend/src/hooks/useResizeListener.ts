import { useEffect, RefObject } from 'react';

/*************************\
 * #Typescript TYPES
\*************************/

export type refProps = RefObject<HTMLElement>;

export type eventProps = MouseEvent; // Type from the DOM

/*************************\
 * #useClickOutsideListener Component
\*************************/

export const useResizeListener = (ref: refProps) => {
  // Create a custom hook
  useEffect(() => {
    // Handle when the user resizes the window
    const handleResizeWindow = () => ( ref.current ? ref.current.offsetWidth : 0 );
    
    // Bind the event listener
    document.addEventListener("resize", handleResizeWindow);
    
    // Unbind the event listener on clean up
    return () => {
      document.removeEventListener("resize", handleResizeWindow);
    }
  }, [ref])
  
}