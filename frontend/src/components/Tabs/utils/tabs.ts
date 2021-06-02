// Types
import { TabViews } from '../Tabs';

export const getVisibleTabs = (tabs: Array<string>, numberOfTabs?: number | undefined) => {
  const tabsLength = tabs.length;
  
  if (!numberOfTabs || numberOfTabs === tabsLength) return {
    visibleTabKeys: [...tabs],
    hiddenTabKeys: []
  };
  
  return {
    visibleTabKeys: [...tabs.slice(0, numberOfTabs)],
    hiddenTabKeys: [...tabs.slice(numberOfTabs, tabsLength)]
  };
}

export const getHiddenTabsObject = (tabViews: TabViews, hiddenTabKeys: Array<string>) => {
  const result: TabViews = {};
  hiddenTabKeys.forEach((key: string) => {
    result[key] = {...tabViews[key]};
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