import { useEffect, RefObject } from 'react';

/*************************\
 * #Typescript TYPES
\*************************/

export type RefProps = RefObject<HTMLElement>;

export type CallbackProps = (width: number) => void;

/*************************\
 * #useClickOutsideListener Component
\*************************/

export const useResizeListener = (ref: RefProps, callback: CallbackProps) => {
  // Create a custom hook
  useEffect(() => {
    // Handle when the user resizes the window
    const handleResizeWindow = () => {
      console.log("Resizing");
      callback(ref.current ? ref.current.offsetWidth : 0);
    }; 
    
    // Bind the event listener
    window.addEventListener("resize", handleResizeWindow);
    
    // Unbind the event listener on clean up
    return () => {
      window.removeEventListener("resize", handleResizeWindow);
    }
  }, [ref])
  
}