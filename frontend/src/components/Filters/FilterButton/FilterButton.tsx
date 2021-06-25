// CSS
import style from './FilterButton.module.scss';
// Types
import { BasicIconProps, SizeType, ColorType } from '../../Icons/_types';

/*************************\
 * PropTypes
\*************************/

type Props = {
  text?: string,
  buttonStyle?: object,
  className?: string,
  iconComponent?: string,
  iconWidth?: number,
  isActive?: boolean,
  disabled?: boolean,
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void,
};

/*************************\
 * FilterButton Component
\*************************/

export const FilterButton = ({
  text,
  buttonStyle,
  className,
  iconComponent,
  iconWidth = 16,
  isActive = false,
  onClick,
}: Props) => {
  
  console.log("isActive");
  console.log(isActive);
  
  // Render component
  return (
    <button className={`${style.Button} ${className} ${!text && style.JustIcon} ${isActive && style.Active}`} onClick={onClick} style={buttonStyle}>
      <div className={style.ContentWrapper}>
        {iconComponent && (
          <div className={style.Image} style={{ width: `${iconWidth}px` }}>
            <img src={iconComponent} alt="Pesquisa rápida"/>
          </div>
        )}
        {text && (
          <div className={style.Text}>{text}</div>
        )}
      </div>
    </button>
  )
}
