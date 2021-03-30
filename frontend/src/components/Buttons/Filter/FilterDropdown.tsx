import style from './FilterDropdown.module.scss';
import quickIcon from '../../../assets/icons/quick.svg';

export const FilterDropdown = () => {
  return (
    <button className={style.Button}>
      <div className={style.ContentWrapper}>
        <img src={quickIcon} alt="Pesquisa rápida"/>
        Caixa de Entrada
      </div>
    </button>
  )
}
