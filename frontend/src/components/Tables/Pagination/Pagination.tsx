import style from './Pagination.module.scss';
import { createPaginationDisplayList, checkAndFixCurrentPage } from '../utils/pagination';

import leftIcon from '../../../assets/icons/arrow-left.svg';
import rightIcon from '../../../assets/icons/arrow-right.svg';

const NUM_PAGE_BUTTONS_LARGE = 5;


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
  
  const displayList = createPaginationDisplayList(maxPageButtons, fixedCurrentPage, pages);
  
  // Handle Click
  const handleClickPagination = (pageClicked: string, displayList: Array<string>, index: number) => () => {
    switch (pageClicked) {
      case 'previous': {
        if (currentPage === 1) {
          break;
        }
        setCurrentPage(currentPage - 1);
        break;
      }
      case 'next': {
        if (currentPage === pages) {
          break;
        }
        setCurrentPage(currentPage + 1);
        break;
      }
      case '...': {
        const lastIndex = displayList.length - 1;
        const pages = Number(displayList[lastIndex]);
        if (index === 1) {
          setCurrentPage(Number(displayList[2]) === 3 ? 2 : Number(displayList[2]) - 2);
          break;
        }
        setCurrentPage(Number(displayList[lastIndex - 2]) === pages - 2 ? pages - 1 : Number(displayList[lastIndex - 3]) + 2);
        break;
      }
      default: {
        setCurrentPage(Number(pageClicked));
        break;
      }
    }
  }
  
  return (
    <ul className={style.Pagination}>
      <li className={style.PaginationItem} onClick={handleClickPagination('previous', displayList, 0)}>
        <img src={leftIcon} alt="Anterior" />
      </li>
        {displayList.map((item, index) => (
          <li 
            className={`${style.PaginationItem} ${fixedCurrentPage === Number(item) && style.Active}`} 
            onClick={handleClickPagination(item, displayList, index)}
          >
            <div className={style.PaginationLink}>{item}</div>
          </li>
        ))}
      <li className={style.PaginationItem} onClick={handleClickPagination('next', displayList, 0)}>
        <img src={rightIcon} alt="Próximo" />
      </li>
    </ul>
  )
}
