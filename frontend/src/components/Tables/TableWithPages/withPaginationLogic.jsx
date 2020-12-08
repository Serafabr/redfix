import React, { Component } from 'react';

export default function withPaginationLogic(WrappedComponent) {
  class WithPaginationLogic extends Component {
    constructor(props) {
      super(props);
      this.state = {
        pageOnInput: 1,
        currentPage: 1,
        itemsPerPage: 15,
      };

      this.setPageOnInput = this.setPageOnInput.bind(this);
      this.setCurrentPage = this.setCurrentPage.bind(this);
      this.handleChangePageOnInput = this.handleChangePageOnInput.bind(this);
      this.handleFocusOutPageOnInput = this.handleFocusOutPageOnInput.bind(this);
      this.handleEnterPageOnInput = this.handleEnterPageOnInput.bind(this);
      this.handleitemsPerPage = this.handleitemsPerPage.bind(this);
    }

    setPageOnInput(page) {
      this.setState({ pageOnInput: page });
    }

    setCurrentPage(currentPage) {
      this.setState({ currentPage: currentPage }, () => {
        this.setState({ pageOnInput: currentPage });
      });
    }

    handleitemsPerPage(event) {
      const itemsPerPage = Number(event.target.value);
      this.setState({ itemsPerPage }, this.setCurrentPage(1));
    }

    handleChangePageOnInput(event) {
      const { value } = event.target;
      this.setPageOnInput(value);
    }

    handleFocusOutPageOnInput = (pagesTotal) => (event) => {
      const pageOnInput = Number(event.target.value);
      if (pageOnInput >= 1 && pageOnInput <= pagesTotal) {
        this.setCurrentPage(pageOnInput);
      } else {
        this.setPageOnInput(this.state.currentPage);
      }
    }

    handleEnterPageOnInput(event) {
      if (event.key === "Enter") {
        event.target.blur();
      }
    }

    render() {
      const paginationLogic = {
        pageOnInput: this.state.pageOnInput,
        currentPage: this.state.currentPage,
        itemsPerPage: this.state.itemsPerPage,
        handleChangePageOnInput: this.handleChangePageOnInput,
        handleFocusOutPageOnInput: this.handleFocusOutPageOnInput,
        handleEnterPageOnInput: this.handleEnterPageOnInput,
        setCurrentPage: this.setCurrentPage,
        handleitemsPerPage: this.handleitemsPerPage
      }
      return (
        <WrappedComponent
          paginationLogic={paginationLogic}
          {...this.props}
        />
      );
    }
  }
  return WithPaginationLogic;
}