import React from 'react'
import classNames from 'classnames';
import { BaseInput } from '../BaseInput/BaseInput'
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
  
  const inputClasses = classNames(
    style.Input,
    {
      [style.Error]: error
    },
  );
  
  return (
    <div className={inputClasses}>
      <legend className={style.Legend}>Nome Completo:</legend>
      <BaseInput 
        error={error}
        {...rest}
      />
      <div className={style.ErrorMessage}>
        <AlertCircle className={style.ErrorIcon} />
        <div className={style.ErrorTextMessage}>Mensagem de erro</div>
      </div>
    </div>
  )
}
