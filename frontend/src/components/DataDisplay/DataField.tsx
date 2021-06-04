import style from './DataDisplay.module.scss';

enum IconPositionT { Start, End };

type DataFieldT = {
  label: string,
  data: string | number,
  gridArea?: string,
  icon?: string,
  iconPosition?: IconPositionT
};

export const DataField = ({
  label,
  data,
  gridArea,
  icon,
  iconPosition = IconPositionT.Start
}: DataFieldT) => {
  
  const dataDisplayStyle = { gridArea };
  
  return (
    <div className={`${style.DataDisplay}`} style={dataDisplayStyle}>
      <div className={style.Label}>{label}</div>
      <div className={style.Data}>
        {icon && iconPosition === IconPositionT.Start && (
          <div className={style.Icon}>
            <img src={icon} alt={label} />
          </div>
          )}
        <div className={style.Text}>{data}</div>
        {icon && iconPosition === IconPositionT.End && (
          <div className={style.Icon}>
            <img src={icon} alt={label} />
          </div>
        )}
      </div>
    </div>
  )
}
