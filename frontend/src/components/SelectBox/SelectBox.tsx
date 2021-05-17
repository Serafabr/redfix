import { useClickOutsideListener } from '../../hooks';
import style from './SelectBox.module.scss';

import { SearchInput } from '../Inputs'
import blueCheckIcon from '../../assets/icons/blue-check.svg';

export type ItemType = {
  id: string,
  name: string,
  selected?: boolean,
}

export type ListItemType = Array<ItemType>;

type Props = {
  setIsOpen: (isOpen: boolean) => void,
  searchable?: boolean,
  items: ListItemType,
  clickOutsideRef: any,
};

export const SelectBox = ({
  setIsOpen,
  searchable = false,
  items,
  clickOutsideRef
}: Props) => {
   
  // Callback that will be executed if you click outside an element.
  const handleOutsideClick = () => {
    setIsOpen(false);
  }
  
  // Hook that executes a callback if you click outside an element.
  // const wrapperRef = useRef(null);
  useClickOutsideListener(clickOutsideRef, handleOutsideClick);
  
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
            <ul key={item.id} className={`${style.Item} ${item.selected && style.Selected}`}>
              <span className={style.TextItem}>{item.name}</span>
              {item.selected && (<img src={blueCheckIcon} alt="Selected" />)}
            </ul>
          ))}
        </li>
      </div>
    </div>
  )
}
