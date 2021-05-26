import React, { Component } from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

const NUM_PAGE_BUTTONS_LARGE = 5;
// const NUM_PAGE_BUTTONS_MID = 3;
// const NUM_PAGE_BUTTONS_SMALL = 1;

class PaginationForTable extends Component {

  handleClickPagination(pageClicked) {
    const { pagesTotal, pageCurrent, setCurrentPage } = this.props;
    switch (pageClicked) {
      case "Primeira": {
        setCurrentPage(1);
        break;
      }
      case "Última": {
        setCurrentPage(pagesTotal);
        break;
      }
      case "-": {
        if (pageCurrent === 1) {
          break;
        }
        setCurrentPage(pageCurrent - 1);
        break;
      }
      case "+": {
        if (pageCurrent === pagesTotal) {
          break;
        }
        setCurrentPage(pageCurrent + 1);
        break;
      }
      default: {
        setCurrentPage(pageClicked);
        break;
      }
    }
  }

  render() {
    const { pagesTotal, pageCurrent } = this.props;
    const maxPageButtons = NUM_PAGE_BUTTONS_LARGE;
    const visiblePages = [];

    [...Array(maxPageButtons).keys()].forEach(i => {
      let page = pageCurrent + Number(i);
      if (page > 0 && page <= pagesTotal && visiblePages.length < maxPageButtons && !visiblePages.includes(page)) {
        visiblePages.push(page);
      }

      page = pageCurrent - Number(i);
      if (page > 0 && page <= pagesTotal && visiblePages.length < maxPageButtons && !visiblePages.includes(page)) {
        visiblePages.push(page);
      }
    });

    const listPages = ["Primeira", "-", ...visiblePages.sort((a, b) => (a - b)), "+", "Última"];

    return (
      <Pagination aria-label="Page navigation example">
        {listPages.map(item => (
          <PaginationItem active={item == pageCurrent} key={String(item)}>
            <PaginationLink
              onClick={() => this.handleClickPagination(item)}
              style={(item === "Primeira" || item === "Última") ? { width: "80px" } : { width: "auto" }}
            >
              {item}
            </PaginationLink>
          </PaginationItem>
        ))}
      </Pagination>
    );
  }
}

export default PaginationForTable;