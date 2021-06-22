import classNames from 'classnames';
import style from './Input.module.scss';

type InputT = {
  inputClassName?: string,
  error?: boolean,
  [any: string]: any
};

export const Input = ({
  inputClassName,
  error = false,
  ...rest
}: InputT) => {
  
  const inputClasses = classNames(
    style.Input,
    inputClassName,
    {
      [style.InputError]: error
    },
  );
  
  return (
    <input className={inputClasses} {...rest}/>
  )
}
