// Third party imports
import classNames from 'classnames';
// Style
import style from './Button.module.scss';

// Types
import { ButtonType } from '../_types';

/*************************\
 * General types
\*************************/

type IconProps = {
  className: string,
};

/*************************\
 * PropTypes
\*************************/

type Props = {
  text?: string | null,
  buttonType?: ButtonType,
  buttonStyle?: any,
  className?: string | false,
  iconComponent?: React.ComponentType<IconProps> | null,
  disabled?: boolean,
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void,
};

// Button Component
export const Button = ({ 
  text = null,
  buttonType = ButtonType.Primary,
  buttonStyle,
  className,
  iconComponent: Icon = null,
  disabled = false,
  onClick
 }: Props) => {
  
  // Button classes logic
  const btnClasses = classNames(
    style.Button, // Always
    className,
    {
      [style.PrimaryButton]: buttonType === ButtonType.Primary,
      [style.SecondaryButton]: buttonType === ButtonType.Secondary,
      [style.Square]: (!text ? true : false),
      [style.Disabled]: disabled,
    }
  );
  
  
  return (
    <button className={btnClasses} onClick={onClick} style={buttonStyle}>
      <div className={style.ContentWrapper}>
        {text && (
          <div className={style.Text}>
            {text}
          </div>
        )}
        {Icon ? (
          <div className={style.IconWrapper}>
            <Icon className={style.Icon} />
          </div>
        ) : null}
      </div>
    </button>
  )
}