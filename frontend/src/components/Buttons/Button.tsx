// Third party imports
import classNames from 'classnames';
// Style
import style from './Button.module.scss';

// Prop types
export enum ButtonStyle { Primary, Secondary }

type IconProps = {
  className: string,
};

type Props = {
  text: string,
  buttonStyle?: ButtonStyle,
  iconComponent?: React.ComponentType<IconProps> | null,
  disabled?: boolean,
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void,
};

// Button Component
export const Button = ({ 
  text,
  buttonStyle = ButtonStyle.Primary,
  iconComponent: Icon = null,
  disabled = false,
  onClick
 }: Props) => {
  
  // Button style logic
  const btnClasses = classNames(
    style.Button,
    {
      [style.PrimaryButton]: buttonStyle === ButtonStyle.Primary,
      [style.SecondaryButton]: buttonStyle === ButtonStyle.Secondary,
      [style.Disabled]: disabled,
    }
  );
  
  return (
    <button className={btnClasses} onClick={onClick}>
      <div className={style.ContentWrapper}>
        <div className={style.Text}>
          {text}
        </div>
        {Icon ? (
          <div className={style.IconWrapper}>
            <Icon className={style.Plus} />
          </div>
        ) : null}
      </div>
    </button>
  )
}