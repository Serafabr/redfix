import { useState, useRef, ReactElement } from 'react';

// Style
import style from './ButtonWithDropdown.module.scss';
// Hooks
import { SelectBox, ItemsType, OnSelectItemType } from '../../SelectBox/SelectBox';

export enum AlignListType { Left, Right };

type ButtonWithDropdownProps = {
  children: (onClick: () => void, isOpen: boolean) => ReactElement,
  options: ItemsType,
  alignList?: AlignListType
  boxWidth?: number,
  searchable?: boolean,
  onSelectItem: OnSelectItemType,
};


export const ButtonWithDropdown = ({ 
  children,
  options, 
  alignList = AlignListType.Left,
  boxWidth = 160,
  searchable = false,
  onSelectItem
}: ButtonWithDropdownProps) => {
  // Control whether the dropdown is open or closed.
  const [ isOpen, setIsOpen ] = useState<boolean>(false);
  
  // Hook that executes a callback if you click outside an element.
  const wrapperRef = useRef(null);
  
  const handleOnClick = () => {
    setIsOpen((prevState) => (!prevState));
  };
  
  // Render
  return (
    <div className={style.Dropdown} ref={wrapperRef}>
      {children(handleOnClick, isOpen)}
      {isOpen && (
        <div className={`${style.ListWrapper} ${alignList === AlignListType.Right ? style.Right : style.Left}`} style={{ width: `${boxWidth}px` }}>
          <SelectBox 
            setIsOpen={setIsOpen}
            items={options}
            clickOutsideRef={wrapperRef}
            searchable={searchable}
            onSelectItem={onSelectItem}
          />
        </div>
      )}
    </div>
  )
}
