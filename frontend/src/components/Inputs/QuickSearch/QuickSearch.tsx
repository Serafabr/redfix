import { Button } from '../../Buttons';
import style from './QuickSearch.module.scss';
import { Search } from '../../Icons';
import { Dropdown } from '../../Buttons/Dropdown/Dropdown';
import { Input } from '../Input/Input';

export const QuickSearch = () => {
  return (
    <div className={style.QuickSearch}>
      <Dropdown />
      <div className={style.InputWrapper}>
        <Input />
      </div>
      <Button justIcon iconComponent={Search} />
    </div>
  )
}