// Components
import ArrowDown from '../../../assets/icons/arrow-down.svg';
// Style
import style from './Dropdown.module.scss';
// Types
import { StyleType } from '../../../types/_general'

/*************************\
 * PropTypes
\*************************/

type Props = {
  value: string | number,
  isOpen: boolean,
  handleOnClick: () => void,
  buttonStyle?: StyleType,
};

/*************************\
 * Dropdown Component
\*************************/

export const Dropdown = ({
  value,
  isOpen,
  handleOnClick,
  buttonStyle,
}: Props) => {
  
  return (
    <button
      className={`${style.DropdownButton} ${isOpen && style.Opened}`}
      onClick={handleOnClick}
      style={buttonStyle}
    >
      <div className={style.Text}>{value}</div>
      <div className={style.ButtonDownArrow}>
        <img src={ArrowDown} alt="Ícone dropdown"/>
      </div>
    </button>
  )
}
