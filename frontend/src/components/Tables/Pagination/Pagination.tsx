import style from './Pagination.module.scss';
import { fillArrayWithPageNumbers, checkAndFixCurrentPage, getDisplayItem } from '../utils/pagination';

import leftIcon from '../../../assets/icons/arrow-left.svg';
import rightIcon from '../../../assets/icons/arrow-right.svg';

const NUM_PAGE_BUTTONS_LARGE = 9;


type Props = {
  currentPage?: number,
  pages: number,
  setCurrentPage: (page: number) => void
}

export const Pagination = ({
  currentPage = 10,
  pages = 20,
  setCurrentPage,
}: Props) => {
  
  const maxPageButtons = NUM_PAGE_BUTTONS_LARGE;
  
  const fixedCurrentPage = checkAndFixCurrentPage(currentPage, pages);
  
  const displayListNumbers = fillArrayWithPageNumbers(maxPageButtons, fixedCurrentPage, pages);
  
  // Handle Clic
  const handleClickPagination = (pageClicked: number) => () => {
    if (pageClicked < 1) {
      return;
      
    } else if (pageClicked > pages) {
      return;
      
    } else {
      setCurrentPage(pageClicked);
    }
  }
  
  return (
    <ul className={style.Pagination}>
      <li className={style.PaginationItem} onClick={handleClickPagination(currentPage - 1)}>
        <img src={leftIcon} alt="Anterior" />
      </li>
        {displayListNumbers.map((item, index) => (
          <li 
            className={`${style.PaginationItem} ${fixedCurrentPage === Number(item) && style.Active}`} 
            onClick={handleClickPagination(item)}
          >
            <div className={style.PaginationLink}>{getDisplayItem(index, displayListNumbers)}</div>
          </li>
        ))}
      <li className={style.PaginationItem} onClick={handleClickPagination(currentPage + 1)}>
        <img src={rightIcon} alt="Próximo" />
      </li>
    </ul>
  )
}
