import React from 'react'
import classNames from 'classnames';
import { BaseInput } from '../BaseInput/BaseInput'
import svgError from '../../../assets/icons/search.svg';
import style from './Input.module.scss';

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
        <img src={svgError} alt="Mensagem de erro"/>
        <div className={style.ErrorTextMessage}>Mensagem de erro</div>
      </div>
    </div>
  )
}
