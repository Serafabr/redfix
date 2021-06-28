import classNames from 'classnames';
//Style
import style from './Input.module.scss';
import inputBasicStyle from '../Inputs.module.scss';

/*************************\
 * PropTypes
\*************************/

type Props = {
  inputClassName?: string,
  addShadow?: boolean,
  error?: boolean,
  [any: string]: any
};

/*************************\
 * Input component
\*************************/

export const Input = ({
  inputClassName,
  addShadow = true,
  error = false,
  ...rest
}: Props) => {
  
  const inputClasses = classNames(
    inputBasicStyle.Input,
    inputBasicStyle.ActiveInput,
    inputClassName,
    {
      [inputBasicStyle.InputError]: error,
      [inputBasicStyle.Shadow]: addShadow,
    },
  );
  
  return (
    <input className={inputClasses} {...rest}/>
  )
}
