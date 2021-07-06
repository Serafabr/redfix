// Types
import { IdType } from "../_types";


/*************************\
 * Helper function to select 01 item
\*************************/

export const handleOneItemSelection = (
  setSelection: React.Dispatch<Array<IdType>>,
  selectedItems: Array<IdType> = [],
  noSelectionAble: boolean = false,
) => (itemId: IdType) => {
  
  if (noSelectionAble && selectedItems.includes(itemId)) {
    setSelection([])
  } else {
    setSelection([itemId]);
  }
  
};
  
/*************************\
 * Helper function to select many items
\*************************/

export const handleManyItemsSelection = (
  selectionArray: Array<IdType>, 
  setSelection: React.Dispatch<Array<IdType>>
) => (itemId: IdType) => {
  
  const result = [...selectionArray];
  
  if (result.includes(itemId)) {
    setSelection(result.filter((item) => (item != itemId)));
  } else {
    result.push(itemId);
    setSelection(result);
  }
};