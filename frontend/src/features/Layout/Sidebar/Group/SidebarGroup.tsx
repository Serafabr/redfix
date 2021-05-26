import style from './SidebarGroup.module.scss';

import { Divider } from '../Divider/Divider';
import { SidebarItem, SidebarItemType } from '../Item/SidebarItem';

export type Props = {
  items: SidebarItemType[],
  groupLabel?: string,
};

export const SidebarGroup = ({
  items,
  groupLabel
}: Props) => {
  console.log("Items: ");
  console.log(items);
  return (
    <div className={style.SidebarGroup}>
      {groupLabel && (
        <Divider label={groupLabel} />
      )}
      <ul className={style.List}>
        {items.map((item) => (
          <li key={item.label}>
            <SidebarItem 
              label={item.label} 
              path={item.path} 
              icon={item.icon} 
              hoveredIcon={item.hoveredIcon} 
            />
          </li>
        ))}
      </ul>
    </div>
  )
}
