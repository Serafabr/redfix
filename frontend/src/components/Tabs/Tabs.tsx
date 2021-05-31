import { useState, useRef } from 'react';
import { useResizeTabsListener } from '../../hooks/useResizeTabsListener';
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

const getVisibleTabs = (tabs: Array<string>, numberOfTabs?: number | undefined) => {
  const tabsLength = tabs.length;
  
  if (!numberOfTabs || numberOfTabs === tabsLength) return {
    visibleTabs: [...tabs],
    hiddenTabs: []
  };
  
  return {
    visibleTabs: [...tabs.slice(0, numberOfTabs), '...'],
    hiddenTabs: [...tabs.slice(numberOfTabs, tabsLength)]
  };
}

const getNumberOfTabs = (tabsContainerSize: number, tabsPerSize: any) => {
  const maxSize = Math.max(...Object.keys(tabsPerSize).map(Number));
  
  const allowedSize: number = tabsContainerSize < maxSize && Object.keys(tabsPerSize).reduce((size: any, prtResult: any) => {
    if (tabsContainerSize && size > tabsContainerSize && size < prtResult) {
      return size;
    }
    return prtResult;
  }, Number(Object.keys(tabsPerSize)[0]))
  
  const numberOfTabs = tabsContainerSize >= maxSize ? tabs.length : tabsPerSize[allowedSize];
  
  return numberOfTabs;
}

export const Tabs = () => {
  
  // keep the tabs container size.
  const [ tabsContainerSize, setTabsContainerSize ] = useState<number>(window.innerWidth);
  
  const tabsPerSize: {[key: number]: number} = {1200: 5, 1250: 6};
  
  // Ref to the tabs container.
  const tabsRef = useRef(null);
  
  // Add resize listener to Tabs
  useResizeTabsListener(setTabsContainerSize);
  
  const numberOfTabs = getNumberOfTabs(tabsContainerSize, tabsPerSize);
  
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
