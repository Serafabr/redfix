// Components
import { AddSelectBox } from "../../Buttons"
import { DropdownButton } from "..";
// Types
import { OptionsType, OptionType } from "../../SelectBox/_types"

/*************************\
 * PropTypes
\*************************/

type Props = {
  options: OptionsType,
  onSelectItem: () => void,
  boxWidth?: number,
  selectedId?: string | undefined,
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
  return (
    <AddSelectBox
      options={options}
      onSelectItem={onSelectItem}
      boxWidth={boxWidth}
    >
      {(onClick, isOpen) => (
        <DropdownButton 
          value={selectedId && options[selectedId]?.name}
          isOpen={isOpen}
          handleOnClick={onClick}
          error={error}
        />
      )}
    </AddSelectBox>
  )
}
