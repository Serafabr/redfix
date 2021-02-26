import { BaseInput } from '../BaseInput/BaseInput';
import style from './SearchInput.module.scss';

export const SearchInput = () => {
  
  return (
    <BaseInput className={style.SearchInput} placeholder="Pesquisar..." />
  )
}
