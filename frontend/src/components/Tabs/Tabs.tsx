import { useState, useRef } from 'react';
import { useGetNewNumberOfTabs } from '../../hooks/useGetNewNumberOfTabs';
import { getNumberOfTabs, getVisibleTabs } from './utils/tabs';
import style from './Tabs.module.scss';
import { ButtonWithDropdown } from '../Buttons';
import { AlignListType } from '../Buttons/ButtonWithDropdown/ButtonWithDropdown';

const tabs = [
  'history',
  'supplies',
  'assets',
  'checklist',
  'files',
  'billings',
  'monitors'
];

const tabViews: any = {
  history: { name: "Histórico", view: <div>Histórico</div> },
  supplies: { name: "Suprimentos", view: <div>Suprimentos</div> },
  assets: { name: "Ativos", view: <div>Ativos</div> },
  checklist: { name: "Checklist", view: <div>Checklist</div> },
  files: { name: "Arquivos", view: <div>Arquivos</div> },
  billings: { name: "Faturamentos", view: <div>Faturamentos</div> },
  monitors: { name: "Monitores", view: <div>Monitores</div> },
}

const tabsPerSize: {[key: number]: number} = {1200: 5, 1250: 6};

const activateKey = 'assets';

export const Tabs = () => {
  
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
  
  let hiddenTabsButton = null;
  const hiddenFake = {'monitor': {name: "Monitoramento"}, 'billing': {name: "Faturamentos"}};
  
  if (hiddenTabs.length > 0) {
    hiddenTabsButton = (
      <ButtonWithDropdown
        options={hiddenFake}
        boxWidth={150}
        onSelectItem={(id) => {console.log(id)}}
      >
        {(onClick, isOpen) => (
          //<li className={`${style.TabItem} ${style.HiddenButton}`} onClick={onClick}>...</li>
          <div className={`${style.TabItem} ${style.HiddenButton} ${isOpen && style.Activated}`} onClick={onClick}>...</div>
          //<div onClick={onClick}>...</div>
        )}
      </ButtonWithDropdown>
    );
  }
  
  return (
    <div>
      <div className={style.Tabs}>
        <div className={style.TabsContainer} ref={tabsRef}>
          <ul className={style.TabList}>
            {visibleTabs.map((tab: string) => (
              <li className={`${style.TabItem} ${activateKey === tab && style.Activated}`}>{tabViews[tab].name}</li>
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
