import { SidebarGroup } from './Group/SidebarGroup';
import style from './Sidebar.module.scss';
// Types
import { Props as SidebarGroupProps } from './Group/SidebarGroup';

type Props = {
  navItems: SidebarGroupProps[];
};

export const AppSidebar = ({ navItems }: Props) => {
  return (
    <div className={style.AppSideBar}>
      <div className={style.SidebarWrapper}>
        {navItems.map((group) => (
          <SidebarGroup 
            key={group.groupLabel}
            items={group.items}
            groupLabel={group.groupLabel}
          />
        ))}
      </div>
    </div>
  )
}