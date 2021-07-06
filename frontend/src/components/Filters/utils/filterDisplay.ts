// Types
import { ColorType } from '../../Icons/_types';
import { 
  IdType,
  OptionsType, 
  OptionType 
} from '../../SelectBox/_types';

// Return an array of the selected items
const getSelectedOptions = (options: any) => {
  return (
    Object.keys(options).reduce((selected: Array<OptionType>, nextId: IdType) => {
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
  selectionArray: Array<IdType>, 
  fixedName: string, 
  manyOptionsName: string, 
  icon?: string | undefined, 
  activatedIcon?: string | undefined, 
): [name: string , currentIcon: string | undefined, isActive: boolean ] => {
  
  // Start with the fixedName and the normal icon
  let displayName: string = fixedName;
  let displayIcon: string | undefined = icon;
  let isActive = false;
  
  if (selectionArray.length === 1 && selectionArray[0]) {
    displayName = options[selectionArray[0]].name;
    displayIcon = activatedIcon || icon;
    isActive = true;
  }
  
  if (selectionArray.length > 1) {
    displayName = `${manyOptionsName} (${selectionArray.length}) ...`;
    displayIcon = activatedIcon || icon;
    isActive = true;
  }
  
  return [displayName, displayIcon, isActive];
};