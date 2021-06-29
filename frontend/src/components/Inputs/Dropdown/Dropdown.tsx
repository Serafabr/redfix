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
  error = false,
}: Props) => {
  
  const value = selectedId && options[selectedId]?.name;
  
  return (
    <AddSelectBox
      options={options}
      onSelectItem={onSelectItem}
      boxWidth={boxWidth}
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
