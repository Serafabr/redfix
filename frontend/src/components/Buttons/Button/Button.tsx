// Third party imports
import classNames from 'classnames';
// Style
import style from './Button.module.scss';

// Types
import { ButtonType } from '../_types';
import { ColorType, BasicIconProps } from '../../Icons/_types';

/*************************\
 * Util Function
\*************************/

const getIconColor = (buttonType: ButtonType, disabled: boolean = false) => {
  
  if (disabled) {
    return { strokeColor: "#c8c8c8" };
  }
  
  if (buttonType === ButtonType.Primary) {
    return { strokeColor: "#ffffff" };
  }
  
  if (buttonType === ButtonType.Secondary) {
    return { strokeColor: "#1589EE" };
  }
  
  return {};
}
/*************************\
 * PropTypes
\*************************/

type Props = {
  text?: string | null,
  buttonType?: ButtonType,
  buttonStyle?: any,
  className?: string | false,
  icon?: string,
  iconComponent?: React.ComponentType<BasicIconProps> | null,
  disabled?: boolean,
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void,
};

/*************************\
 * Component
\*************************/

export const Button = ({ 
  text = null,
  buttonType = ButtonType.Primary,
  buttonStyle,
  className,
  icon,
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
  
  const iconColor: ColorType = getIconColor(buttonType, disabled);
  
  return (
    <button className={btnClasses} onClick={onClick} style={buttonStyle}>
      <div className={style.ContentWrapper}>
        {text && (
          <div className={style.Text}>
            {text}
          </div>
        )}
        {icon && (
          <div className={style.Image}>
            <img src={icon} alt="Botão" />
          </div>
        )}
        {!icon && Icon ? (
          <div className={style.IconWrapper}>
            <Icon {...iconColor} />
          </div>
        ) : null}
      </div>
    </button>
  )
}