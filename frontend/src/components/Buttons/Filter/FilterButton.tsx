import style from './FilterDropdown.module.scss';

// Button Props
type ButtonProps = {
  text: string,
  buttonStyle?: {},
  className?: string,
  iconComponent?: string,
  disabled?: boolean,
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void,
};

export const FilterButton = ({
  text,
  buttonStyle,
  className,
  iconComponent,
  disabled,
  onClick
}: ButtonProps) => {
  return (
    <button className={`${style.Button} ${className}`} onClick={onClick} style={buttonStyle}>
      <div className={style.ContentWrapper}>
        {iconComponent && (
          <img src={iconComponent} alt="Pesquisa rápida"/>
        )}
        {text}
      </div>
    </button>
  )
}
