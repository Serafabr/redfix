import style from './Pagination.module.scss';

import leftIcon from '../../../assets/icons/arrow-left.svg';
import rightIcon from '../../../assets/icons/arrow-right.svg';

const NUM_PAGE_BUTTONS_LARGE = 5;

type Props = {
  currentPage?: number
}

export const Pagination = ({
  currentPage = 10,
}) => {
  const pages = 10;
  const setCurrentPage = (page: any) => {};
  
  if (currentPage > pages) {
    currentPage = pages;
  } else if (currentPage < 1) {
    currentPage = 1;
  }
  
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
  const visiblePageNumbers: Array<number> = [];
  
  console.log("Pagination: ");
  Array.from(Array(maxPageButtons), (_, index) => index + 1).forEach((i) => {
    console.log("ForEach: ", i);
    let page = currentPage + Number(i);
    if (page > 1 && page < pages && visiblePageNumbers.length < maxPageButtons - 1 && !visiblePageNumbers.includes(page)) {
      visiblePageNumbers.push(page);
    }

    page = currentPage - Number(i);
    if (page > 1 && page < pages && visiblePageNumbers.length < maxPageButtons - 1 && !visiblePageNumbers.includes(page)) {
      visiblePageNumbers.push(page);
    }
    console.log(visiblePageNumbers);
  });
  
  console.log(visiblePageNumbers);
  
  if (currentPage !== 1 && currentPage !== pages) {
    visiblePageNumbers.push(currentPage);
  }
  
  const sortedPageNumbers = visiblePageNumbers.sort((a, b) => (a - b));
  
  const listPages = [1, ...sortedPageNumbers, pages];

  console.log(listPages);
  
  const displayList: Array<string> = [];
  listPages.forEach((page, index) => {
    if (index === 1 && page !== 2) {
      displayList.push('...')
    }
    if (index === listPages.length - 1 && listPages[listPages.length - 2] !== pages - 1) {
      displayList.push('...')
    }
    displayList.push(page.toString());
  })
  
  return (
    <ul className={style.Pagination}>
      <li className={style.PaginationItem}>
        <img src={leftIcon} alt="Anterior" />
      </li>
        {displayList.map((item) => (
          <li className={`${style.PaginationItem} ${currentPage === Number(item) && style.Active}`}>
            <a className={style.PaginationLink} href="#">{item}</a>
          </li>
        ))}
      <li className={style.PaginationItem}>
        <img src={rightIcon} alt="Próximo" />
      </li>
    </ul>
  )
}
