// Components
import { ButtonWithDropdown } from '../Buttons';
// Types
import { TabViews } from './Tabs';
import { OptionsType } from '../SelectBox/SelectBox';
//CSS
import style from './Tabs.module.scss';

/*************************\
 * PropTypes
\*************************/

type TabsHiddenButtonProps = {
  hiddenTabs: TabViews,
  activateKey: string,
  setActivateKey: (key: string) => void
}

export const TabsHiddenButton = ({
  hiddenTabs,
  activateKey,
  setActivateKey
}: TabsHiddenButtonProps) => {
  
  const options: OptionsType = {...hiddenTabs};
  if (Object.keys(options).includes(activateKey)) {
    options[activateKey] = {...options[activateKey], selected: true}
  }
  
  return (
    <ButtonWithDropdown
      options={options}
      boxWidth={150}
      onSelectItem={setActivateKey}
    >
      {(onClick, isOpen) => (
        //<li className={`${style.TabItem} ${style.HiddenButton}`} onClick={onClick}>...</li>
        <div className={`${style.TabItem} ${style.HiddenButton} ${Object.keys(hiddenTabs).includes(activateKey) && style.Activated}`} onClick={onClick}>...</div>
        //<div onClick={onClick}>...</div>
      )}
    </ButtonWithDropdown>
  );
};
