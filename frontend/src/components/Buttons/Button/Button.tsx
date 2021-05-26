// Third party imports
import classNames from 'classnames';
// Style
import style from './Button.module.scss';

// Prop types
// Button Styles
export enum ButtonType { Primary, Secondary }

type IconProps = {
  className: string,
};

// Button Props
type ButtonProps = {
  text?: string | null,
  buttonType?: ButtonType,
  buttonStyle?: any,
  className?: string | false,
  iconComponent?: React.ComponentType<IconProps> | null,
  justIcon?: boolean,
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
  justIcon = false,
  disabled = false,
  onClick
 }: ButtonProps) => {
  
  // Button classes logic
  const btnClasses = classNames(
    style.Button, // Always
    className,
    {
      [style.PrimaryButton]: buttonType === ButtonType.Primary,
      [style.SecondaryButton]: buttonType === ButtonType.Secondary,
      [style.Square]: justIcon,
      [style.Disabled]: disabled,
    }
  );
  
  
  return (
    <button className={btnClasses} onClick={onClick} style={buttonStyle}>
      <div className={style.ContentWrapper}>
        {!justIcon && (
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