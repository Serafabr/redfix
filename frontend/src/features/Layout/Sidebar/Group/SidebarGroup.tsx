import style from './SidebarGroup.module.scss';

import { Divider } from '../Divider/Divider';
import { SidebarItem } from '../Item/SidebarItem';

type SidebarItem = {
  label: string,
  icon: string,
  hoveredIcon: string,
};

export type Props = {
  items: SidebarItem[],
  groupLabel?: string,
};

export const SidebarGroup = ({
  items,
  groupLabel
}: Props) => {
  return (
    <div className={style.SidebarGroup}>
      {groupLabel && (
        <Divider label={groupLabel} />
      )}
      <ul className={style.List}>
        {items.map((item) => (
          <li key={item.label}>
            <SidebarItem label={item.label} icon={item.icon} hoveredIcon={item.hoveredIcon} />
          </li>
        ))}
      </ul>
    </div>
  )
}
