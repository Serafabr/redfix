import { useMemo } from 'react';
// Components
import { AddSelectBox } from "../../SelectBox"
import { DropdownButton } from "..";
// Types
import { OptionsType, OptionType, OnSelectItemType } from "../../SelectBox/_types"

/*************************\
 * PropTypes
\*************************/

type Props = {
  options: OptionsType,
  selectionArray?: Array<string>, 
  onSelectItem: OnSelectItemType,
  boxWidth?: number,
  searchable?: boolean,
  sortItems?: boolean,
  error?: boolean,
};

/*************************\
 * Dropdown Component
\*************************/

export const Dropdown = ({
  options,
  selectionArray,
  onSelectItem,
  boxWidth = 200,
  searchable = false,
  sortItems = false,
  error = false,
}: Props) => {
  
  return (
    <AddSelectBox
      options={options}
      selectionArray={selectionArray}
      onSelectItem={onSelectItem}
      boxWidth={boxWidth}
      searchable={searchable}
      sortItems={sortItems}
    >
      {(onClick, isOpen) => (
        <DropdownButton 
          value={selectionArray && options[selectionArray[0]]?.name}
          isOpen={isOpen}
          handleOnClick={onClick}
          error={error}
        />
      )}
    </AddSelectBox>
  )
}
