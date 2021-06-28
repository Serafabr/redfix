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
  
  console.log(dateFormatInputRef)
  
  return (
    <>
      <NumberFormat 
        customInput={Input} 
        inputClassName={style.DateInput} 
        error={false} 
        placeholder="dd/mm/aaaa" 
        value={2456981}
        thousandSeparator={true} 
        prefix={'$'}
      />
      {/* <Input 
        inputClassName={style.DateInput} 
        error={false} 
        placeholder="dd/mm/aaaa" 
        {...props}
      /> */}
    </>
  )
}
