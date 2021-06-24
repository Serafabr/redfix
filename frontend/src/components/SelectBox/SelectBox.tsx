// Third party imports
import { FormEvent, useState } from 'react';
// Components
import { SearchInput } from '../Inputs'
// Hooks
import { useClickOutsideListener } from '../../hooks';
// Types
import { 
  OptionType, 
  OptionsType, 
  OnSelectItemType, 
} from './_types';
import { refProps } from '../../hooks/useClickOutsideListener';
// CSS
import style from './SelectBox.module.scss';
import { sortAndFilterOptionIds } from './utils/orderItems';
// Icons
import blueCheckIcon from '../../assets/icons/blue-check.svg';

/*************************\
 * PropTypes
\*************************/

type Props = {
  setIsOpen: (isOpen: boolean) => void,
  searchable?: boolean,
  items: OptionsType,
  clickOutsideRef: refProps,
  onSelectItem: OnSelectItemType,
  sortItems: boolean,
};

/*************************\
 * SelectBox Component
\*************************/

export const SelectBox = ({
  setIsOpen,
  searchable = false,
  items,
  clickOutsideRef,
  onSelectItem,
  sortItems,
}: Props) => {
  
  const [ searchInput, setSearchInput ] = useState<string | null>(null);
  
  const optionIds = sortAndFilterOptionIds(items, searchInput, sortItems);
  
  /*****
    Event Handlers
  *****/
  
  const handleChangeInput = (event: FormEvent<HTMLInputElement>) => {
    setSearchInput((event.target as HTMLInputElement).value);
  }
  
  // Callback that will be executed if you click outside an element.
  const handleOutsideClick = () => {
    setIsOpen(false);
  }
  
  // Hook that executes a callback if you click outside an element.
  useClickOutsideListener(clickOutsideRef, handleOutsideClick);
  
  // When an option is clicked
  const handleOnClick = (id: string) => () => {
    setIsOpen(false);
    onSelectItem(id);
  };
  
  return (
    <div className={style.SelectBox}>
      <div className={style.ListWrapper}>
        {searchable && (
          <div className={style.InputWrapper}>
            <SearchInput 
              onChange={handleChangeInput}
            />
          </div>
        )}
        <ul className={style.List}>
          {optionIds.map((itemId: string) => (
            <li 
              key={itemId} 
              className={`${style.Item} ${items[itemId].selected && style.Selected}`}
              onClick={handleOnClick(itemId)}
            >
              <span className={style.TextItem}>{items[itemId].name}</span>
              {items[itemId].selected && (<img src={blueCheckIcon} alt="Selected" />)}
            </li>
          ))}
          {optionIds.length === 0 && (
            <div className={style.NoResult}>Pesquisa sem resultado...</div>
          )}
        </ul>
      </div>
    </div>
  )
}
