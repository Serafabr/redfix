import classNames from 'classnames';
import style from './BaseInput.module.scss';

type Props = {
  className?: string,
  error?: boolean,
  [any: string]: any,
};

export const BaseInput = ({
  className, 
  error = false,
  ...rest
}: Props) => {
  
  const inputClasses = classNames(
    style.Input,
    className,
    {
      [style.Error]: error,
    }
  );
  
  return (
    <input className={inputClasses} {...rest}/>
  )
};
