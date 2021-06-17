import classNames from 'classnames';
import { ReactNode } from 'react';

import { AlertCircle } from '../../Icons';
import style from './InputField.module.scss';

// Prop Types
type Props = {
  label?: string | null,
  inputClassName?: string,
  error?: boolean,
  errorMessage?: string | null,
  children: ReactNode,
};

// Input Component
export const InputField = ({
  label = null,
  inputClassName,
  error = false,
  errorMessage = null,
  children,
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
      {label && <label className={legendClasses}>{label}</label>}
      {children}
      {error && errorMessage && (
        <div className={style.ErrorMessageWrapper}>
          <AlertCircle className={style.ErrorIcon} />
          <div className={style.ErrorTextMessage}>{errorMessage}</div>
        </div>
      )}
    </div>
  )
}
