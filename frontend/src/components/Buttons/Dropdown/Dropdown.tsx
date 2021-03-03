import style from './Dropdown.module.scss';
import ArrowDown from '../../../assets/icons/arrow-down.svg';

export const Dropdown = () => {
  return (
    <div className={style.Dropdown}>
      <button className={style.DropdownButton}>
        <div>Ordens de Serviço</div>
        <div className={style.ButtonDownArrow}>
          <img src={ArrowDown} alt="Ícone dropdown"/>
        </div>
      </button>
      <div className={style.ListWrapper}>
        <li className={style.List}>
          <ul className={style.Item}>Ordens de Serviço</ul>
          <ul className={style.Item}>Equipamentos</ul>
          <ul className={style.Item}>Edifícios</ul>
          <ul className={style.Item}>Contratos</ul>
        </li>
      </div>
    </div>
  )
}
