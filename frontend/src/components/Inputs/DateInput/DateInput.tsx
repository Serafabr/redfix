// Components
import { Input } from '../.';
// Style
import style from './DateInput.module.scss';

/*************************\
 * DateInput Component
\*************************/

export const DateInput = ({...props}) => {
  return (
    <Input 
      inputClassName={style.DateInput} 
      error={false} 
      placeholder="dd/mm/aaaa" 
      {...props}
    />
  )
}
