// Types
import { SelectionObjectType } from "../_types";


/*************************\
 * Helper function to select 01 item
\*************************/

export const handleOneItemSelection = (
  setSelection: React.Dispatch<Array<string>>
) => (itemId: string) => {
  
  setSelection([itemId]);
};
  
/*************************\
 * Helper function to select many items
\*************************/

export const handleManyItemsSelection = (
  selectionArray: Array<string>, 
  setSelection: React.Dispatch<Array<string>>
) => (itemId: string) => {
  
  const result = [...selectionArray];
  
  if (result.includes(itemId)) {
    setSelection(result.filter((item) => (item != itemId)));
  } else {
    result.push(itemId);
    setSelection(result);
  }
};