import { ButtonWithDropdown } from '../../Buttons';
import { Dropdown } from '../../Buttons';
import { AlignListType } from '../../Buttons/ButtonWithDropdown/_types';
import style from './ItemsPerPage.module.scss';

const options = {
  '10': { name: '10' },
  '25': { name: '25' },
  '50': { name: '50' },
  '100': { name: '100' },
  '150': { name: '150' },
}

export const ItemsPerPage = () => {
  return (
    <div className={style.ItemsPerPage}>
      <div className={style.Label}>
        Itens por página
      </div>
      <div>
        <ButtonWithDropdown 
          options={options}
          alignList={AlignListType.Left}
          openOnTop
          boxWidth={100}
          onSelectItem={(id) => {console.log(id)}}
        >
          {(onClick, isOpen) => (
            <Dropdown
              value={10}
              isOpen={isOpen}
              handleOnClick={onClick}
              buttonStyle={{
                width: "75px",
              }}
            />
          )}
        </ButtonWithDropdown>
      </div>
    </div>
  )
}
