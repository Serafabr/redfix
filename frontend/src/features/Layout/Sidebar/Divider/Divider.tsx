import style from './Divider.module.scss';

type Props = {
  label: string,
}

export const Divider = ({ label }: Props) => {
  return (
    <div className={style.GroupDivider}>
      <div className={style.DividerLine} />
      <div className={style.DividerText}>
        {label}
      </div>
    </div>
  )
}