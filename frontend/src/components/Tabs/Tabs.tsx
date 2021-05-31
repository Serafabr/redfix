import { useState, useRef } from 'react';
import { useResizeTabsListener } from '../../hooks/useResizeTabsListener';
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
  
  // Add resize listener to Tabs
  useResizeTabsListener(setNumberOfTabs, numberOfTabs, tabsPerSize, tabs.length);
  
  const { visibleTabs, hiddenTabs } = getVisibleTabs(tabs, numberOfTabs);
  console.log(hiddenTabs);
  
  return (
    <div>
      <div className={style.Tabs}>
        <div className={style.TabsContainer} ref={tabsRef}>
          <ul className={style.TabList}>
            {visibleTabs.map((tab) => (
              <li className={style.TabItem}>{tab}</li>
            ))}
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
