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

const getVisibleTabs = (tabs: Array<string>, tabSize?: number | undefined) => {
  if (!tabSize) return tabs;
  
  return [...tabs.slice(0, tabSize), '...'];
}


export const Tabs = () => {
  
  // keep the tabs container size.
  const [ tabsContainerSize, setTabsContainerSize ] = useState<number>(window.innerWidth);
  
  const tabsPerSize = {1300: 5, 1400: 6, 1500: 7};
  
  // Ref to the tabs container.
  const tabsRef = useRef(null);
  
  // Add resize listener to tabs container
  useResizeListener(tabsRef, setTabsContainerSize);
  
  
  console.log('tabsContainerSize');
  console.log(tabsContainerSize);
  
  const allowedSize = Object.keys(tabsPerSize).reduce((size: any, prtResult: any) => {
    if (tabsContainerSize && size > tabsContainerSize && size < prtResult) {
      return size;
    }
    return prtResult;
  }, Number(Object.keys(tabsPerSize)[0]))
  
  console.log(allowedSize);
  
  return (
    <div>
      <div className={style.Tabs}>
        <div className={style.TabsContainer} ref={tabsRef}>
          <ul className={style.TabList}>
            {tabs.map((tab) => (
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
