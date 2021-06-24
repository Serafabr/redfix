// Components
import { AddSelectBox } from '../Buttons';
// Types
import { TabViewsType } from './_types';
import { OptionsType } from '../SelectBox/_types';
//CSS
import style from './Tabs.module.scss';

/*************************\
 * PropTypes
\*************************/

type Props = {
  hiddenTabs: TabViewsType,
  activeKey: string,
  setActiveKey: (key: string) => void
}

/*************************\
 * TabsHiddenButton component
\*************************/

export const TabsHiddenButton = ({
  hiddenTabs,
  activeKey,
  setActiveKey
}: Props) => {
  
  // Tab selection
  const options: OptionsType = {...hiddenTabs};
  if (Object.keys(options).includes(activeKey)) {
    options[activeKey] = {...options[activeKey], selected: true}
  }
  
  // Render
  return (
    <AddSelectBox
      options={options}
      boxWidth={150}
      onSelectItem={setActiveKey}
    >
      {(onClick, isOpen) => (
        <div className={`${style.TabItem} ${style.HiddenButton} ${Object.keys(hiddenTabs).includes(activeKey) && style.Activated}`} onClick={onClick}>...</div>
      )}
    </AddSelectBox>
  );
};
