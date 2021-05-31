import { useEffect, RefObject } from 'react';
import { getNumberOfTabs } from '../components/Tabs/utils/tabs';

/*************************\
 * #Typescript TYPES
\*************************/

export type RefProps = RefObject<HTMLElement>;

export type CallbackProps = (width: number) => void;

/*************************\
 * #useClickOutsideListener Component
\*************************/

export const useResizeTabsListener = (setNumberOfTabs: CallbackProps, currentNumberOfTabs: number, tabsPerSize: any, tabsLength: number) => {
  // Create a custom hook
  useEffect(() => {
    // Handle when the user resizes the window
    const handleResizeWindow = () => {
      
      const numberOfTabs = getNumberOfTabs(window.innerWidth, tabsPerSize, tabsLength);
      
      // Just update number of tabs if it changes.
      if (numberOfTabs != currentNumberOfTabs) {
        setNumberOfTabs(numberOfTabs);
      }
    }; 
    
    // Bind the event listener
    window.addEventListener("resize", handleResizeWindow);
    
    // Unbind the event listener on clean up
    return () => {
      window.removeEventListener("resize", handleResizeWindow);
    }
  }, [window.innerWidth, tabsPerSize, tabsLength])
  
}