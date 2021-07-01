import { useRef } from 'react';
import NumberFormat from 'react-number-format';
// Components
import { Input } from '../.';
// Style
import style from './DateInput.module.scss';

/*************************\
 * Proptypes
\*************************/

type Props = {
  value: string,
  onChange: () => void,
}

/*************************\
 * DateInput Component
\*************************/

export const DateInput = ({
  value,
  onChange,
  ...rest
}: Props) => {
  return (
    <>
      <NumberFormat 
        customInput={Input} 
        inputClassName={style.DateInput} 
        value={value}
        onChange={onChange}
        format={"##/##/####"}
        placeholder="dd/mm/aaaa" 
        error={false} 
        {...rest}
      />
    </>
  )
}
