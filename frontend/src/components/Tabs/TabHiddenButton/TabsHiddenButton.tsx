// Components
import { AddSelectBox } from '../../SelectBox';
// Types
import { TabViewsType } from '../_types';
import { IdType, OptionsType } from '../../SelectBox/_types';
//CSS
import tabStyle from '../Tabs.module.scss';
import style from './TabHiddenButton.module.scss';

/*************************\
 * PropTypes
\*************************/

type Props = {
  hiddenTabs: TabViewsType,
  activeKey: IdType,
  setActiveKey: (key: IdType) => void
}

/*************************\
 * TabsHiddenButton component
\*************************/

export const TabsHiddenButton = ({
  hiddenTabs,
  activeKey,
  setActiveKey
}: Props) => {
  
  // Render
  return (
    <AddSelectBox
      options={hiddenTabs}
      selectionArray={[activeKey]}
      boxWidth={150}
      onSelectItem={setActiveKey}
    >
      {(onClick, isOpen) => (
        <div className={`${tabStyle.TabItem} ${style.HiddenButton} ${Object.keys(hiddenTabs).includes(activeKey.toString()) && tabStyle.Activated}`} onClick={onClick}>...</div>
      )}
    </AddSelectBox>
  );
};
