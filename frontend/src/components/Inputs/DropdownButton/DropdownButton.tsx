import classNames from 'classnames';
// Components
import ArrowDown from '../../../assets/icons/arrow-down.svg';
// Style
import style from './DropdownButton.module.scss';
import inputBasicStyle from '../Inputs.module.scss';
// Types
import { StyleType } from '../../../types/_general'

/*************************\
 * PropTypes
\*************************/

type Props = {
  value: string | number,
  addShadow?: boolean,
  isOpen: boolean,
  handleOnClick: () => void,
  buttonStyle?: StyleType,
  error?: boolean,
};

/*************************\
 * Dropdown Component
\*************************/

export const DropdownButton = ({
  value,
  addShadow = true,
  isOpen,
  handleOnClick,
  buttonStyle,
  error = false,
}: Props) => {
  
  const dropdownClasses = classNames(
    inputBasicStyle.Input,
    inputBasicStyle.ActiveInput,
    style.DropdownButton,
    {
      [style.Opened]: isOpen,
      [inputBasicStyle.InputError]: error,
      [inputBasicStyle.Shadow]: addShadow,
    },
  );
  
  const iconClasses = classNames(
    style.IconArrow,
    {
      [style.IconArrowUp]: isOpen,
    },
  );
  
  return (
    <button
      className={dropdownClasses}
      onClick={handleOnClick}
      style={buttonStyle}
    >
      <div className={style.Text}>{value}</div>
      <div className={iconClasses}>
        <img src={ArrowDown} alt="Ícone dropdown"/>
      </div>
    </button>
  )
}
