// Third party imports
import classNames from 'classnames';
// Style
import style from './Button.module.scss';

// Prop types
// Button Styles
export enum ButtonStyle { Primary, Secondary }

type IconProps = {
  className: string,
};

// Button Props
type Props = {
  text?: string | null,
  buttonStyle?: ButtonStyle,
  iconComponent?: React.ComponentType<IconProps> | null,
  justIcon?: boolean,
  disabled?: boolean,
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void,
};

// Button Component
export const Button = ({ 
  text = null,
  buttonStyle = ButtonStyle.Primary,
  iconComponent: Icon = null,
  justIcon = false,
  disabled = false,
  onClick
 }: Props) => {
  
  // Button classes logic
  const btnClasses = classNames(
    style.Button, // Always
    {
      [style.PrimaryButton]: buttonStyle === ButtonStyle.Primary,
      [style.SecondaryButton]: buttonStyle === ButtonStyle.Secondary,
      [style.Square]: justIcon,
      [style.Disabled]: disabled,
    }
  );
  
  return (
    <button className={btnClasses} onClick={onClick}>
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