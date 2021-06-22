// Types
import { ColorType } from '../../Icons/_types';
import { 
  OptionsType, 
  OptionType 
} from '../../SelectBox/SelectBox';

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
  iconColor?: ColorType, 
  activatedIconColor?: ColorType, 
): [name: string , color: ColorType | undefined ] => {
  
  // Start with the fixedName and the normal icon
  let displayName: string = fixedName;
  let displayColor: ColorType | undefined = iconColor;
  
  // Get selected items (Array)
  const selectedItems = getSelectedOptions(options);
  
  if (selectedItems.length === 1 && selectedItems[0]) {
    displayName = selectedItems[0].name;
    displayColor = iconColor;
  }
  if (selectedItems.length > 1) {
    displayName = `${manyOptionsName} (${selectedItems.length}) ...`;
    displayColor = activatedIconColor;
  }
  
  return [displayName, displayColor];
};