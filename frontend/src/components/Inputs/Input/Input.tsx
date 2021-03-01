import React from 'react'
import classNames from 'classnames';
import style from './Input.module.scss';
import { AlertCircle } from '../../Icons';

type Props = {
  label?: string | null,
  className?: string,
  error?: boolean,
  [any: string]: any
};

export const Input = ({
  label = null,
  className,
  error = false,
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
    className,
    {
      [style.InputError]: error
    },
  );
  
  // Render component
  return (
    <div>
      {label && <label className={legendClasses}>{label}:</label>}
      <input className={inputClasses} {...rest}/>
      {error && (
        <div className={style.ErrorMessageWrapper}>
          <AlertCircle className={style.ErrorIcon} />
          <div className={style.ErrorTextMessage}>Mensagem de erro</div>
        </div>
      )}
    </div>
  )
}
