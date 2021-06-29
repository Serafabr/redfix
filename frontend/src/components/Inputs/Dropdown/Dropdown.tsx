// Components
import { AddSelectBox } from "../../Buttons"
import { DropdownButton } from "..";
// Types
import { OptionsType, OptionType, OnSelectItemType } from "../../SelectBox/_types"

/*************************\
 * PropTypes
\*************************/

type Props = {
  options: OptionsType,
  onSelectItem: OnSelectItemType,
  boxWidth?: number,
  selectedId?: string | null,
  searchable?: boolean,
  sortItems?: boolean,
  error?: boolean,
};

/*************************\
 * Dropdown Component
\*************************/

export const Dropdown = ({
  options,
  onSelectItem,
  boxWidth = 200,
  selectedId,
  searchable = false,
  sortItems = false,
  error = false,
}: Props) => {
  
  const value = selectedId && options[selectedId]?.name;
  
  return (
    <AddSelectBox
      options={options}
      onSelectItem={onSelectItem}
      boxWidth={boxWidth}
      searchable={searchable}
      sortItems={sortItems}
    >
      {(onClick, isOpen) => (
        <DropdownButton 
          value={value}
          isOpen={isOpen}
          handleOnClick={onClick}
          error={error}
        />
      )}
    </AddSelectBox>
  )
}
