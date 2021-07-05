// Types
import { TabsType, TabViewsType } from '../_types';

/*************************\
 * getVisibleTabs
 * @input tabs, numberOfTabs
 * @return an array with all visible and hidden tabs
\*************************/

export const getVisibleTabs = (tabs: TabsType, numberOfTabs?: number | undefined) => {
  const tabsLength = tabs.length;
  
  // All tabs are visible
  if (!numberOfTabs || numberOfTabs >= tabsLength) return {
    visibleTabKeys: [...tabs],
    hiddenTabKeys: []
  };
  
  // Return tabs (just the keys)
  return {
    visibleTabKeys: [...tabs.slice(0, numberOfTabs)],
    hiddenTabKeys: [...tabs.slice(numberOfTabs, tabsLength)]
  };
}

/*************************\
 * getHiddenTabsObject
 * @input tabViews, hiddenTabKeys
 * @return object of the tabs (ready to render)
\*************************/

export const getHiddenTabsObject = (tabViews: TabViewsType, hiddenTabKeys: Array<string>) => {
  const result: TabViewsType = {};
  hiddenTabKeys.forEach((key: string) => {
    result[key] = {...tabViews[key]};
  })
  
  return result;
}

/*************************\
 * getNumberOfTabs
 * @input tabsContainerSize, tabsPerSize, tabsLength
 * @return number of tab buttons that can be rendered (visible)
\*************************/

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