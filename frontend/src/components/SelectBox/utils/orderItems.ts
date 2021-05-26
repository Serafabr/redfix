import { OptionsType } from '../SelectBox';

/*************************\
 * General types
\*************************/

export type SortAndFilterOptionsFunction = (
  options: OptionsType,
  filterText: string | null,
  isSorted?: boolean,
) => Array<string>; // string is the IDs

/*************************\
 * Function to sort and filter option IDs
 * Return: An array with the option ids sorted and filtered
\*************************/

export const sortAndFilterOptionIds: SortAndFilterOptionsFunction = (
  options,
  filterText,
  sortOptions = false,
) => {
  // Create arrays to sort options
  const firstOptions = []; // Selected options
  const lastOptions = []; // Non selected options
  
  // Loop through all option IDs
  for (const optionId in options) {
    // If there's any text on searchInput
    if (filterText && options[optionId].name.toLowerCase().includes(filterText.toLowerCase())) {
      sortOptions && options[optionId].selected ? firstOptions.push(optionId) : lastOptions.push(optionId);
    }
    // If there's no text on searchInput
    if (!filterText) {
      sortOptions && options[optionId].selected ? firstOptions.push(optionId) : lastOptions.push(optionId);
    }
  }
  
  return [ ...firstOptions, ...lastOptions ];
};