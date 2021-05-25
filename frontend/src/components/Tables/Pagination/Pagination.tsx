import style from './Pagination.module.scss';

const NUM_PAGE_BUTTONS_LARGE = 5;

export const Pagination = () => {
  const pages = 100;
  const currentPage = 25;
  const setCurrentPage = (page: any) => {};
  
  // const handleClickPagination = (pageClicked: string) => {
  //   switch (pageClicked) {
  //     case "first": {
  //       setCurrentPage(1);
  //       break;
  //     }
  //     case "last": {
  //       setCurrentPage(pages);
  //       break;
  //     }
  //     case "previous": {
  //       if (currentPage === 1) {
  //         break;
  //       }
  //       setCurrentPage(currentPage - 1);
  //       break;
  //     }
  //     case "next": {
  //       if (currentPage === pages) {
  //         break;
  //       }
  //       setCurrentPage(currentPage + 1);
  //       break;
  //     }
  //     default: {
  //       setCurrentPage(pageClicked);
  //       break;
  //     }
  //   }
  // }
  
  
  const maxPageButtons = NUM_PAGE_BUTTONS_LARGE;
  const visiblePageNumbers: Array<number> = [currentPage];
  
  console.log("Pagination: ");
  Array.from(Array(maxPageButtons - 1), (_, index) => index + 1).forEach((i) => {
    let page = currentPage + Number(i);
    if (page > 1 && page < pages && visiblePageNumbers.length < maxPageButtons && !visiblePageNumbers.includes(page)) {
      visiblePageNumbers.push(page);
    }

    page = currentPage - Number(i);
    if (page > 1 && page < pages && visiblePageNumbers.length < maxPageButtons && !visiblePageNumbers.includes(page)) {
      visiblePageNumbers.push(page);
    }
  });
  
  const sortedPageNumbers = visiblePageNumbers.sort((a, b) => (a - b));
  
  const listPages = [1, ...sortedPageNumbers, pages];
  
  const displayList: Array<string> = [];
  listPages.forEach((page, index) => {
    if (index === 1 && page !== 2) {
      displayList.push('...')
    }
    if (index === listPages.length - 1 && page != pages - 1) {
      displayList.push('...')
    }
    displayList.push(page.toString());
  })
  
  return (
    <ul className={style.Pagination}>
      <li className={style.PaginationItem}>{'<'}</li>
      {displayList.map((item) => (
        <li className={`${style.PaginationItem} ${currentPage === Number(item) && style.Active}`}><a className={style.PaginationLink} href="#">{item}</a></li>
        ))}
      <li className={style.PaginationItem}>{'>'}</li>
    </ul>
  )
}
