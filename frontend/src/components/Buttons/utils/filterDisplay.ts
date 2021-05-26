import { 
  OptionsType, 
  OptionType 
} from '../../SelectBox/SelectBox';

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

export const getFilterButtonDisplay = (
  options: OptionsType, 
  fixedName: string, 
  manyOptionsName: string, 
  icon: string, 
  activatedIcon: string
) => {
  
  // Start with the fixedName and the normal icon
  let displayName = fixedName;
  let displayIcon = icon;
  
  const selectedItems = getSelectedOptions(options);
  
  if (selectedItems.length === 1 && selectedItems[0]) {
    displayName = selectedItems[0].name;
    displayIcon = activatedIcon;
  }
  if (selectedItems.length > 1) {
    displayName = `${manyOptionsName} (${selectedItems.length}) ...`;
    displayIcon = activatedIcon;
  }
  
  return [displayName, displayIcon];
};