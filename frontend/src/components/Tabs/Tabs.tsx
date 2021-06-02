// Third-party imports
import { useState, useRef, ReactNode, MouseEvent } from 'react';
// Components
import { ButtonWithDropdown } from '../Buttons';
// Hooks
import { useGetNewNumberOfTabs } from '../../hooks/useGetNewNumberOfTabs';
// Utilities
import { getNumberOfTabs, getVisibleTabs } from './utils/tabs';
// CSS
import style from './Tabs.module.scss';

/*************************\
 * General types
\*************************/

type Tabs = Array<string>;

type TabView = {
  name: string,
  view: ReactNode;
};

type TabViews = {
  [id: string]: TabView
};

type TabsPerSize = {
  [size: number]: number
};

type ActivateKey = string;

/*************************\
 * PropTypes
\*************************/

type TabsProps = {
  tabs: Tabs,
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
  
  // keep the tabs container size.
  const [ numberOfTabs, setNumberOfTabs ] = useState<number>(
    getNumberOfTabs(window.innerWidth, tabsPerSize, tabsLength)
  );
  
  // Ref to the tabs container.
  const tabsRef = useRef(null);
  
  // Add resize listener to Tabs. It will set a new number of tabs, depending on the size of the screen.
  useGetNewNumberOfTabs(setNumberOfTabs, numberOfTabs, tabsPerSize, tabsLength);
  
  const { visibleTabs, hiddenTabs } = getVisibleTabs(tabs, numberOfTabs);
  
  
  const handleTabOnClick = (event: MouseEvent) => {
    setActivateKey((event.target as any).id);
  }  
  
  let hiddenTabsButton = null;
  const hiddenFake = {'monitors': {name: "Monitoramento"}, 'billings': {name: "Faturamentos"}};
  
  if (hiddenTabs.length > 0) {
    hiddenTabsButton = (
      <ButtonWithDropdown
        options={hiddenFake}
        boxWidth={150}
        onSelectItem={setActivateKey}
      >
        {(onClick, isOpen) => (
          //<li className={`${style.TabItem} ${style.HiddenButton}`} onClick={onClick}>...</li>
          <div className={`${style.TabItem} ${style.HiddenButton} ${Object.keys(hiddenFake).includes(activateKey) && style.Activated}`} onClick={onClick}>...</div>
          //<div onClick={onClick}>...</div>
        )}
      </ButtonWithDropdown>
    );
  };
  
  return (
    <div>
      <div className={style.Tabs}>
        <div className={style.TabsContainer} ref={tabsRef}>
          <ul className={style.TabList}>
            {visibleTabs.map((tab: string) => (
              <li id={tab} className={`${style.TabItem} ${activateKey === tab && style.Activated}`} onClick={handleTabOnClick}>{tabViews[tab].name}</li>
            ))}
            {hiddenTabsButton}
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
