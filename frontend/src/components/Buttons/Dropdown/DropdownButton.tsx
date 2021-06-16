import style from './Dropdown.module.scss';
// Components
import ArrowDown from '../../../assets/icons/arrow-down.svg';

type Props = {
  value: string | number,
  isOpen: boolean,
  handleOnClick: () => void,
  buttonStyle?: any,
};

export const DropdownButton = ({
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
