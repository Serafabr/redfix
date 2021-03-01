import React from 'react'
import classNames from 'classnames';
import style from './Input.module.scss';
import { AlertCircle } from '../../Icons';

type Props = {
  error?: boolean,
  [any: string]: any
};

export const Input = ({
  error = false,
  ...rest
}: Props) => {
  
  const legendClasses = classNames(
    style.Legend,
    {
      [style.LegendError]: error
    },
  );
  
  const inputClasses = classNames(
    style.Input,
    {
      [style.InputError]: error
    },
  );
  
  return (
    <div>
      <label className={legendClasses}>Nome Completo:
        <input className={inputClasses} {...rest}/>
      </label>
      {error && (
        <div className={style.ErrorMessageWrapper}>
          <AlertCircle className={style.ErrorIcon} />
          <div className={style.ErrorTextMessage}>Mensagem de erro</div>
        </div>
      )}
    </div>
  )
}
