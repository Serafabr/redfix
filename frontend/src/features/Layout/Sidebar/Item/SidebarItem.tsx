import { ImgHTMLAttributes } from 'react';
import style from './SidebarItem.module.scss';

type Props = {
  label: string,
  icon: string
}

export const SidebarItem = ({
  label,
  icon,
}: Props) => {
  return (
    <div  className={style.Item}>
      <div className={style.IconWrapper}>
        <img src={icon} alt={label}/>
      </div>
      <div className={style.ItemText}>
        {label}
      </div>
    </div>
  )
}
