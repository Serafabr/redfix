import style from './SelectBox.module.scss';

import blueCheckIcon from '../../assets/icons/blue-check.svg';

export const SelectBox = () => {
  return (
    <div>
      <div className={style.ListWrapper}>
        <li className={style.List}>
          <ul className={`${style.Item} ${style.Selected}`}>Customizar tabelaaaaaaaaaaaaaaaaaa<img src={blueCheckIcon} alt="Selected" /></ul>
          <ul className={`${style.Item} ${style.Selected}`}>Exportar para CSV<img src={blueCheckIcon} alt="Selected" /></ul>
          <ul className={style.Item}>Exportar para Excel</ul>
          <ul className={style.Item}>Exportar PDF</ul>
          <ul className={style.Item}>Customizar tabela</ul>
          <ul className={style.Item}>Exportar para CSV</ul>
          <ul className={style.Item}>Exportar para Excel</ul>
          <ul className={style.Item}>Exportar PDF</ul>
        </li>
      </div>
    </div>
  )
}
