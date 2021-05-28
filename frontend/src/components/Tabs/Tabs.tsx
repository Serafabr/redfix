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
  'Monitoramentos',
  'Monitoramentos',
];

const getVisibleTabs = (tabs: Array<string>, firstTab: number, tabSize?: number | undefined) => {
  if (!tabSize) return tabs;
  
  return [...tabs.slice(firstTab, tabSize + 1), '...'];
}


export const Tabs = () => {
  
  const [ visibleTabs, setVisibleTabs ] = useState(getVisibleTabs(tabs, 0, 5));
  
  const tabsRef = useRef(null);
  
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
