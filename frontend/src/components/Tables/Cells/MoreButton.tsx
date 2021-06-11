import style from './Cells.module.scss';

import moreButton from '../../../assets/icons/tables/more-vertical.svg';
import { ButtonWithDropdown } from '../../Buttons/';
import { OptionType, OptionsType } from '../../SelectBox/SelectBox';
import { AlignListType } from '../../Buttons/';

const options: OptionsType = {
  editSupply: { name: 'Editar item' },
  billSupply: { name: 'Faturar item' },
  addReceipt: { name: 'Comprovante' },
  removeSupply: { name: 'Excluir item' },
}

export const MoreButton = () => {
  
  const handleSelectItem = () => {
    console.log('Click!');
  };
  
  return (
      <ButtonWithDropdown
        options={options}
        alignList={AlignListType.Right}
        boxWidth={140}
        listStyle={{ top: "25px" }}
        onSelectItem={handleSelectItem}
      >
        {(onClick, isOpen) => (
          <div className={style.MoreButton} onClick={onClick}>
            <img src={moreButton} alt="Opções" />
          </div>
        )}
      </ButtonWithDropdown>
  )
}


{/* <ButtonWithDropdown 
        options={options}
        alignList={alignList}
        boxWidth={220}
        searchable={searchable}
        onSelectItem={onSelectItem}
        sortItems={sortItems}
      >
        {(onClick, isOpen) => (
          <FilterButton 
            text={name}
            iconComponent={currentIcon}
            iconHeight={iconHeight}
            onClick={onClick}
          />
        )}
      </ButtonWithDropdown> */}