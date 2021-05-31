import { useState, useRef } from 'react';
import { useResizeListener } from '../../hooks/useResizeListener';
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
  if (!numberOfTabs || numberOfTabs === tabs.length) return tabs;
  
  return [...tabs.slice(0, numberOfTabs), '...'];
}

export const Tabs = () => {
  
  // keep the tabs container size.
  const [ tabsContainerSize, setTabsContainerSize ] = useState<number>(window.innerWidth);
  
  const tabsPerSize: {[key: number]: number} = {1200: 5, 1250: 6};
  const maxSize = Math.max(...Object.keys(tabsPerSize).map(Number));
  
  // Ref to the tabs container.
  const tabsRef = useRef(null);
  
  // Add resize listener to Tabs
  useResizeListener(setTabsContainerSize);
  
  console.log('tabsContainerSize');
  console.log(tabsContainerSize);
  
  const allowedSize: number = tabsContainerSize < maxSize && Object.keys(tabsPerSize).reduce((size: any, prtResult: any) => {
    if (tabsContainerSize && size > tabsContainerSize && size < prtResult) {
      return size;
    }
    return prtResult;
  }, Number(Object.keys(tabsPerSize)[0]))
  
  const numberOfTabs = tabsContainerSize >= maxSize ? tabs.length : tabsPerSize[allowedSize];
  console.log(numberOfTabs);
  
  return (
    <div>
      <div className={style.Tabs}>
        <div className={style.TabsContainer} ref={tabsRef}>
          <ul className={style.TabList}>
            {getVisibleTabs(tabs, numberOfTabs).map((tab) => (
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
