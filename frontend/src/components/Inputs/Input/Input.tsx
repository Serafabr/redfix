import classNames from 'classnames';
//Style
import style from './Input.module.scss';
import inputBasicStyle from '../Inputs.module.scss';

/*************************\
 * PropTypes
\*************************/

type Props = {
  inputClassName?: string,
  error?: boolean,
  [any: string]: any
};

/*************************\
 * Input component
\*************************/

export const Input = ({
  inputClassName,
  error = false,
  ...rest
}: Props) => {
  
  const inputClasses = classNames(
    inputBasicStyle.BasicInput,
    inputClassName,
    {
      [inputBasicStyle.BasicInputError]: error
    },
  );
  
  return (
    <input className={inputClasses} {...rest}/>
  )
}
