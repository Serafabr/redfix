import { useState, useRef, ReactNode, MouseEvent } from 'react';
// Components
import { TabsHiddenButton } from './TabHiddenButton/TabsHiddenButton';
// Custom hooks
import { useGetNewNumberOfTabs } from '../../hooks/useGetNewNumberOfTabs';
// Utilities
import { getNumberOfTabs, getVisibleTabs, getHiddenTabsObject } from './utils/tabs';
// Style
import style from './Tabs.module.scss';
// Types
import {
  TabsType,
  TabViewType,
  TabViewsType,
  TabsPerSizeType,
  ActiveKeyType
} from './_types';
import { IdType } from '../SelectBox/_types';

/*************************\
 * PropTypes
\*************************/

type Props = {
  tabs: TabsType,
  tabViews: TabViewsType,
  tabsPerSize?: TabsPerSizeType,
  activeKey: ActiveKeyType,
  setActiveKey: (id: IdType) => void
}

/*************************\
 * Tabs Component
\*************************/

export const Tabs = ({
  tabs,
  tabViews,
  tabsPerSize = {},
  activeKey,
  setActiveKey
}: Props) => {
  
  const tabsLength = tabs.length;
  
  // Keep the number of tabs allowed, regarding the screen size.
  const [ numberOfTabs, setNumberOfTabs ] = useState<number>(
    getNumberOfTabs(window.innerWidth, tabsPerSize, tabsLength)
  );
  
  // Ref to the tabs container.
  const tabsRef = useRef(null);
  
  // Add resize listener to the screen. It will set a new number of tabs, depending on the size of the screen.
  useGetNewNumberOfTabs(setNumberOfTabs, numberOfTabs, tabsPerSize, tabsLength);
  
  const { visibleTabKeys, hiddenTabKeys } = getVisibleTabs(tabs, numberOfTabs);
  const hiddenTabsLength = hiddenTabKeys.length;
  
  // Handle functions
  const handleTabOnClick = (event: MouseEvent) => {
    setActiveKey((event.target as any).id);
  }  
  
  // Render component
  return (
    <div>
      <div className={style.Tabs}>
        <div className={style.TabsContainer} ref={tabsRef}>
          <ul className={style.TabList}>
            {visibleTabKeys.map((tab: string) => (
              <li id={tab} className={`${style.TabItem} ${activeKey === tab && style.Activated}`} onClick={handleTabOnClick}>{tabViews[tab].name}</li>
            ))}
            {hiddenTabsLength > 0 && (
              <TabsHiddenButton 
                hiddenTabs={getHiddenTabsObject(tabViews, hiddenTabKeys)}
                activeKey={activeKey}
                setActiveKey={setActiveKey}
              />
            )}
          </ul>
        </div>
        <div className={style.ButtonsContainer}>
          {tabViews[activeKey].buttons.map((button: any) => (
            <div className={style.ButtonDivider}>
              {button}
            </div>
          ))}
        </div>
      </div>
      <div className={style.TabPane}>
        {tabViews[activeKey].view}
      </div>
    </div>
  )
}
