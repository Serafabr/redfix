// Components
import { ButtonWithDropdown } from '../../Buttons';
import { TabViews } from '../Tabs';

export const getVisibleTabs = (tabs: Array<string>, numberOfTabs?: number | undefined) => {
  const tabsLength = tabs.length;
  
  if (!numberOfTabs || numberOfTabs === tabsLength) return {
    visibleTabs: [...tabs],
    hiddenTabs: []
  };
  
  return {
    visibleTabs: tabs.slice(0, numberOfTabs),
    hiddenTabs: tabs.slice(numberOfTabs, tabsLength)
  };
}

export const getHiddenTabsObject = (tabs: TabViews, hiddenTabKeys: Array<string>) => {
  const result: TabViews = {};
  hiddenTabKeys.forEach((key: string) => {
    result[key] = {...tabs[key]};
  })
  
  return result;
}

export const getNumberOfTabs = (tabsContainerSize: number, tabsPerSize: any, tabsLength: number) => {
  const maxSize = Math.max(...Object.keys(tabsPerSize).map(Number));
  
  const allowedSize: number = tabsContainerSize < maxSize && Object.keys(tabsPerSize).reduce((size: any, prtResult: any) => {
    if (tabsContainerSize && size > tabsContainerSize && size < prtResult) {
      return size;
    }
    return prtResult;
  }, Number(Object.keys(tabsPerSize)[0]))
  
  const numberOfTabs = tabsContainerSize >= maxSize ? tabsLength : tabsPerSize[allowedSize];
  
  return numberOfTabs;
}