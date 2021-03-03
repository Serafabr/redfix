import { Button } from '../../Buttons';
import style from './QuickSearch.module.scss';
import { Search } from '../../Icons';

export const QuickSearch = () => {
  return (
    <div>
      <input type="text"/>
      <Button justIcon iconComponent={Search} />
    </div>
  )
}
