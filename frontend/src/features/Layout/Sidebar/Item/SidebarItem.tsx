import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import style from './SidebarItem.module.scss';

export type SidebarItemType = {
  label: string,
  path: string,
  icon: string,
  hoveredIcon: string,
}

export const SidebarItem = ({
  label,
  icon,
  path,
  hoveredIcon
}: SidebarItemType) => {
  
  const [isHovered, setIsHovered] = useState<boolean>(false);
  
  const toggleHover = () => {
    setIsHovered((prevState) => !prevState);
  }
  
  return (
    <NavLink 
      to={path}
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
    </NavLink>
  )
}
