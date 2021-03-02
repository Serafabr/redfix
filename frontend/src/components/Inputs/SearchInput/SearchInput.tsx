import { Input } from '../Input/Input';
import style from './SearchInput.module.scss';

// Component SearchInput
export const SearchInput = () => {
  
  return (
    <Input 
      inputClassName={style.SearchInput} 
      error={false} 
      placeholder="Pesquisar..." 
    />
  )
}
