import { Input } from '../Input/Input';
import style from './SearchInput.module.scss';

type Props = any;

export const SearchInput = (props: Props) => {
  
  return (
    <Input 
      className={style.SearchInput} 
      error={false} 
      placeholder="Pesquisar..." 
      {...props}
    />
  )
}
