import { Dropdown } from '../../Buttons/Dropdown/Dropdown';
import style from './ItemsPerPage.module.scss';

export const ItemsPerPage = () => {
  return (
    <div>
      <div>Itens por página</div>
      <div>
        <Dropdown />
      </div>
    </div>
  )
}
