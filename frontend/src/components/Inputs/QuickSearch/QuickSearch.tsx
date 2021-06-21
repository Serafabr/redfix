
import { Button } from '../../Buttons';
import style from './QuickSearch.module.scss';
import { Search } from '../../Icons';
import { Dropdown } from '../../Buttons';
import { Input } from '../Input/Input';

export const QuickSearch = () => {
  return (
    <div className={style.QuickSearch}>
      <Dropdown buttonStyle={{ borderRadius: "4px 0 0 4px" }} value="Tarefa" isOpen={false} handleOnClick={() => {}} />
      <div className={style.InputWrapper}>
        <Input />
      </div>
      <Button iconComponent={Search} buttonStyle={{ borderRadius: "0 4px 4px 0" }} />
    </div>
  )
}
