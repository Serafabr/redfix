export const getVisibleTabs = (tabs: Array<string>, numberOfTabs?: number | undefined) => {
  const tabsLength = tabs.length;
  
  if (!numberOfTabs || numberOfTabs === tabsLength) return {
    visibleTabs: [...tabs],
    hiddenTabs: []
  };
  
  return {
    visibleTabs: [...tabs.slice(0, numberOfTabs), '...'],
    hiddenTabs: [...tabs.slice(numberOfTabs, tabsLength)]
  };
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