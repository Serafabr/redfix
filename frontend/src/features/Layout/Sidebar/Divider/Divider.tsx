import style from './Divider.module.scss';

export const Divider = () => {
  return (
    <div className={style.GroupDivider}>
      <div className={style.DividerLine} />
      <div className={style.DividerText}>
        Manutenções
      </div>
    </div>
  )
}