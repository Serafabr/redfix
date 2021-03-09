import style from './SidebarGroup.module.scss';

import { Divider } from '../Divider/Divider';
import { SidebarItem } from '../Item/SidebarItem';

type SidebarItem = {
  label: string,
  icon: string,
  hoveredIcon: string,
};

type Props = {
  items: SidebarItem[],
  dividerLabel: string,
};

export const SidebarGroup = ({
  items,
  dividerLabel
}: Props) => {
  return (
    <div className={style.SidebarGroup}>
      {dividerLabel && (
        <Divider label={dividerLabel} />
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
