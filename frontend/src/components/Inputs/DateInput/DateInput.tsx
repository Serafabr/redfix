import { useRef } from 'react';
import NumberFormat from 'react-number-format';
// Components
import { Input } from '../.';
// Style
import style from './DateInput.module.scss';

/*************************\
 * DateInput Component
\*************************/

export const DateInput = ({...props}) => {
  
  const dateFormatInputRef = useRef(null);
  
  return (
    <>
      <NumberFormat 
        customInput={Input} 
        inputClassName={style.DateInput} 
        error={false} 
        placeholder="dd/mm/aaaa" 
        format={"##/##/####"}
      />
    </>
  )
}
