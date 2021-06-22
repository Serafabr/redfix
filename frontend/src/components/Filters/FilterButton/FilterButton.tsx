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
  iconComponent?: React.ComponentType<BasicIconProps> | null,
  iconSize?: SizeType,
  iconColor?: ColorType,
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
  iconComponent: Icon = null,
  iconSize,
  iconColor,
  onClick
}: Props) => {
  
  // Render component
  return (
    <button className={`${style.Button} ${className} ${!text && style.JustIcon}`} onClick={onClick} style={buttonStyle}>
      <div className={style.ContentWrapper}>
        {Icon && (
          <Icon 
            {...iconSize}
            {...iconColor}
          />
        )}
        {text && (
          <div className={style.Text}>{text}</div>
        )}
      </div>
    </button>
  )
}
