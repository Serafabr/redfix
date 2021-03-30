import style from './SelectBox.module.scss';

export const SelectBox = () => {
  return (
    <div>
      <div className={style.ListWrapper}>
        <li className={style.List}>
          <ul className={style.Item}>Customizar tabela</ul>
          <ul className={style.Item}>Exportar para CSV</ul>
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
