import { useState, useRef } from 'react';
import { useGetNewNumberOfTabs } from '../../hooks/useGetNewNumberOfTabs';
import { getNumberOfTabs, getVisibleTabs } from './utils/tabs';
import style from './Tabs.module.scss';

const tabs = [
  'Suprimentos',
  'Ativos',
  'Histórico',
  'Checklist',
  'Arquivos',
  'Faturamentos',
  'Monitoramentos',
];

export const Tabs = () => {
  
  const tabsPerSize: {[key: number]: number} = {1200: 5, 1250: 6};
  
  // keep the tabs container size.
  const [ numberOfTabs, setNumberOfTabs ] = useState<number>(
    getNumberOfTabs(window.innerWidth, tabsPerSize, tabs.length)
  );
  
  // Ref to the tabs container.
  const tabsRef = useRef(null);
  
  // Add resize listener to Tabs. It will set a new number of tabs, depending on the size of the screen.
  useGetNewNumberOfTabs(setNumberOfTabs, numberOfTabs, tabsPerSize, tabs.length);
  
  const { visibleTabs, hiddenTabs } = getVisibleTabs(tabs, numberOfTabs);
  
  let hiddenTabsButton = null;
  if (hiddenTabs.length > 0) {
    hiddenTabsButton = <li className={style.TabItem}>...</li>;
  }
  
  return (
    <div>
      <div className={style.Tabs}>
        <div className={style.TabsContainer} ref={tabsRef}>
          <ul className={style.TabList}>
            {visibleTabs.map((tab) => (
              <li className={style.TabItem}>{tab}</li>
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
        TabePane
      </div>
    </div>
  )
}
