import { useClickOutsideListener } from '../../hooks';
import style from './SelectBox.module.scss';

import { SearchInput } from '../Inputs'
import blueCheckIcon from '../../assets/icons/blue-check.svg';

export type ItemType = {
  name: string,
  selected: boolean,
}

export type ItemsType = {
  [key: string]: ItemType,
};

// export type SelectedType = any;

export type OnSelectItemType = (id: string) => void;

type Props = {
  setIsOpen: (isOpen: boolean) => void,
  searchable?: boolean,
  items: ListItemType,
  selected?: SelectedType,
  clickOutsideRef: any,
  onSelectItem: OnSelectItemType,
};

export const SelectBox = ({
  setIsOpen,
  searchable = false,
  items,
  selected = {},
  clickOutsideRef,
  onSelectItem,
}: Props) => {
   
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
            <SearchInput />
          </div>
        )}
        <li className={style.List}>
          {items.map((item: ItemType) => (
            <ul 
              key={item.id} 
              className={`${style.Item} ${selected[item.id] && style.Selected}`}
              onClick={handleOnClick(item.id)}
            >
              <span className={style.TextItem}>{item.name}</span>
              {selected[item.id] && (<img src={blueCheckIcon} alt="Selected" />)}
            </ul>
          ))}
        </li>
      </div>
    </div>
  )
}
