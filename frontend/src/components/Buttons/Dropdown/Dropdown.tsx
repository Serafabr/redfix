import style from './Dropdown.module.scss';

export const Dropdown = () => {
  return (
    <div className={style.Dropdown}>
      <button className={style.DropdownButton}>Ordens de Serviço</button>
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
