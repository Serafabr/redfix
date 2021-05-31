import { useState, useRef } from 'react';
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

const getVisibleTabs = (tabs: Array<string>, firstTab: number, tabSize?: number | undefined) => {
  if (!tabSize) return tabs;
  
  return [...tabs.slice(firstTab, tabSize + 1), '...'];
}


export const Tabs = () => {
  
  const [ visibleTabs, setVisibleTabs ] = useState(getVisibleTabs(tabs, 0, 5));
  const tabsRef = useRef(null);
  const tabsContainerSize = tabsRef.current ? (tabsRef.current as any).offsetWidth : 0;
  const tabsPerSize = {1300: 5, 1400: 6, 1500: 7};
  const allowedSize = Object.keys(tabsPerSize).reduce((size: any, prtResult: any) => {
    if (tabsContainerSize && size > tabsContainerSize && size < prtResult) {
      return size;
    }
    return prtResult;
  }, Number(Object.keys(tabsPerSize)[0]))
  
  console.log(allowedSize);
  
  // useEffect(() => {
    
  // }, [tabsContainer])
  
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
