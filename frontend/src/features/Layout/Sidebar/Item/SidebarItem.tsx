import { useState } from 'react';

import style from './SidebarItem.module.scss';

type Props = {
  label: string,
  icon: string,
  hoveredIcon: string,
}

export const SidebarItem = ({
  label,
  icon,
  hoveredIcon
}: Props) => {
  
  const [isHovered, setIsHovered] = useState<boolean>(false);
  
  const toggleHover = () => {
    setIsHovered((prevState) => !prevState);
  }
  
  return (
    <div 
      className={style.Item} 
      onMouseEnter={toggleHover} 
      onMouseLeave={toggleHover}
    >
      <div className={style.IconWrapper}>
        <img src={isHovered ? hoveredIcon : icon} alt={label}/>
      </div>
      <div className={style.ItemText}>
        {label}
      </div>
    </div>
  )
}
