import { useRef } from 'react';
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


export const Tabs = () => {
  
  const tabContainerEl = useRef(null);
  const tabsEl = useRef(null);
  
  console.log('tabContainerEl');
  console.log(tabContainerEl.current && (tabContainerEl.current as any).offsetWidth);
  console.log(tabsEl.current && (tabsEl.current as any).scrollWidth);
  
  return (
    <div>x
      <div className={style.Tabs} ref={tabsEl}>
        <div className={style.TabsContainer} ref={tabContainerEl}>
          <ul className={style.TabList}>
            {tabs.map((tab) => (
              <li className={style.TabItem}>{tab}</li>
            ))}
          </ul>
        </div>
        <div className={style.ButtonsContainer}>
          <button>Button1</button>
          <button>Button1</button>
        </div>
      </div>
      <div style={{ margin: "100px" }}>
        TabePane
      </div>
    </div>
  )
}
