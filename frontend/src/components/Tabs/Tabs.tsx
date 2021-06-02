// Third-party imports
import { useState, useRef, ReactNode, MouseEvent } from 'react';
// Components
import { ButtonWithDropdown } from '../Buttons';
// Hooks
import { useGetNewNumberOfTabs } from '../../hooks/useGetNewNumberOfTabs';
// Utilities
import { getNumberOfTabs, getVisibleTabs, getHiddenTabsObject } from './utils/tabs';
// CSS
import style from './Tabs.module.scss';
import { TabsHiddenButton } from './TabsHiddenButton';

/*************************\
 * General types
\*************************/

export type TabsType = Array<string>;

export type TabView = {
  name: string,
  view: ReactNode;
};

export type TabViews = {
  [id: string]: TabView
};

export type TabsPerSize = {
  [size: number]: number
};

export type ActivateKey = string;

/*************************\
 * PropTypes
\*************************/

type TabsProps = {
  tabs: TabsType,
  tabViews: TabViews,
  tabsPerSize?: TabsPerSize,
  activateKey: ActivateKey,
  setActivateKey: (id: string) => void
}

/*************************\
 * Tabs Component
\*************************/

export const Tabs = ({
  tabs,
  tabViews,
  tabsPerSize = {},
  activateKey,
  setActivateKey
}: TabsProps) => {
  
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
    setActivateKey((event.target as any).id);
  }  
  
  return (
    <div>
      <div className={style.Tabs}>
        <div className={style.TabsContainer} ref={tabsRef}>
          <ul className={style.TabList}>
            {visibleTabKeys.map((tab: string) => (
              <li id={tab} className={`${style.TabItem} ${activateKey === tab && style.Activated}`} onClick={handleTabOnClick}>{tabViews[tab].name}</li>
            ))}
            {hiddenTabsLength > 0 && (
              <TabsHiddenButton 
                hiddenTabs={getHiddenTabsObject(tabViews, hiddenTabKeys)}
                activateKey={activateKey}
                setActivateKey={setActivateKey}
              />
            )}
          </ul>
        </div>
        <div className={style.ButtonsContainer}>
          <div className={style.TabButtonDivider}>
            <button className={style.TabButton}>Aprovar !</button>
          </div>
          <button className={style.TabButton}>Adicionar +</button>
        </div>
      </div>
      <div style={{ margin: "100px" }}>
        {tabViews[activateKey].view}
      </div>
    </div>
  )
}
