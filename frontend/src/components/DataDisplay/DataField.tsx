import style from './DataDisplay.module.scss';

enum IconPositionT { Start, End };

type DataFieldT = {
  label: string,
  data: string | number,
  icon?: string,
  iconPosition?: IconPositionT
};

export const DataField = ({
  label,
  data,
  icon,
  iconPosition = IconPositionT.Start
}: DataFieldT) => {
  return (
    <div className={`${style.DataDisplay} ${style.DescriptionGrid}`}>
      <div className={style.Label}>{label}</div>
      <div className={style.Data}>
        <div className={style.Icon}>+</div>
        <div className={style.Text}>{data}</div>
      </div>
    </div>
  )
}
