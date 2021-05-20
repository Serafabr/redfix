// Third party imports
import { useState, useRef, ReactElement } from 'react';
// Components
import { SelectBox } from '../../SelectBox';
// Types
import { OptionsType, OnSelectItemType } from '../../SelectBox/SelectBox';
// CSS
import style from './ButtonWithDropdown.module.scss';

/*************************\
 * General types
\*************************/

export enum AlignListType { Left, Right };

/*************************\
 * Prop types
\*************************/

type Props = {
  // This ReactElement is the Button that will be rendered with the dropdown
  children: (onClick: () => void, isOpen: boolean) => ReactElement<HTMLButtonElement>, 
  options: OptionsType,
  alignList?: AlignListType
  boxWidth?: number,
  searchable?: boolean,
  onSelectItem: OnSelectItemType,
  sortItems?: boolean
};

/*************************\
 * ButtonWithDropdown Component
\*************************/

export const ButtonWithDropdown = ({ 
  children,
  options, 
  alignList = AlignListType.Left,
  boxWidth = 160,
  searchable = false,
  onSelectItem,
  sortItems = false,
}: Props) => {
  // Control whether the dropdown is open or closed.
  const [ isOpen, setIsOpen ] = useState<boolean>(false);
  
  // Ref this element. It will activate a callback if you click outside it.
  const wrapperRef = useRef(null);
  
  // Button click listener
  const handleButtonOnClick = () => {
    setIsOpen((prevState) => (!prevState));
  };
  
  // Render
  return (
    <div className={style.Dropdown} ref={wrapperRef}>
      {children(handleButtonOnClick, isOpen)}
      {isOpen && (
        <div className={`${style.ListWrapper} ${alignList === AlignListType.Right ? style.Right : style.Left}`} style={{ width: `${boxWidth}px` }}>
          <SelectBox 
            setIsOpen={setIsOpen}
            items={options}
            clickOutsideRef={wrapperRef}
            searchable={searchable}
            onSelectItem={onSelectItem}
            sortItems={sortItems}
          />
        </div>
      )}
    </div>
  )
}
