import { BaseInput } from '../BaseInput/BaseInput';
import style from './SearchInput.module.scss';

type Props = any;

export const SearchInput = (props: Props) => {
  
  return (
    <BaseInput 
      className={style.SearchInput} 
      error={false} 
      placeholder="Pesquisar..." 
      {...props}
    />
  )
}
