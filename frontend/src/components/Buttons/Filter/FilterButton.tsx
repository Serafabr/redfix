// CSS
import style from './Filter.module.scss';

/*************************\
 * PropTypes
\*************************/

type Props = {
  text?: string,
  buttonStyle?: object,
  className?: string,
  iconComponent?: string,
  iconHeight?: number,
  disabled?: boolean,
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void,
};

/*************************\
 * FilterButton Component
\*************************/

export const FilterButton = ({
  text,
  buttonStyle,
  className,
  iconComponent,
  iconHeight = 15,
  onClick
}: Props) => {
  
  // Render component
  return (
    <button className={`${style.Button} ${className} ${!text && style.JustIcon}`} onClick={onClick} style={buttonStyle}>
      <div className={style.ContentWrapper}>
        {iconComponent && (
          <div className={style.Image} style={{ height: `${iconHeight}px` }}>
            <img src={iconComponent} alt="Pesquisa rápida"/>
          </div>
        )}
        {text && (
          <div className={style.Text}>{text}</div>
        )}
      </div>
    </button>
  )
}
