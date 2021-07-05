// Third party imports
import { FormEvent, useMemo, useState } from 'react';
// Components
import { SearchInput } from '../../Inputs'
// Hooks
import { useClickOutsideListener } from '../../../hooks';
// Types
import { 
  OptionType, 
  OptionsType, 
  OnSelectItemType, 
} from '../_types';
import { refProps } from '../../../hooks/useClickOutsideListener';
// CSS
import style from './SelectBox.module.scss';
import { sortAndFilterOptionIds } from '../utils/orderItems';
// Icons
import blueCheckIcon from '../../../assets/icons/blue-check.svg';

/*************************\
 * PropTypes
\*************************/

type Props = {
  setIsOpen: (isOpen: boolean) => void,
  searchable?: boolean,
  items: OptionsType,
  selectionArray: Array<string>,
  clickOutsideRef: refProps,
  onSelectItem: OnSelectItemType,
  sortItems: boolean,
  wrapText?: boolean,
};

/*************************\
 * SelectBox Component
\*************************/

export const SelectBox = ({
  setIsOpen,
  searchable = false,
  items,
  selectionArray,
  clickOutsideRef,
  onSelectItem,
  sortItems,
  wrapText = false,
}: Props) => {
  
  const [ searchInput, setSearchInput ] = useState<string | null>(null);
  
  
  /*****
    Get the selection items on an object
  *****/
  
  const selectionObject: {[itemId: string]: boolean} = useMemo(()=> {
    
    const result: {[itemId: string]: boolean} = {};
    selectionArray?.forEach((itemId) => { result[itemId] = true })
    
    return result;
  }, [selectionArray])
  
  
  const optionIds = sortAndFilterOptionIds(items, selectionObject, searchInput, sortItems);
  
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
              addShadow={false}
            />
          </div>
        )}
        <ul className={style.List}>
          {optionIds.map((itemId: string) => (
            <li 
              key={itemId} 
              className={`${style.Item} ${selectionObject[itemId] && style.Selected}`}
              onClick={handleOnClick(itemId)}
            >
              <span className={`${style.TextItem} ${wrapText && style.WrapText}`}>{items[itemId].name}</span>
              {selectionObject[itemId] && (<img src={blueCheckIcon} alt="Selected" />)}
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
