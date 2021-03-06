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
  options?: OptionsType,
  selectionArray?: Array<string | number>, 
  onSelectItem: OnSelectItemType,
  boxWidth?: number,
  searchable?: boolean,
  sortItems?: boolean,
  wrapText?: boolean,
  placeholder?: string,
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
  wrapText,
  placeholder,
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
      wrapText={wrapText}
    >
      {(onClick, isOpen) => (
        <DropdownButton 
          value={selectionArray && options && options[selectionArray[0]]?.name}
          isOpen={isOpen}
          handleOnClick={onClick}
          error={error}
          placeholder={placeholder}
        />
      )}
    </AddSelectBox>
  )
}
