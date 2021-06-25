// Types
import { ColorType } from '../../Icons/_types';
import { 
  OptionsType, 
  OptionType 
} from '../../SelectBox/_types';

// Return an array of the selected items
const getSelectedOptions = (options: OptionsType) => {
  return (
    Object.keys(options).reduce((selected: Array<OptionType>, nextId: string) => {
      if (options[nextId].selected) {
        selected.push(options[nextId]);
      }
      return selected;
    }, [])
  );
};

// Return the display for the filter button (with dropdown)
export const getFilterButtonDisplay = (
  options: OptionsType, 
  fixedName: string, 
  manyOptionsName: string, 
  icon?: string | undefined, 
  activatedIcon?: string | undefined, 
): [name: string , currentIcon: string | undefined, isActive: boolean ] => {
  
  // Start with the fixedName and the normal icon
  let displayName: string = fixedName;
  let displayIcon: string | undefined = icon;
  let isActive = false;
  
  // Get selected items (Array)
  const selectedItems = getSelectedOptions(options);
  
  if (selectedItems.length === 1 && selectedItems[0]) {
    displayName = selectedItems[0].name;
    displayIcon = activatedIcon || icon;
    isActive = true;
  }
  
  if (selectedItems.length > 1) {
    displayName = `${manyOptionsName} (${selectedItems.length}) ...`;
    displayIcon = activatedIcon || icon;
    isActive = true;
  }
  
  return [displayName, displayIcon, isActive];
};