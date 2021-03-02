import { Input } from '../Input/Input';
import style from './SearchInput.module.scss';

// Component SearchInput
export const SearchInput = () => {
  
  return (
    <Input 
      className={style.SearchInput} 
      error={false} 
      placeholder="Pesquisar..." 
    />
  )
}
