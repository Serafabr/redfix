import classNames from 'classnames';

import { AlertCircle } from '../../Icons';
import style from './Input.module.scss';

// Prop Types
type Props = {
  label?: string | null,
  inputClassName?: string,
  error?: boolean,
  errorMessage?: string | null,
  [any: string]: any
};

// Input Component
export const Input = ({
  label = null,
  inputClassName,
  error = false,
  errorMessage = null,
  ...rest
}: Props) => {
  
  // Classes
  const legendClasses = classNames(
    style.Legend,
    {
      [style.LegendError]: error
    },
  );
  
  const inputClasses = classNames(
    style.Input,
    inputClassName,
    {
      [style.InputError]: error
    },
  );
  
  // Render component
  return (
    <div>
      {label && <label className={legendClasses}>{label}:</label>}
      <input className={inputClasses} {...rest}/>
      {error && errorMessage && (
        <div className={style.ErrorMessageWrapper}>
          <AlertCircle className={style.ErrorIcon} />
          <div className={style.ErrorTextMessage}>{errorMessage}</div>
        </div>
      )}
    </div>
  )
}
