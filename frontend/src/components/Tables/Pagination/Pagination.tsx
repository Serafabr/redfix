import style from './Pagination.module.scss';
import { createPaginationDisplayList, checkAndFixCurrentPage } from '../utils/pagination';

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
  
  const fixedCurrentPage = checkAndFixCurrentPage(currentPage, pages);
  
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
  
  const displayList = createPaginationDisplayList(maxPageButtons, fixedCurrentPage, pages);
  
  return (
    <ul className={style.Pagination}>
      <li className={style.PaginationItem}>
        <img src={leftIcon} alt="Anterior" />
      </li>
        {displayList.map((item) => (
          <li className={`${style.PaginationItem} ${fixedCurrentPage === Number(item) && style.Active}`}>
            <a className={style.PaginationLink} href="#">{item}</a>
          </li>
        ))}
      <li className={style.PaginationItem}>
        <img src={rightIcon} alt="Próximo" />
      </li>
    </ul>
  )
}
