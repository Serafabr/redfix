const removeDuplicates = (array: Array<any>) => {
  const result: Array<any> = [];
  
  array.forEach(element => {
    if (!result.includes(element)) {
      result.push(element)
    }
  });
  
  return result;
}


export const fillArrayWithPageNumbers = (
  maxPageButtons: number, 
  currentPage: number, 
  pages: number
) => {
  
  // Array of visible numbers on the pagination
  const visiblePageNumbers: Array<number> = removeDuplicates([1, currentPage, pages]); 

  // Array from 1, ... to, pages: [1, 2, ..., maxPageButtons - 2]
  Array.from(Array(maxPageButtons - 2), (_, index) => index + 1).forEach((i) => {
    // Next page number
    let page = currentPage + Number(i);
    if (page > 1 && page < pages && visiblePageNumbers.length < maxPageButtons && !visiblePageNumbers.includes(page)) {
      visiblePageNumbers.push(page);
    }

    // Previous page number
    page = currentPage - Number(i);
    if (page > 1 && page < pages && visiblePageNumbers.length < maxPageButtons && !visiblePageNumbers.includes(page)) {
      visiblePageNumbers.push(page);
    }
  });
  
  // Sort result
  return visiblePageNumbers.sort((a, b) => (a - b));
}

export const getDisplayItem = (
  index: number,
  displayListNumbers: Array<number>
) => {
  
  // Get items
  const previousItem = displayListNumbers[index - 1];
  const item = displayListNumbers[index];
  const nextItem = displayListNumbers[index + 1];
  
  // Check if it's the place for '...'
  const isSecondItem = index === 1;
  const isLastToLastItem = index === displayListNumbers.length - 2;
  
  // Returns
  if (isSecondItem && previousItem !== item - 1) {
    return '...';
  }
  
  if (isLastToLastItem && nextItem !== item + 1) {
    return '...';
  }
  
  return item.toString();
}

export const checkAndFixCurrentPage = (
  currentPage: number, 
  pages: number
) => {

  if (currentPage > pages) {
    return pages;
    
  } else if (currentPage < 1) {
    return 1;
    
  } else {
    return currentPage;
    
  }
}