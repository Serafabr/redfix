const fillArrayWithPageNumbers = (
  maxPageButtons: number, 
  currentPage: number, 
  pages: number
) => {
  // Array of visible numbers on the pagination
  const visiblePageNumbers: Array<number> = [];
  
  // Array from 1, ... to, pages: [1, 2, ..., pages]
  Array.from(Array(maxPageButtons - 1), (_, index) => index + 1).forEach((i) => {

    // Next page number
    let page = currentPage + Number(i);
    if (page > 1 && page < pages && visiblePageNumbers.length < maxPageButtons - 1 && !visiblePageNumbers.includes(page)) {
      visiblePageNumbers.push(page);
    }

    // Previous page number
    page = currentPage - Number(i);
    if (page > 1 && page < pages && visiblePageNumbers.length < maxPageButtons - 1 && !visiblePageNumbers.includes(page)) {
      visiblePageNumbers.push(page);
    }
  });
  
  // Add current page to the page list
  if (currentPage !== 1 && currentPage !== pages) {
    visiblePageNumbers.push(currentPage);
  }
  
  return visiblePageNumbers;
}

const createDisplayList = (
  sortedPageNumbers: Array<number>,
  pages: number
) => {
  
  // Add first and last page
  const listPages = [1, ...sortedPageNumbers, pages];
  
  // Array with display numbers
  const result: Array<string> = [];
  
  // Add '...'
  listPages.forEach((page, index) => {
    if (index === 1 && page !== 2) {
      result.push('...')
    }
    if (index === listPages.length - 1 && listPages[listPages.length - 2] !== pages - 1) {
      result.push('...')
    }
    result.push(page.toString());
  })
  
  return result;
}

export const createPaginationDisplayList = (
  maxPageButtons: number, 
  currentPage: number, 
  pages: number
) => {
  
  // Array of visible numbers on the pagination
  const visiblePageNumbers = fillArrayWithPageNumbers(maxPageButtons, currentPage, pages);
  
  // Sort array with visible page numbers
  const sortedPageNumbers = visiblePageNumbers.sort((a, b) => (a - b));
  
  // Create display list
  return createDisplayList(sortedPageNumbers, pages);
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