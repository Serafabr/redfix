export const handleOptionSelection = () => {
  
  const handleOneItemSelection = (filterState: any, setFilter: any) => (itemId: string) => {
    const newFilterState: any = {};
    Object.keys(filterState).forEach((id: string) => {
      newFilterState[id] = { ...filterState[id], selected: id === itemId }
    })
    setFilter(newFilterState);
  };
  
  const handleManyItemsSelection = (filterState: any, setFilter: any) => (itemId: string) => {
    const newFilterState: any = {
      ...filterState,
      [itemId]: {
        ...filterState[itemId],
        selected: !filterState[itemId].selected
      },
    };
    setFilter(newFilterState);
  };
  
  return [handleOneItemSelection, handleManyItemsSelection];
}