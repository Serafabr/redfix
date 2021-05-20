import { FormEvent, useState } from 'react';
// Components
import { SearchInput } from '../Inputs'
import blueCheckIcon from '../../assets/icons/blue-check.svg';
// Hooks
import { useClickOutsideListener } from '../../hooks';
// CSS
import style from './SelectBox.module.scss';

/*************************\
 * #Typescript TYPES
\*************************/

export type OptionType = {
  name: string,
  selected?: boolean,
}

export type OptionsType = {
  [itemId: string]: OptionType,
};

export type OnSelectItemType = (id: string) => void;

// Internal TYPE
type Props = {
  setIsOpen: (isOpen: boolean) => void,
  searchable?: boolean,
  items: OptionsType,
  clickOutsideRef: any,
  onSelectItem: OnSelectItemType,
  sortItems: boolean,
};

/*************************\
 * #SelectBox Component
\*************************/

export const SelectBox = ({
  setIsOpen,
  searchable = false,
  items,
  clickOutsideRef,
  onSelectItem,
  sortItems
}: Props) => {
  
  const [ searchInput, setSearchInput ] = useState<string | null>(null);
  
  const handleChangeInput = (event: FormEvent<HTMLInputElement>) => {
    setSearchInput((event.target as HTMLInputElement).value);
  }
  
  //const itemsFiltered = Object.keys(items).filter((itemId) => searchInput ? items[itemId].name.toLowerCase().includes(searchInput.toLowerCase()) : true);
  const firstItems = [];
  const lastItems = [];
  
  for (const itemId in items) {
    if (searchInput && items[itemId].name.toLowerCase().includes(searchInput.toLowerCase())) {
      sortItems && items[itemId].selected ? firstItems.push(itemId) : lastItems.push(itemId);
    }
    
    if (!searchInput) {
      sortItems && items[itemId].selected ? firstItems.push(itemId) : lastItems.push(itemId);
    }
  }
  
  const itemsOrdered = [ ...firstItems, ...lastItems ];
  
  // Callback that will be executed if you click outside an element.
  const handleOutsideClick = () => {
    setIsOpen(false);
  }
  
  // Hook that executes a callback if you click outside an element.
  // const wrapperRef = useRef(null);
  useClickOutsideListener(clickOutsideRef, handleOutsideClick);
  
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
        <li className={style.List}>
          {itemsOrdered.map((itemId: string) => (
            <ul 
              key={itemId} 
              className={`${style.Item} ${items[itemId].selected && style.Selected}`}
              onClick={handleOnClick(itemId)}
            >
              <span className={style.TextItem}>{items[itemId].name}</span>
              {items[itemId].selected && (<img src={blueCheckIcon} alt="Selected" />)}
            </ul>
          ))}
          {itemsOrdered.length === 0 && (
            <div className={style.NoResult}>Pesquisa sem resultado...</div>
          )}
        </li>
      </div>
    </div>
  )
}
