import { useClickOutsideListener } from '../../hooks';
import style from './SelectBox.module.scss';

import { Input } from '../Inputs'
import blueCheckIcon from '../../assets/icons/blue-check.svg';

type Props = {
  setIsOpen: (isOpen: boolean) => void,
  searchable?: boolean,
  items: Array<any>,
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
    <div style={{ position: "relative"}}>
      <div className={style.SelectBox}>
        <div className={style.ListWrapper}>
          {searchable && (
            <div className={style.InputWrapper}>
              <Input 
                inputClassName={style.SearchInput} 
                error={false} 
                placeholder="Pesquisar..." 
              />
            </div>
          )}
          <li className={style.List}>
            {items.map((item) => (
              <ul key={item.id} className={`${style.Item} ${item.selected && style.Selected}`}>
                <span className={style.TextItem}>{item.name}</span>
                {item.selected && (<img src={blueCheckIcon} alt="Selected" />)}
              </ul>
            ))}
          </li>
        </div>
      </div>
    </div>
  )
}
