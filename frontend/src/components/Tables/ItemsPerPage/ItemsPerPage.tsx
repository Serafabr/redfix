import { DropdownButton } from '../../Buttons/Dropdown/DropdownButton';
import style from './ItemsPerPage.module.scss';

export const ItemsPerPage = () => {
  return (
    <div className={style.ItemsPerPage}>
      <div className={style.Label}>
        Itens por página
      </div>
      <div>
        <DropdownButton
          value={10}
          isOpen={false}
          handleOnClick={() => {}}
          buttonStyle={{
            width: "75px",
          }}
        />
      </div>
    </div>
  )
}
