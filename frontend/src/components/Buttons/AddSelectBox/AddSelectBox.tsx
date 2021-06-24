// Third party imports
import { useState, useRef, ReactElement } from 'react';
import classnames from 'classnames';
// Components
import { SelectBox } from '../../SelectBox';
// Types
import { OptionsType, OnSelectItemType } from '../../SelectBox/_types';
import { AlignListType } from './_types';
import { StyleType } from '../../../types/_general';
// CSS
import style from './AddSelectBox.module.scss';

/*************************\
 * Auxiliary types
\*************************/

type RenderFunctionType = (
  onClick: () => void, 
  isOpen: boolean
) => ReactElement<HTMLButtonElement>;

/*************************\
 * PropTypes
\*************************/

type Props = {
  // This ReactElement is the Button that will be rendered with the dropdown
  children: RenderFunctionType, 
  options: OptionsType,
  alignList?: AlignListType,
  openOnTop?: boolean,
  boxWidth?: number,
  listStyle?: StyleType, 
  searchable?: boolean,
  onSelectItem: OnSelectItemType,
  sortItems?: boolean
};

/*************************\
 * AddSelectBox Component
\*************************/

export const AddSelectBox = ({ 
  children,
  options, 
  alignList = AlignListType.Left,
  openOnTop = false,
  boxWidth = 160,
  listStyle = {},
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
  
  // ListWrapper classes
  const listWrapperClasses = classnames(
    style.ListPosition,
    {
      [style.Right]: alignList === AlignListType.Right,
      [style.Left]: alignList === AlignListType.Left,
      [style.Top]: openOnTop,
      [style.Bottom]: !openOnTop,
    }
  );
  
  // ListWrapper style
  const listWrapperStyle = {
      width: `${boxWidth}px`,
      ...listStyle
    };
  
  // Render
  return (
    <div className={style.Dropdown} ref={wrapperRef}>
      {children(handleButtonOnClick, isOpen)}
      {isOpen && (
        <div className={listWrapperClasses} style={listWrapperStyle}>
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
