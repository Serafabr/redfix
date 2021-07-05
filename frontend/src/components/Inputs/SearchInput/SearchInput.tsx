// Components
import { Input } from '../.';
// Style
import style from './SearchInput.module.scss';

/*************************\
 * SearchInput Component
\*************************/

export const SearchInput = ({...props}) => {
  return (
    <Input 
      inputClassName={style.SearchInput} 
      error={false} 
      placeholder="Pesquisar..." 
      {...props}
    />
  )
}
